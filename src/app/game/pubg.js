"use client"; // This is a client component

import "./styles.scss";

import React, { useEffect, useRef, useState } from 'react';

import Footer from "../components/footer";
import Image from "next/image";
import Nav from "../components/nav";

export default function Home() {
  const [navIndex, setNavIndex] = useState(0);

  return (
    <div className="game-content animate__animated animate__fadeInUpBig">
        <h4 className="">How-to-Pubg</h4>
        <p>This chapter explains how to participate in PUBG games and earn GM rewards!</p>
        <div className="game-text">
            <strong>Step 1:</strong>
            <span>  Join our Discord server</span>
        </div>
        <div className="game-text">
            <strong>Step 2:</strong>
            <span>  Find the GM Bot#3983 bot in member list on the right side of the screen.</span>
            <img alt="" src="https://399320087-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FziVkHDEVQ3vSm4tXD199%2Fuploads%2FQANaymIADhxlVE86eKB4%2FQQ%E6%88%AA%E5%9B%BE20230906151838.png?alt=media&amp;token=f94457df-765e-40a6-a7e4-55daee17d593" width="181" height="auto" decoding="async" class="r-z2wwpe r-dnmrzs"></img>
        </div>
        <div className="game-text">
            <strong>Step 3:</strong>
            <span>  Send a direct message to GM Bot#3983 bot, for example, by typing “help”.</span>
            <img alt="" src="https://399320087-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FziVkHDEVQ3vSm4tXD199%2Fuploads%2Fawk5vrj2eS17635nlkkb%2F%E5%8A%A8%E7%94%BB.gif?alt=media&amp;token=7b154d01-0034-4e3b-84e9-654e155a9a28" width="284" height="auto" decoding="async" class="r-z2wwpe r-dnmrzs"></img>
        </div>
        <div className="game-text">
            <strong>Step 4:</strong>
            <span>  Link your wallet by using the command “setwallet your_wallet_address”, replacing “your_wallet_address” with your actual wallet address.</span>
        </div> 
        <div className="game-text">
            <strong>Step 5:</strong>
            <span>  Open User settings</span>
            <img alt="" loading="lazy" src="https://cdn.discordapp.com/attachments/1109219358019952710/1109222213103669288/Discord_settings_gear_-bottom_left_next_to_you.png" width="383" height="auto" decoding="async" class="r-z2wwpe r-dnmrzs"></img>
        </div>
        <div className="game-text">
            <strong>Step 6:</strong>
            <span>  Find Activity settings. In activity privacy be sure that you have activated next options: Display current activity as a status message Allow friends to join your game</span>
            <img alt="" loading="lazy" src="https://cdn.discordapp.com/attachments/1109219358019952710/1109222409799733339/image.png" width="750" height="auto" decoding="async" class="r-z2wwpe r-dnmrzs"></img>
        </div>
        <div className="game-text">
            <strong>Step 7:</strong>
            <span>  Run PUBG Note: Normal and Ranked games are counted. Also available for EGS users</span>
            
        </div>
        <div className="game-text">
            <strong>Step 8:</strong>
            <span>  Open discord and Invite GM Bot#3983 in your game by right click on it or inviting option in chat with bot. Your status in Discord must be Online and make sure that you are using the desktop version of Discord (web version is not supported</span>
            <img alt="" loading="lazy" src="https://399320087-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FziVkHDEVQ3vSm4tXD199%2Fuploads%2FYzVyjwoHX83B8AmFPjUL%2FQQ%E6%88%AA%E5%9B%BE20230906160646.png?alt=media&amp;token=362b72a7-a781-4210-a466-bd5a4df70200" width="181" height="auto" decoding="async" class="r-z2wwpe r-dnmrzs" />
            <img alt="" loading="lazy" src="https://399320087-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FziVkHDEVQ3vSm4tXD199%2Fuploads%2FGJQP0kjs25uW3kmL6rLy%2FQQ%E6%88%AA%E5%9B%BE20230906160546.png?alt=media&amp;token=dfcc8640-1670-407a-a20b-035ff2cffec0" width="327" height="auto" decoding="async" class="r-z2wwpe r-dnmrzs"></img>
        </div>
        <div className="game-text">
            <strong>Step 9:</strong>
            <span>  Play and earn!</span>
            
        </div> 
    </div>
  );
}
