"use client";
import Link from "next/link";
import styles from "./header.module.scss";
import Image from "next/image";
import TopLogo from "public/codeParts_Black.svg";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import PCHeader from "./PCHeader/page";
import MobileHeader from "./MobileHeader/page";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

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
    <div>
      {isMobile ? <MobileHeader /> : <PCHeader />}
    </div>
  )
}

export default Header