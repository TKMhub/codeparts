"use strict";
import React, { useState } from 'react';
import Link from "next/link";
import styles from "./header.module.scss";
import Image from "next/image";
import TopLogo from "public/codeParts_Black.svg";
import { Button } from "@mui/material";
import { motion, AnimatePresence, SVGMotionProps } from "framer-motion";

const Path = (props: React.JSX.IntrinsicAttributes & SVGMotionProps<SVGPathElement> & React.RefAttributes<SVGPathElement>) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const transition = { duration: 0.3 };

const MobileHeader = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: 'TOP', href: '/' },
    { label: 'Blog', href: '/' },
    { label: 'Skills', href: '/' },
    { label: 'Contact', href: '/' }
  ];

  const renderLinks = () =>
    links.map((link, index) =>
      <Link key={index} href={link.href}>
       {link.label}
      </Link>
    );

  return (
    <div className={styles.Header} onClick={() => isMenuOpen && setMenuOpen(false)}>
      <Link href="/">
        <Image src={TopLogo} style={{ width: "100px" }} alt="Logo" priority={true} />
      </Link>
      <div className={styles.Header_right}>
        <div className={styles.Header_right_item}>
          <button onClick={(e) => {e.stopPropagation(); setMenuOpen(!isMenuOpen);}}>
            <svg width="23" height="23" viewBox="0 0 23 23">
              <Path
                animate={isMenuOpen ? { d: "M 3 16.5 L 20 16.5", opacity: 1 } : { d: "M 3 2.5 L 20 2.5", opacity: 1 }}
                initial={false}
                transition={transition}
              />
              <Path
                d="M 3 9.423 L 20 9.423"
                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                initial={false}
                transition={transition}
              />
              <Path
                animate={isMenuOpen ? { d: "M 3 2.5 L 20 16.346", opacity: 1 } : { d: "M 3 16.346 L 20 16.346", opacity: 1 }}
                initial={false}
                transition={transition}
              />
            </svg>
          </button>
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ x: '-100vw' }}
                animate={{ x: 0 }}
                exit={{ x: '-100vw' }}
                className={styles.Sidebar}
                onClick={e => e.stopPropagation()}
              >
                {renderLinks()}
                <Button
                  className={styles.Header_right_item_buttonSpace_button}
                  variant="contained"
                  style={{ width: "80px", height: "40px" }}
                >
                  Login
                </Button>
                <Button
                  className={styles.Header_right_item_buttonSpace_button}
                  variant="contained"
                  style={{ width: "80px", height: "40px" }}
                >
                  新規
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
