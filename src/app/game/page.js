"use client"; // This is a client component

import "./styles.scss";

import React, { useEffect, useRef, useState } from "react";

import Footer from "../components/footer";
import Image from "next/image";
import Nav from "../components/nav";
import dota2 from "../../assets/dota2.jpeg";
import lol from "../../assets/lol.jpeg";
import naraka from "../../assets/naraka.jpeg";
import pubg from "../../assets/pubg.jpeg";
import rust from "../../assets/rust.jpeg";
import store from "../../assets/store.webp";

// import { useRouter } from 'next/router';

export default function Home() {
  const navList = [
    {
      icon: "☀",
      title: "How-to-Store",
    },
    {
      icon: "🔫",
      title: "How-to-Pubg",
    },
    {
      icon: "🎮",
      title: "How-to-Dota2",
    },
    {
      icon: "🗡",
      title: "How-to-Naraka",
    },
    {
      icon: "👊",
      title: "How-to-League of Legends",
    },
    {
      icon: "⛰",
      title: "How-to-rust",
    },
  ];

  return (
    <main className="flex flex-col items-center justify-between p-1">
      <Nav />
      <div className="game-wrap">
        <div className="header">
          <h6>HAVE A LOOK AT OUR</h6>
          <h1 className="font-Montserrat">Play 2 Earn Games</h1>
        </div>

        {/* <div className="relative flex w-full flex-row bg-gray-700 bg-clip-border text-white shadow-md">
          <div className="md:flex">
            <div className="relative m-0 lg:w-1/2 shrink-0 overflow-hidden bg-white bg-clip-border text-gray-700 grid place-items-center">
              <Image src={store} alt="image" className=" w-full object-cover" />
            </div>
            <div className="p-6 lg:w-1/2">
              <h2 className="font-Zen text-pink-500 text-2xl">How-to-Store</h2>
              <div className="game-text-content font-Montserrat mt-8">
                GamingPass is an important part of the Gaming ecosystem, and
                buying and using it can give you high Gaming rewards!
              </div>
              <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-white antialiased">
                Like so many organizations these days, Autodesk is a company in
                transition. It was until recently a traditional boxed software
                company selling licenses. Yet its own business model disruption
                is only part of the story
              </p>
              <a className="inline-block" href="#">
                <button
                  className="flex select-none items-center gap-2 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  <a
                    target="_blank"
                    href="https://goodmorningnetwork.gitbook.io/goodmorningnetwork/gaming/how-to-store"
                  >
                    Learn More
                  </a>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    ></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div> */}

        <div className="relative flex w-full flex-row bg-gray-700 bg-clip-border text-white shadow-md">
          <div className="md:flex">
            <div className="p-6 lg:w-1/2 game-text-wrap">
              <h2 className="font-Zen text-pink-500 text-2xl">How-to-Store</h2>
              <div className="game-text-content font-Montserrat mt-8">
                GamingPass is an important part of the Gaming ecosystem, and
                buying and using it can give you high Gaming rewards!
              </div>
              <p className="mb-8 block font-Montserrat text-base font-normal leading-relaxed text-white antialiased">
                Like so many organizations these days, Autodesk is a company in
                transition. It was until recently a traditional boxed software
                company selling licenses. Yet its own business model disruption
                is only part of the story
              </p>

              <button
                className="flex select-none items-center gap-2 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                <a
                  target="_blank"
                  href="https://goodmorningnetwork.gitbook.io/goodmorningnetwork/gaming/how-to-store"
                >
                  Learn More
                </a>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="relative m-0 lg:w-1/2 shrink-0 overflow-hidden bg-white bg-clip-border text-gray-700 grid place-items-center">
              <Image src={store} alt="image" className=" w-full object-cover" />
            </div>
          </div>
        </div>
        {/* <div className="game-item">
          <div className="game-text-wrap game-text-wrap1">
            <h2 className="font-Zen">How-to-Store</h2>
            <div className="game-text-content font-Montserrat">
              GamingPass is an important part of the Gaming ecosystem, and
              buying and using it can give you high Gaming rewards!
            </div>
            <div className="introduce font-Montserrat">
              <a
                target="_blank"
                href="https://goodmorningnetwork.gitbook.io/goodmorningnetwork/gaming/how-to-store"
              >
                <span className="key">Connect</span>
                <span className="value">Click Here</span>
              </a>
            </div>
          </div>
          <div className="game-img-wrap game-img-wrap1">
            <Image
              width={"50vw"}
              height={"50vw"}
              className="store-img"
              // src={'https://img.cryptopolitan.com/wp-content/uploads/2023/09/photo_5794422769847484159_y.jpg'}
              src={store}
            />
          </div>
        </div> */}
        <div className="relative flex w-full flex-row bg-gray-700 bg-clip-border text-white shadow-md">
          <div className="md:flex">
            <div className="relative m-0 lg:w-1/2 shrink-0 overflow-hidden bg-white bg-clip-border text-gray-700 grid place-items-center">
              <Image src={pubg} alt="image" className=" w-full object-cover" />
            </div>
            <div className="p-6 lg:w-1/2 game-text-wrap">
              <h2 className="font-Zen text-pink-500 text-2xl">Pubg</h2>
              {/* <div className="game-text-content font-Montserrat mt-8">
                GamingPass is an important part of the Gaming ecosystem, and
                buying and using it can give you high Gaming rewards!
              </div> */}
              <p className="mt-8 mb-8 block text-base leading-relaxed text-white antialiased font-Montserrat">
                layerUnknown's Battlegrounds (PUBG) is a highly popular battle
                royale game that has taken the gaming world by storm. Developed
                and published by PUBG Corporation, a subsidiary of South Korean
                video game company Bluehole, PUBG offers an exhilarating and
                intense gaming experience.
              </p>

              <button
                className="flex select-none items-center gap-2 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                <a
                  target="_blank"
                  href="https://goodmorningnetwork.gitbook.io/goodmorningnetwork/gaming/how-to-pubg"
                >
                  Learn More
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="relative flex w-full flex-row bg-gray-700 bg-clip-border text-white shadow-md">
          <div className="md:flex flex-row-reverse">
            <div className="relative m-0 lg:w-1/2 shrink-0 overflow-hidden bg-white bg-clip-border text-gray-700 grid place-items-center">
              <Image src={dota2} alt="image" className=" w-full object-cover" />
            </div>
            <div className="p-6 lg:w-1/2 game-text-wrap">
              <h2 className="font-Zen text-pink-500 text-2xl">Dota 2</h2>
              <p className="mt-8 mb-8 block font-Montserrat text-base leading-relaxed text-white antialiased font-Montserrat">
                Dota 2 stands as a renowned multiplayer online battle arena
                (MOBA) game developed by Valve Corporation. Players immerse
                themselves in this strategic, team-based experience, assuming
                the roles of powerful heroes known as "Dota heroes." These
                heroes possess diverse abilities and unique playstyles,
                requiring tactical skill and teamwork to emerge victorious.
              </p>

              <button
                className="flex select-none items-center gap-2 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                <a
                  target="_blank"
                  href="https://goodmorningnetwork.gitbook.io/goodmorningnetwork/gaming/how-to-dota2"
                >
                  Learn More
                </a>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* <div className="game-item">
          <div className="game-img-wrap game-img-wrap2">
            <Image
              width={"50vw"}
              height={"50vw"}
              className="store-img"
              src={pubg}
            />
          </div>
          <div className="game-text-wrap game-text-wrap2">
            <h2 className="font-Zen">Pubg</h2>
            <div className="game-text-content font-Montserrat">
              layerUnknown's Battlegrounds (PUBG) is a highly popular battle
              royale game that has taken the gaming world by storm. Developed
              and published by PUBG Corporation, a subsidiary of South Korean
              video game company Bluehole, PUBG offers an exhilarating and
              intense gaming experience.
            </div>
            <div className="introduce font-Montserrat">
              <a
                target="_blank"
                href="https://goodmorningnetwork.gitbook.io/goodmorningnetwork/gaming/how-to-pubg"
              >
                <span className="key">Connect</span>
                <span className="value">Click Here</span>
              </a>
            </div>
          </div>
        </div>
        <div className="game-item">
          <div className="game-text-wrap game-text-wrap1">
            <h2 className="font-Zen">Dota2</h2>
            <div className="game-text-content font-Montserrat">
              Dota 2, short for "Defense of the Ancients 2," is a critically
              acclaimed multiplayer online battle arena (MOBA) video game
              developed and published by Valve Corporation. Released in 2013, it
              quickly became one of the most popular and competitive titles in
              the esports world.
            </div>
            <div className="introduce font-Montserrat">
              <a
                target="_blank"
                href="https://goodmorningnetwork.gitbook.io/goodmorningnetwork/gaming/how-to-dota2"
              >
                <span className="key">Connect</span>
                <span className="value">Click Here</span>
              </a>
            </div>
          </div>
          <div className="game-img-wrap game-img-wrap1">
            <Image
              width={"100%"}
              height={"50vw"}
              // src='https://f403.org/wp-content/uploads/2022/08/474206-750x750.jpg'
              src={dota2}
            />
          </div>
        </div> */}
        <div className="relative flex w-full flex-row bg-gray-700 bg-clip-border text-white shadow-md">
          <div className="md:flex">
            <div className="p-6 lg:w-1/2 game-text-wrap">
              <h2 className="font-Zen text-pink-500 text-2xl">Naraka</h2>
              {/* <div className="game-text-content font-Montserrat mt-8">
                GamingPass is an important part of the Gaming ecosystem, and
                buying and using it can give you high Gaming rewards!
              </div> */}
              <p className="mt-8 mb-8 block font-Montserrat text-base font-normal leading-relaxed text-white antialiased">
                Naraka: Bladepoint is an exciting and visually stunning
                multiplayer action game developed and published by 24
                Entertainment. Set in a mythical world inspired by ancient
                Eastern legends, Naraka offers a unique and intense battle
                royale experience.
              </p>

              <button
                className="flex select-none items-center gap-2 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                <a
                  target="_blank"
                  href="https://goodmorningnetwork.gitbook.io/goodmorningnetwork/gaming/how-to-naraka"
                >
                  Learn More
                </a>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="relative m-0 lg:w-1/2 shrink-0 overflow-hidden bg-white bg-clip-border text-gray-700 grid place-items-center">
              <Image
                src={naraka}
                alt="image"
                className=" w-full object-cover"
              />
            </div>
          </div>
        </div>
        {/* <div className="game-item">
          <div className="game-img-wrap game-img-wrap2">
            <img
              width={"100%"}
              height={"50vw"}
              src="https://game8.vn/media/202203/images/1403-naraka-2022-6.jpg"
              src={naraka}
            />
          </div>
          <div className="game-text-wrap game-text-wrap2">
            <h2 className="font-Zen">Naraka</h2>
            <div className="game-text-content font-Montserrat">
              Naraka: Bladepoint is an exciting and visually stunning
              multiplayer action game developed and published by 24
              Entertainment. Set in a mythical world inspired by ancient Eastern
              legends, Naraka offers a unique and intense battle royale
              experience.
            </div>
            <div className="introduce font-Montserrat">
              <a
                target="_blank"
                href="https://goodmorningnetwork.gitbook.io/goodmorningnetwork/gaming/how-to-naraka"
              >
                <span className="key">Connect</span>
                <span className="value">Click Here</span>
              </a>
            </div>
          </div>
        </div> */}
        <div className="relative flex w-full flex-row bg-gray-700 bg-clip-border text-white shadow-md">
          <div className="md:flex">
            <div className="relative m-0 lg:w-1/2 shrink-0 overflow-hidden bg-white bg-clip-border text-gray-700 grid place-items-center">
              <Image src={lol} alt="image" className=" w-full object-cover" />
            </div>
            <div className="p-6 lg:w-1/2 game-text-wrap">
              <h2 className="font-Zen text-pink-500 text-2xl">
                League of Legends
              </h2>

              <p className="mt-8 mb-8 block font-Montserrat text-base font-normal leading-relaxed text-white antialiased">
                League of Legends (LoL) is a highly acclaimed multiplayer online
                battle arena (MOBA) game developed by Riot Games. Set in the
                fictional world of Runeterra, players assume the role of
                powerful champions with unique abilities and engage in
                team-based battles.
              </p>

              <button
                className="flex select-none items-center gap-2 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                <a
                  target="_blank"
                  href="https://goodmorningnetwork.gitbook.io/goodmorningnetwork/gaming/how-to-league-of-legends"
                >
                  Learn More
                </a>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* <div className="game-item">
          <div className="game-text-wrap game-text-wrap1">
            <h2 className="font-Zen">League of Legends</h2>
            <div className="game-text-content font-Montserrat">
              GamingPass is an important part of the Gaming ecosystem, and
              buying and using it can give you high Gaming rewards!
            </div>
            <div className="introduce font-Montserrat">
              <a
                target="_blank"
                href="https://goodmorningnetwork.gitbook.io/goodmorningnetwork/gaming/how-to-league-of-legends"
              >
                <span className="key">Connect</span>
                <span className="value">Click Here</span>
              </a>
            </div>
          </div>
          <div className="game-img-wrap game-img-wrap1">
            <Image
              style={{
                width: "100%",
                height: "50vw",
              }}
              src={lol}
            />
          </div>
        </div> */}
        <div className="relative flex w-full flex-row bg-gray-700 bg-clip-border text-white shadow-md">
          <div className="md:flex">
            <div className="p-6 lg:w-1/2 game-text-wrap">
              <h2 className="font-Zen text-pink-500 text-2xl">Rust</h2>

              <p className="mt-8 mb-8 block font-sans text-base font-normal leading-relaxed text-white antialiased">
                Rust is an open-world multiplayer survival game developed by
                Facepunch Studios. Released in 2013, it has gained immense
                popularity for its challenging and unforgiving gameplay.
              </p>

              <button
                className="flex select-none items-center gap-2 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                <a
                  target="_blank"
                  href="https://goodmorningnetwork.gitbook.io/goodmorningnetwork/gaming/how-to-rust"
                >
                  Learn More
                </a>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="relative m-0 lg:w-1/2 shrink-0 overflow-hidden bg-white bg-clip-border text-gray-700 grid place-items-center">
              <Image src={rust} alt="image" className=" w-full object-cover" />
            </div>
          </div>
        </div>
        {/* <div className="game-item">
          <div className="game-img-wrap game-img-wrap2">
            <Image
              style={{
                width: "100%",
                height: "50vw",
              }}
              // src='https://neoxa.net/wp-content/uploads/elementor/thumbs/rust-neoxa-image-qdeq0174d82jzr8jybkmg9qrslg0s04l89t7rfnaio.jpeg'
              src={rust}
            />
          </div>
          <div className="game-text-wrap game-text-wrap2">
            <h2 className="font-Zen">Rust</h2>
            <div className="game-text-content font-Montserrat">
              Rust is an open-world multiplayer survival game developed by
              Facepunch Studios. Released in 2013, it has gained immense
              popularity for its challenging and unforgiving gameplay.
            </div>
            <div className="introduce font-Montserrat">
              <a
                target="_blank"
                href="https://goodmorningnetwork.gitbook.io/goodmorningnetwork/gaming/how-to-rust"
              >
                <span className="key">Connect</span>
                <span className="value">Click Here</span>
              </a>
            </div>
          </div>
        </div> */}
      </div>
      <Footer />
    </main>
  );
}
