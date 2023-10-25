"use client"; // This is a client component

import '../styles.css'
import 'animate.css';

import React, { useEffect, useRef, useState } from 'react';

import Footer from '../components/footer'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '../components/nav'
import { useIsVisible } from '../hooks/useIsVisible'

export default function Project() {
  
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
      
      <div className="welcome">
        
          <div ref={ref4} className={`welcome-right ${isVisible4 ? "animate__animated animate__rotateIn": ""}`} >
            <img src="https://framerusercontent.com/images/sS4OsevI9FcvYGmNbrpBsl6T8.png" alt=''></img> 
          </div>
      
        <div className="welcome-left" style={{width:'75%'}}>
          <h4 className="welcome-title font-Zen">Real-World Assets (RWA)</h4>
          <p className="welcome-content font-Montserrat">Most notably, GoodmorningNetwork plans to integrate real-world assets or products, referred to as RWA, through blockchain technology. This offers endless possibilities for interaction between the real and digital worlds, drawing them closer together than ever before.</p>
          <p className="welcome-content font-Montserrat welcome-rwa">GoodmorningNetwork is more than just a cryptocurrency platform; it's a multifaceted network ecosystem with multiple layers of incentives and a high degree of interactivity. By seamlessly integrating with real-world assets and the virtual gaming economy, GoodmorningNetwork is redefining the boundaries between digital and real assets, marking another significant milestone in the maturation of blockchain technology. Join GoodmorningNetwork to experience this innovative, diverse, and highly integrated new world.</p>
        </div>
      </div>
      
      <div className="welcome">
        <div className="welcome-right">
          <h4 className="welcome-title font-Zen">About GoodMorning NetWork</h4>
          <p className="welcome-content font-Montserrat">An Innovative Cryptocurrency Platform Bridging the Gap Between the Real and Virtual Worlds!</p>
        </div>
        <div ref={ref1} className={`welcome-right ${isVisible1 ? "animate__animated animate__rotateIn": ""}`}>
          <img src='https://framerusercontent.com/images/sS4OsevI9FcvYGmNbrpBsl6T8.png' />
        </div>
      </div>

      <div className="welcome">
        
          <div ref={ref2} className={`welcome-right ${isVisible2 ? "animate__animated animate__rotateIn": ""}`} >
            <img src="https://framerusercontent.com/images/sS4OsevI9FcvYGmNbrpBsl6T8.png" alt=''></img> 
          </div>
      
        <div className="welcome-left" style={{width:'75%'}}>
          <h4 className="welcome-title font-Zen">Overview</h4>
          <p className="welcome-content font-Montserrat">In an increasingly digitized and decentralized world, cryptocurrency and blockchain technology are gaining unprecedented attention. Standing at the forefront of this tide, GoodmorningNetwork offers not just a novel cryptocurrency built on a Proof-of-Work (PoW) consensus mechanism, but also innovatively intertwines real-world assets (RWA) with the virtual gaming economy. With its unique block participant incentives, gaming reward tokens, and masternode incentives, GoodmorningNetwork aims to create a comprehensive, reliable, and highly interactive ecosystem.</p>
        </div>
      </div>

      <div className="welcome">
        <div className="welcome-left" style={{width:'75%'}}>
          <h4 className="welcome-title font-Zen">Gaming Reward coins</h4>
          <p className="welcome-content font-Montserrat">For users who revel in the virtual gaming world, GoodmorningNetwork offers an entirely new way to profit. By playing popular games like PUBG, LOL, NARAKA, DOTA2, and CSGO, users can earn 20% of gaming reward tokens. This not only enhances user engagement but also builds a bridge between the virtual gaming world and the cryptocurrency sphere.</p>
          {/* <div className="game-list">
            <div className="game-list-item">
              <a src="" ></a>
              <span className="game-list-item-icon">🔫</span>
              <span>How-to-Pubg</span>
            </div>
            <div className="game-list-item">
              <span className="game-list-item-icon">🎮</span>
              <span>how-to-Dota2</span>
            </div> 
            <div className="game-list-item">
              <span className="game-list-item-icon">🗡</span>
              <span>How-to-Naraka</span>
            </div> 
          </div> */}
        </div>
        <div ref={ref3} className={`welcome-right ${isVisible3 ? "animate__animated animate__rotateIn": ""}`}>
          <img src='https://framerusercontent.com/images/sS4OsevI9FcvYGmNbrpBsl6T8.png' />
        </div>
        
      </div>

      <Footer />
    </main>
  )
}