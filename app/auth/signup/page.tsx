"use client";
import React, { useState, useRef, useEffect } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import styled from "@emotion/styled";
import Link from "next/link";

const SignupContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 10rem;
  color: #1876d2;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 2rem;
    height: 85vh;
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

  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

const StyledTextField = styled(TextField)`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // 新規ユーザー登録処理
    console.log("Email: ", email);
    console.log("Password: ", password);
  };

  return (
    <SignupContainer>
      <FormBox>
        <Typography variant="subtitle1" align="center" gutterBottom>
          ユーザーを新規登録してください。
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
          <StyledTextField
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
            fullWidth
            inputProps={{
              style: { color: "#ffffff" },
            }}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Signup
          </Button>
        </form>
      </FormBox>
      <Box mt={2}>
        <Typography variant="body2">
          <Link href="/auth/login">ログインはこちら</Link>
        </Typography>
      </Box>
    </SignupContainer>
  );
};

export default Signup;
