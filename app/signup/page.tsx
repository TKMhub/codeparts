"use client";
import React, { useState, useRef, useEffect } from "react"; // useRefとuseEffectを追加
import { Box, Button, TextField, Typography } from "@mui/material";
import styled from "@emotion/styled";
import Link from "next/link";
import styles from "./signup.module.scss";

const SignupContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 10rem;
  color: #1876d2;
  box-sizing: border-box;
`;

const FormBox = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  padding: 2rem;
  border-radius: 10px;
  background-color: #383838;
  margin-bottom: 2rem; // 下マージンを追加
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
        <Typography variant="h6" align="center" gutterBottom>
          ユーザーを新規登録してください。
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
            fullWidth
            className={styles.imputForm}
            inputProps={{ ref: emailRef }}
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
            fullWidth
            className={styles.imputForm}
          />
          <TextField
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
            fullWidth
            className={styles.imputForm}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth className={styles.imputForm}>
            Signup
          </Button>
        </form>
      </FormBox>
      <Box mt={2}>
        <Typography variant="body2">
          <Link href="/login">ログインはこちら</Link>
        </Typography>
      </Box>
    </SignupContainer>
  );
};

export default Signup;
