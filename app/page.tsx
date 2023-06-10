"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import TopLogo from "../public/codeParts_Black.svg";
import styles from "./top.module.scss";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@mui/material";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  const variants = {
    hidden: { opacity: 0, x: "-100vw" },
    visible: { opacity: 1, x: "0" },
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // 画面幅が768px未満：スマホ
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.Top}>
      <div className={`${isMobile ? styles.Top_Mobile : styles.Top_Pc}`}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ type: "spring", stiffness: 10, damping: 6 }}
        >
          <div className={`${isMobile ? styles.Top_Mobile : styles.Top_Pc}`}>
            <div className={styles.Top_Logo}>
              <Image src={TopLogo} alt="Logo" priority={true} />
            </div>
            <h1>
              CodePartsでPGMを見つけて、
              <br />
              自分のサービスに取り入れよう。
            </h1>
            <Link href="/">
              <Button className={styles.Top_Button} variant="outlined">
                <p>Get Started</p>
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
