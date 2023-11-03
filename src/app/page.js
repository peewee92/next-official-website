"use client"; // This is a client component

import "./styles.scss";
import "animate.css";

import React, { useEffect, useRef, useState } from "react";

import Footer from "./components/footer";
import Image from "next/image";
import Link from "next/link";
import Nav from "./components/nav";
import { Roboto } from "next/font/google";
import ball from "../assets/ball.webp";
import { useIsVisible } from "./hooks/useIsVisible";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);
  const ref2 = useRef();
  const isVisible2 = useIsVisible(ref2);
  const ref3 = useRef();
  const isVisible3 = useIsVisible(ref3);
  const ref4 = useRef();
  const isVisible4 = useIsVisible(ref4);

  // const setRem = async ()=>{
  //   await require('lib-flexible')
  // }

  // useEffect(()=>{
  //   setRem()
  //   window.addEventListener('resize',setRem)
  // })

  return (
    <main className="flex flex-col items-center justify-between p-1">
      <Nav />
    
      <div className="welcome " >
        <div className="welcome-right" style={{ width: "75%" }}>
          <h4 className={`welcome-title font-Zen`}>
            Welcome to Goodmorning Network
          </h4>
          <p className="welcome-content font-Montserrat">
            GoodmorningNetwork is redefining the boundaries between digital and
            real assets, marking another significant milestone in the maturation
            of blockchain technology.
          </p>
        </div>
        <div
          ref={ref1}
          className={`welcome-right ${
            isVisible1 ? "animate__animated animate__rotateIn" : ""
          }`}
        >
          <Image src={ball} alt="ball" />
        </div>
      </div>

      <div className="welcome welcome2">
        <div
          ref={ref2}
          className={`welcome-right ${
            isVisible2 ? "animate__animated animate__rotateIn" : ""
          }`}
        >
          {/* <img src="https://framerusercontent.com/images/sS4OsevI9FcvYGmNbrpBsl6T8.png" alt=''></img>  */}
          <Image src={ball} alt="ball" />
        </div>

        <div className="welcome-left" style={{ width: "75%" }}>
          <h4 className="welcome-title font-Zen">Overview</h4>
          <p className="welcome-content font-Montserrat">
            GoodmorningNetwork aims to create a comprehensive, reliable, and
            highly interactive ecosystem by seamlessly integrating real-world
            assets (RWA) with a virtual gaming economy. Built on a PoW consensus
            mechanism, the platform offers multiple layers of incentives
            including block participant rewards, gaming rewards, masternode
            incentives, and team development funds.
          </p>
        </div>
      </div>

      <div className="welcome">
        <div className="welcome-left width-large">
          <h4 className="welcome-title font-Zen">GameMining</h4>
          <p className="welcome-content font-Montserrat">
            We've put together a guide so you can easily know how to get
            involved in GoodmorningNetwork's GameMining!
          </p>
          <div className="game-list">
            <div className="game-list-item">
              <a
                target="_blank"
                href="https://goodmorningnetwork.gitbook.io/goodmorningnetwork/gaming/how-to-pubg"
              >
                <span className="game-list-item-icon">🔫</span>
                <span>How-to-Pubg</span>
              </a>
            </div>
            <div className="game-list-item">
              <a
                target="_blank"
                href="https://goodmorningnetwork.gitbook.io/goodmorningnetwork/gaming/how-to-dota2"
              >
                <span className="game-list-item-icon">🎮</span>
                <span>how-to-Dota2</span>
              </a>
            </div>
            <div className="game-list-item">
              <a
                target="_blank"
                href="https://goodmorningnetwork.gitbook.io/goodmorningnetwork/gaming/how-to-naraka"
              >
                <span className="game-list-item-icon">🗡</span>
                <span>How-to-Naraka</span>
              </a>
            </div>
          </div>
        </div>
        <div
          ref={ref3}
          className={`welcome-right ${
            isVisible3 ? "animate__animated animate__rotateIn" : ""
          }`}
        >
          {/* <img src='https://framerusercontent.com/images/sS4OsevI9FcvYGmNbrpBsl6T8.png' /> */}
          <Image src={ball} alt="ball" />
        </div>
      </div>

      <div className="welcome welcome2">
        <div
          ref={ref4}
          className={`welcome-right ${
            isVisible4 ? "animate__animated animate__rotateIn" : ""
          }`}
        >
          {/* <img src="https://framerusercontent.com/images/sS4OsevI9FcvYGmNbrpBsl6T8.png" alt=''></img>  */}
          <Image src={ball} alt="ball" />
        </div>

        <div className="welcome-left" style={{ width: "75%" }}>
          <h4 className="welcome-title font-Zen">Real World Assets (RWA)</h4>
          <p className="welcome-content font-Montserrat">
            RWA crypto is different from other cryptocurrencies such as Bitcoin
            and Ethereum, which are not backed by any physical asset or
            commodity.
          </p>
        </div>
      </div>

      <div className="welcome">
        <div className="welcome-left" style={{ width: "75%" }}>
          <h4 className="welcome-title font-Zen">About</h4>
          <p className="welcome-content font-Montserrat">
            We've put together a guide so you can easily know how to get
            involved in GoodmorningNetwork's PowMining!
          </p>
          <div className="game-list">
            <div className="game-list-item">
              <a src=""></a>
              <span className="game-list-item-icon"></span>
              <span>Broken link</span>
            </div>
            <div className="game-list-item">
              <a
                target="_blank"
                href="https://goodmorningnetwork.gitbook.io/goodmorningnetwork/building/road-map"
              >
                <span className="game-list-item-icon">🗺</span>
                <span>Road Map</span>
              </a>
            </div>
            <div className="game-list-item">
              <a
                target="_blank"
                href="https://goodmorningnetwork.gitbook.io/goodmorningnetwork/building/white-paper"
              >
                <span className="game-list-item-icon">📜</span>
                <span>White Paper</span>
              </a>
            </div>
          </div>
        </div>
        <div
          ref={ref4}
          className={`welcome-right ${
            isVisible4 ? "animate__animated animate__rotateIn" : ""
          }`}
        >
          {/* <img src="https://framerusercontent.com/images/sS4OsevI9FcvYGmNbrpBsl6T8.png" alt=''></img>  */}
          <Image src={ball} alt="ball" />
        </div>
      </div>

      <Footer />
    </main>
  );
}
