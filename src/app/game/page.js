"use client"; // This is a client component

import "./styles.scss";

import React, { useEffect, useRef, useState } from 'react';

import Dota2 from './dota2';
import Footer from "../components/footer";
import Image from "next/image";
// import Store from './store';
import Lol from './lol';
import Naraka from './naraka'
import Nav from "../components/nav";
import Pubg from './pubg';
import Rust from './rust';
import Store from './store';

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
  const [navIndex, setNavIndex] = useState(0);
  // const router = useRouter();
  // const { game_type } = router.query;
  // 获取查询字符串
  let queryString = location.search;
  // 使用URLSearchParams解析查询字符串
  let searchParams = new URLSearchParams(queryString);
  // 获取特定参数的值
  let game_type = searchParams.get('game_type') || 0;

  // 打印参数值
  // console.log('game_type', game_type);


  useEffect(() => {
    setNavIndex(game_type)
  }, [game_type]);

  return (
    <main className="flex flex-col items-center justify-between p-1">
      <Nav />
      <div className="game-wrap">
        <div className="header">
          <h6>HAVE A LOOK AT OUR</h6>
          <h1>Play2Earn Games</h1>
        </div>
        <div className="game-item">
          <div className="game-text-wrap game-text-wrap1">
            <h2>How-to-Store</h2>
            <div className="game-text-content">GamingPass is an important part of the Gaming ecosystem, and buying and using it can give you high Gaming rewards!</div>
            <div className="introduce">
              <a target="_blank" href="https://goodmorningnetwork.gitbook.io/goodmorningnetwork/gaming/how-to-store">
                <span className="key">Connect</span>
                <span className="value">Click Here</span>
              </a>
            </div>  
          </div>
          <div className="game-img-wrap game-img-wrap1">
            <img src='https://neoxa.net/wp-content/uploads/elementor/thumbs/rust-neoxa-image-qdeq0174d82jzr8jybkmg9qrslg0s04l89t7rfnaio.jpeg' />
          </div>
        </div>
        <div className="game-item">
          <div className="game-img-wrap game-img-wrap2">
            <img src='https://neoxa.net/wp-content/uploads/elementor/thumbs/rust-neoxa-image-qdeq0174d82jzr8jybkmg9qrslg0s04l89t7rfnaio.jpeg' />
          </div>
          <div className="game-text-wrap game-text-wrap2">
            <h2>Pubg</h2>
            <div className="game-text-content">layerUnknown's Battlegrounds (PUBG) is a highly popular battle royale game that has taken the gaming world by storm. Developed and published by PUBG Corporation, a subsidiary of South Korean video game company Bluehole, PUBG offers an exhilarating and intense gaming experience.</div>
            <div className="introduce">
              <a target="_blank" href="https://goodmorningnetwork.gitbook.io/goodmorningnetwork/gaming/how-to-pubg">
                <span className="key">Connect</span>
                <span className="value">Click Here</span>
              </a>
            </div>
          </div>
        </div>
        <div className="game-item">
          <div className="game-text-wrap game-text-wrap1">
            <h2>Dota2</h2>
            <div className="game-text-content">Dota 2, short for "Defense of the Ancients 2," is a critically acclaimed multiplayer online battle arena (MOBA) video game developed and published by Valve Corporation. Released in 2013, it quickly became one of the most popular and competitive titles in the esports world.</div>
            <div className="introduce">
              <a target="_blank" href="https://goodmorningnetwork.gitbook.io/goodmorningnetwork/gaming/how-to-dota2">
                <span className="key">Connect</span>
                <span className="value">Click Here</span>
              </a>
            </div>  
          </div>
          <div className="game-img-wrap game-img-wrap1">
            <img src='https://neoxa.net/wp-content/uploads/elementor/thumbs/rust-neoxa-image-qdeq0174d82jzr8jybkmg9qrslg0s04l89t7rfnaio.jpeg' />
          </div>
        </div>
        <div className="game-item">
          <div className="game-img-wrap game-img-wrap2">
            <img src='https://neoxa.net/wp-content/uploads/elementor/thumbs/rust-neoxa-image-qdeq0174d82jzr8jybkmg9qrslg0s04l89t7rfnaio.jpeg' />
          </div>
          <div className="game-text-wrap game-text-wrap2">
            <h2>Naraka</h2>
            <div className="game-text-content">Naraka: Bladepoint is an exciting and visually stunning multiplayer action game developed and published by 24 Entertainment. Set in a mythical world inspired by ancient Eastern legends, Naraka offers a unique and intense battle royale experience.</div>
            <div className="introduce">
              <a target="_blank" href="https://goodmorningnetwork.gitbook.io/goodmorningnetwork/gaming/how-to-naraka">
                <span className="key">Connect</span>
                <span className="value">Click Here</span>
              </a>
            </div>
          </div>
        </div>
        <div className="game-item">
          <div className="game-text-wrap game-text-wrap1">
            <h2>League of Legends</h2>
            <div className="game-text-content">GamingPass is an important part of the Gaming ecosystem, and buying and using it can give you high Gaming rewards!</div>
            <div className="introduce">
              <a target="_blank" href="https://goodmorningnetwork.gitbook.io/goodmorningnetwork/gaming/how-to-league-of-legends">
                <span className="key">Connect</span>
                <span className="value">Click Here</span>
              </a>
            </div>  
          </div>
          <div className="game-img-wrap game-img-wrap1">
            <img src='https://neoxa.net/wp-content/uploads/elementor/thumbs/rust-neoxa-image-qdeq0174d82jzr8jybkmg9qrslg0s04l89t7rfnaio.jpeg' />
          </div>
        </div>
        <div className="game-item">
          <div className="game-img-wrap game-img-wrap2">
            <img src='https://neoxa.net/wp-content/uploads/elementor/thumbs/rust-neoxa-image-qdeq0174d82jzr8jybkmg9qrslg0s04l89t7rfnaio.jpeg' />
          </div>
          <div className="game-text-wrap game-text-wrap2">
            <h2>Rust</h2>
            <div className="game-text-content">Rust is an open-world multiplayer survival game developed by Facepunch Studios. Released in 2013, it has gained immense popularity for its challenging and unforgiving gameplay.</div>
            <div className="introduce">
              <a target="_blank" href="https://goodmorningnetwork.gitbook.io/goodmorningnetwork/gaming/how-to-rust">
                <span className="key">Connect</span>
                <span className="value">Click Here</span>
              </a>
            </div>
          </div>
        </div>
        {/* <div className="left">
          <p>Gaming</p>
          <div className="nav-wrap">
            {navList.map((item, index) => {
              return (
                <div className="nav-item" key={index} onClick={() => {setNavIndex(index)}}>
                  <div>{item.icon}</div>
                  <div className="nav-item-title">{item.title}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="right">
          {navIndex == 0 && <Store />}
          { navIndex == 1 && <Pubg />}
          { navIndex == 2 && <Dota2 /> }
          { navIndex == 3 && <Naraka /> }
          { navIndex == 4 && <Lol /> }
          { navIndex == 5 && <Rust /> }
        </div> */}
      </div>
      <Footer />
    </main>
  );
}
