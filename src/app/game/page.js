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
        <div className="left">
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
        </div>
      </div>
      <Footer />
    </main>
  );
}
