import React, { useState } from "react";
import Link from "next/link";
import styles from "./header.module.scss";
import Image from "next/image";
import TopLogo from "public/codeParts_Black.svg";
import { Button } from "@mui/material";
import { motion, AnimatePresence, SVGMotionProps } from "framer-motion";

type PathProps = React.JSX.IntrinsicAttributes &
  SVGMotionProps<SVGPathElement> &
  React.RefAttributes<SVGPathElement>;

const Path: React.FC<PathProps> = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 40%)"
    strokeLinecap="round"
    {...props}
  />
);

const humbargarTransition = { duration: 0.3 };
const sidebarTransition = { duration: 0.7 };

const links = [
  { label: "TOP", href: "/" },
  { label: "Blog", href: "/" },
  { label: "Skills", href: "/" },
  { label: "Contact", href: "/" },
];

const renderLinks = () =>
  links.map((link, index) => (
    <Link key={index} href={link.href} className={styles.Link}>
      {link.label}
    </Link>
  ));

const MobileHeader: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenuOpen = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={styles.Header}
      onClick={() => isMenuOpen && setMenuOpen(false)}
    >
      <div className={styles.Header_right}>
        <div className={styles.Header_right_item}>
          <button className={styles.Hamburger} onClick={toggleMenuOpen}>
            <svg width="30" height="30" viewBox="0 0 23 23">
              <Path
                animate={
                  isMenuOpen
                    ? { d: "M 3 16.5 L 20 2.5", opacity: 1 }
                    : { d: "M 3 2.5 L20 2.5", opacity: 1 }
                }
                initial={false}
                transition={humbargarTransition}
              />
              <Path
                d="M 3 9.423 L 20 9.423"
                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                initial={false}
                transition={humbargarTransition}
              />
              <Path
                animate={
                  isMenuOpen
                    ? { d: "M 3 2.5 L 20 16.346", opacity: 1 }
                    : { d: "M 3 16.346 L 20 16.346", opacity: 1 }
                }
                initial={false}
                transition={humbargarTransition}
              />
            </svg>
          </button>
          <AnimatePresence>
            {isMenuOpen && (
              <>
                <div
                  className={styles.Overlay}
                  onClick={() => setMenuOpen(false)}
                />
                <motion.div
                  initial={{ x: "-100vw" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100vw" }}
                  transition={sidebarTransition}
                  className={styles.Sidebar}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className={styles.MenuItems}>
                    {renderLinks()}
                    <Button
                      className={styles.Header_right_item_buttonSpace_button}
                      variant="contained"
                      style={{ width: "100%", height: "40px",marginTop: "20px", display: "block" }}
                    >
                      Login
                    </Button>
                    <Button
                      className={styles.Header_right_item_buttonSpace_button}
                      variant="contained"
                      style={{ width: "100%", height: "40px",marginTop: "20px", display: "block" }}
                    >
                      新規
                    </Button>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
