"use client";
import React, { useState, useRef, useEffect } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import styled from "@emotion/styled";
import Link from "next/link";

const LoginContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 10rem;
  color: #1876d2;
  box-sizing: border-box;
  @media (max-width: 768px) {
    padding: 2rem;
    height: 95vh;
  }
`;

const FormBox = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 420px;
  padding: 2rem;
  border-radius: 10px;
  background-color: rgba(56, 56, 56, 0.7);
  margin-bottom: 2rem;
  backdrop-filter: blur(50px);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const StyledTextField = styled(TextField)`
  margin-top: 20px;
  margin-bottom: 20px;
  color: #ffffff !important;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // ログイン録処理
    console.log("Email: ", email);
    console.log("Password: ", password);
  };

  return (
    <LoginContainer>
      <FormBox>
        <Typography variant="subtitle1" align="center" gutterBottom>
          ユーザーログインをしてください。
        </Typography>
        <form onSubmit={handleSubmit}>
          <StyledTextField
            label="Email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
            fullWidth
            inputProps={{
              ref: emailRef,
              style: { color: "#ffffff" },
            }}
          />
          <StyledTextField
            label="Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
            fullWidth
            inputProps={{
              style: { color: "#ffffff" },
            }}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </form>
      </FormBox>
      <Box mt={2}>
        <Typography variant="body2" align="center">
          <Link href="/auth/signup">新規登録はこちら</Link>
        </Typography>
        <br />
        <Typography variant="body2" align="center">
          <Link href="/auth/password">パスワードをお忘れですか？</Link>
        </Typography>
      </Box>
    </LoginContainer>
  );
};

export default Login;
