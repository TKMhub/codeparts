"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import TopLogo from '../public/codeParts_white.svg';
import styles from './top.module.scss';

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // 画面幅が768px未満：スマホ
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.Top}>
      <div className={isMobile ? styles.Top_Contents_Mobile : styles.Top_Contents}>
        <div className={styles.Top_Contents_Logo}>
          <Image src={TopLogo} alt="Logo" width={230} height={150} priority={true} />
        </div>
        <h1>
          CodePartsでPGMを見つけて、
          <br />
          自分のサービスに取り入れよう。
        </h1>
      </div>
    </div>
  );
};

export default Home;
