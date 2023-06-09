"use client";
import React from "react";
import Link from "next/link";
import styles from "./header.module.scss";
import Image from "next/image";
import TopLogo from "public/codeParts_Black.svg";
import { Button } from "@mui/material";

const PCHeader = () => {
  return (
    <div className={styles.Header}>
      <Link href="/">
        <Image
          src={TopLogo}
          style={{ width: "100px" }}
          alt="Logo"
          priority={true}
        />
      </Link>
      <div className={styles.Header_right}>
        <div className={styles.Header_right_item}>
          <Link href="/" className={styles.Header_right_item_link}>
            TOP
          </Link>
          <Link href="/bot" className={styles.Header_right_item_link}>
            Bot
          </Link>
          <Link href="/" className={styles.Header_right_item_link}>
            Skills
          </Link>
          <Link href="/" className={styles.Header_right_item_link}>
            Contact
          </Link>
          <Link
            href="/auth/login"
            className={styles.Header_right_item_buttonSpace}
          >
            <Button
              className={styles.Header_right_item_buttonSpace_button}
              variant="contained"
              style={{ width: "80px", height: "40px" }}
            >
              Login
            </Button>
          </Link>
          <Link
            href="/auth/signup"
            className={styles.Header_right_item_buttonSpace}
          >
            <Button
              className={styles.Header_right_item_buttonSpace_button}
              variant="contained"
              style={{ width: "80px", height: "40px" }}
            >
              新規
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PCHeader;
