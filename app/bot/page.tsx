"use client";
import React, { SyntheticEvent, useState } from "react";
import {
  Configuration,
  CreateCompletionRequest,
  CreateCompletionResponse,
  OpenAIApi,
} from "openai";
import axios from "axios";

const box: React.FC = () => {
  const configuration = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_OPENAPI_KEY,
  });

  interface CompletionRequest {
    model: string;
    prompt: string;
    max_tokens: number;
  }

  interface CompletionResponse {
    id: string;
    object: string;
    created: number;
    model: string;
    choices: Array<{ text: string }>;
  }

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const prompt = "こんにちは";

    const data: CompletionRequest = {
      model: "gpt-3.5-turbo",
      prompt: prompt,
      max_tokens: 60,
    };

    try {
      const response = await axios.post<CompletionResponse>(
        "https://api.openai.com/v1/engines/davinci/completions",
        data,
        {
          headers: {
            Authorization: `Bearer ${OPENAI_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error("Failed to fetch the data", error);
    }
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
            <div className="flex justify-end mb-2">
              <div className="bg-indigo-400 text-white p-4 rounded-md">
                ユーザーの質問
              </div>
            </div>
            <div className="flex justify-start mb-2">
              <div className="bg-gray-400 text-white p-4 rounded-md">回答</div>
            </div>
          </div>
          <form className="w-full" onSubmit={(e) => handleSubmit(e)}>
            <div className="flex items-center p-4 bg-gray-100 rounded-b-lg w-full">
              <input
                type="text"
                className="flex-1 border-2 py-2 px-4 text-black focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded-lg"
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
