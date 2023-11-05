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

  return (
    <main className="flex flex-col items-center justify-between p-1">
      <Nav />

      <div class="flex mt-20" style={{height: '400px'}}>
        <div class="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
          <div>
            <h4 className={`welcome-title font-Zen`}>
              Welcome to Goodmorning Network
            </h4>
            <p className="welcome-content font-Montserrat">
              GoodmorningNetwork is redefining the boundaries between digital
              and real assets, marking another significant milestone in the
              maturation of blockchain technology.
            </p>
            <div class="flex justify-center lg:justify-start mt-6">
              <a
                target="_blank"
                class="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400"
                href="https://goodmorningnetwork.gitbook.io/goodmorningnetwork/"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div
          class="hidden lg:block lg:w-1/2"
          // style={{ clipPath: "polygon(10% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
          <div
            class="h-full object-cover"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80)",
            }}
          >
            <div class="h-full bg-black opacity-25"></div>
          </div>
        </div>
      </div>

      <div class="flex mt-20 w-full" style={{height: '400px'}}>
      <div
          class="hidden lg:block lg:w-1/2"
        >
          <div
            class="h-full object-cover"
            style={{
              backgroundImage:
                "url(https://assets-global.website-files.com/637e2b6d602973ea0941d482/650125607ed121a429854edd_canto-p-800.png)",
            }}
          >
            <div class="h-full bg-black opacity-25"></div>
          </div>
        </div>
        <div class="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
          <div>
            <h4 className={`welcome-title font-Zen`}>
              GameMining
            </h4>
            <p className="welcome-content font-Montserrat">
              We've put together a guide so you can easily know how to get
              involved in GoodmorningNetwork's GameMining!
            </p>
            <div class="flex justify-center lg:justify-start mt-6">
              <a
                target="_blank"
                class="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400"
                href="https://goodmorningnetwork.gitbook.io/goodmorningnetwork/gaming/how-to-store"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        
      </div>
     

      <div class="flex mt-20" style={{height: '400px'}}>
        <div class="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
          <div>
            <h4 className="welcome-title font-Zen">Real World Assets (RWA)</h4>
            <p className="welcome-content font-Montserrat">
              RWA crypto is different from other cryptocurrencies such as Bitcoin
              and Ethereum, which are not backed by any physical asset or
              commodity.
            </p>
            <div class="flex justify-center lg:justify-start mt-6">
              <a
                target="_blank"
                class="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400"
                href="https://goodmorningnetwork.gitbook.io/goodmorningnetwork/about-goodmorningnetwork#real-world-assets-rwa"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div
          class="hidden lg:block lg:w-1/2"
          // style={{ clipPath: "polygon(10% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
          <div
            class="h-full object-cover"
            style={{
              backgroundImage:
                "url(https://miro.medium.com/v2/resize:fit:1400/1*VRZkAc4JlICTDUCgIIvsBA.png)",
            }}
          >
            <div class="h-full bg-black opacity-25"></div>
          </div>
        </div>
      </div>

      <div class="flex mt-20 w-full" style={{height: '400px'}}>
      <div
          class="hidden lg:block lg:w-1/2"
        >
          <div
            class="h-full object-cover"
            style={{
              backgroundImage:
                "url(https://assets-global.website-files.com/637e2b6d602973ea0941d482/652c848e5fe2504d58772a1f_Spotlightbb-p-800.png)",
            }}
          >
            <div class="h-full bg-black opacity-25"></div>
          </div>
        </div>
        <div class="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2 ">
          <div>
            <h4 className={`welcome-title font-Zen`}>
            About
            </h4>
            <p className="welcome-content font-Montserrat">
              An Innovative Cryptocurrency Platform Bridging the Gap Between the Real and Virtual Worlds!
            </p>
            <div class="flex justify-center lg:justify-start mt-6">
              <a
                target="_blank"
                class="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400"
                href="https://goodmorningnetwork.gitbook.io/goodmorningnetwork/building/road-map"
              >
                Road Map
              </a>
              <a
                target="_blank"
                class="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400"
                href="https://goodmorningnetwork.gitbook.io/goodmorningnetwork/building/white-paper"
              >
                White Paper
              </a>
            </div>
          </div>
        </div>
        
      </div>
      
      {/* <div className="welcome">
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
          <Image src={ball} alt="ball" width={"4rem"} />
        </div>
      </div> */}

      {/* <div className="welcome welcome2">
        <div
          ref={ref2}
          className={`welcome-right ${
            isVisible2 ? "animate__animated animate__rotateIn" : ""
          }`}
        >
         
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
            <div className="game-list-item font-Montserrat">
              <a
                target="_blank"
                href="https://goodmorningnetwork.gitbook.io/goodmorningnetwork/gaming/how-to-pubg"
              >
                <span className="game-list-item-icon">🔫</span>
                <span>How-to-Pubg</span>
              </a>
            </div>
            <div className="game-list-item font-Montserrat">
              <a
                target="_blank"
                href="https://goodmorningnetwork.gitbook.io/goodmorningnetwork/gaming/how-to-dota2"
              >
                <span className="game-list-item-icon">🎮</span>
                <span>how-to-Dota2</span>
              </a>
            </div>
            <div className="game-list-item font-Montserrat">
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
          <Image src={ball} alt="ball" />
        </div>
      </div> */}

      <Footer />
    </main>
  );
}
