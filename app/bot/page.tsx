"use client";
import React, {
  useState,
  SyntheticEvent,
  ChangeEvent,
  FunctionComponent,
} from "react";
import axios from "axios";

interface Message {
  text: string;
  isBot: boolean;
}

const box: FunctionComponent = () => {
  const [messages, setMessages] = useState<Array<Message>>([]);
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    // Update the messages array with the user's message
    setMessages([...messages, { text: message, isBot: false }]);

    // Send the user's message to the OpenAI API
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant.",
          },
          {
            role: "user",
            content: message,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAPI_KEY}`,
        },
      }
    );

    // Update the messages array with the bot's response
    setMessages([
      ...messages,
      { text: response.data.choices[0].message.content, isBot: true },
    ]);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="max-w-lg w-full">
          <div
            style={{ height: "650px" }}
            className="bg-black w-full p-4 h-96 overflow-scroll rounded-lg"
          >
            <span className="text-center block font-medium text-2xl border-b-2 border-indigo-400 pb-4 mb-3">
              QA bot
            </span>
            {messages.map((message, index) => (
              <div
                className={`flex justify-${
                  message.isBot ? "start" : "end"
                } mb-2`}
                key={index}
              >
                <div
                  className={`bg-${
                    message.isBot ? "gray-400" : "indigo-400"
                  } text-white p-4 rounded-md`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          <form className="w-full" onSubmit={(e) => handleSubmit(e)}>
            <div className="flex items-center p-4 bg-gray-100 rounded-b-lg w-full">
              <input
                type="text"
                className="flex-1 border-2 py-2 px-4 text-black focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded-lg"
                value={message}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="bg-indigo-400 text-white p-2 ml-2 rounded-lg"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default box;
