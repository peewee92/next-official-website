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
          <h1 className="font-Montserrat">Play2Earn Games</h1>
        </div>
        <div className="game-item">
          <div className="game-text-wrap game-text-wrap1">
            <h2 className="font-Zen">How-to-Store</h2>
            <div className="game-text-content font-Montserrat">GamingPass is an important part of the Gaming ecosystem, and buying and using it can give you high Gaming rewards!</div>
            <div className="introduce font-Montserrat">
              <a target="_blank" href="https://goodmorningnetwork.gitbook.io/goodmorningnetwork/gaming/how-to-store">
                <span className="key">Connect</span>
                <span className="value">Click Here</span>
              </a>
            </div>  
          </div>
          <div className="game-img-wrap game-img-wrap1">
            <img className="store-img" src='https://img.cryptopolitan.com/wp-content/uploads/2023/09/photo_5794422769847484159_y.jpg' />
          </div>
        </div>
        <div className="game-item">
          <div className="game-img-wrap game-img-wrap2">
            <img className="store-img" src='https://www.gamespot.com/a/uploads/scale_landscape/1597/15971423/3925371-4760795642-33311.jpg' />
          </div>
          <div className="game-text-wrap game-text-wrap2">
            <h2 className="font-Zen">Pubg</h2>
            <div className="game-text-content font-Montserrat">layerUnknown's Battlegrounds (PUBG) is a highly popular battle royale game that has taken the gaming world by storm. Developed and published by PUBG Corporation, a subsidiary of South Korean video game company Bluehole, PUBG offers an exhilarating and intense gaming experience.</div>
            <div className="introduce font-Montserrat">
              <a target="_blank" href="https://goodmorningnetwork.gitbook.io/goodmorningnetwork/gaming/how-to-pubg">
                <span className="key">Connect</span>
                <span className="value">Click Here</span>
              </a>
            </div>
          </div>
        </div>
        <div className="game-item">
          <div className="game-text-wrap game-text-wrap1">
            <h2 className="font-Zen">Dota2</h2>
            <div className="game-text-content font-Montserrat">Dota 2, short for "Defense of the Ancients 2," is a critically acclaimed multiplayer online battle arena (MOBA) video game developed and published by Valve Corporation. Released in 2013, it quickly became one of the most popular and competitive titles in the esports world.</div>
            <div className="introduce font-Montserrat">
              <a target="_blank" href="https://goodmorningnetwork.gitbook.io/goodmorningnetwork/gaming/how-to-dota2">
                <span className="key">Connect</span>
                <span className="value">Click Here</span>
              </a>
            </div>  
          </div>
          <div className="game-img-wrap game-img-wrap1">
            <img src='https://f403.org/wp-content/uploads/2022/08/474206-750x750.jpg' />
          </div>
        </div>
        <div className="game-item">
          <div className="game-img-wrap game-img-wrap2">
            <img src='https://game8.vn/media/202203/images/1403-naraka-2022-6.jpg' />
          </div>
          <div className="game-text-wrap game-text-wrap2">
            <h2 className="font-Zen">Naraka</h2>
            <div className="game-text-content font-Montserrat">Naraka: Bladepoint is an exciting and visually stunning multiplayer action game developed and published by 24 Entertainment. Set in a mythical world inspired by ancient Eastern legends, Naraka offers a unique and intense battle royale experience.</div>
            <div className="introduce font-Montserrat">
              <a target="_blank" href="https://goodmorningnetwork.gitbook.io/goodmorningnetwork/gaming/how-to-naraka">
                <span className="key">Connect</span>
                <span className="value">Click Here</span>
              </a>
            </div>
          </div>
        </div>
        <div className="game-item">
          <div className="game-text-wrap game-text-wrap1">
            <h2 className="font-Zen">League of Legends</h2>
            <div className="game-text-content font-Montserrat">GamingPass is an important part of the Gaming ecosystem, and buying and using it can give you high Gaming rewards!</div>
            <div className="introduce font-Montserrat">
              <a target="_blank" href="https://goodmorningnetwork.gitbook.io/goodmorningnetwork/gaming/how-to-league-of-legends">
                <span className="key">Connect</span>
                <span className="value">Click Here</span>
              </a>
            </div>  
          </div>
          <div className="game-img-wrap game-img-wrap1">
            <img src='https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt02dd32b665c25036/5f4defe8b553152466d1b21a/Homepage_World_1.jpg' />
          </div>
        </div>
        <div className="game-item">
          <div className="game-img-wrap game-img-wrap2">
            <img src='https://neoxa.net/wp-content/uploads/elementor/thumbs/rust-neoxa-image-qdeq0174d82jzr8jybkmg9qrslg0s04l89t7rfnaio.jpeg' />
          </div>
          <div className="game-text-wrap game-text-wrap2">
            <h2 className="font-Zen">Rust</h2>
            <div className="game-text-content font-Montserrat">Rust is an open-world multiplayer survival game developed by Facepunch Studios. Released in 2013, it has gained immense popularity for its challenging and unforgiving gameplay.</div>
            <div className="introduce font-Montserrat">
              <a target="_blank" href="https://goodmorningnetwork.gitbook.io/goodmorningnetwork/gaming/how-to-rust">
                <span className="key">Connect</span>
                <span className="value">Click Here</span>
              </a>
            </div>
          </div>
        </div>
       
      </div>
      <Footer />
    </main>
  );
}
