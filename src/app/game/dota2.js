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
        <h4 className="">How-to-Dota2</h4>
        <p>This chapter explains how to participate in DOTA2 games and earn GM rewards!</p>
        <div className="game-text">
            <strong>Step 1:</strong>
            <span>  Join our Discord server and find the GM Bot#3983 bot in member list on the right side of the screen</span>
            <img alt="" src="https://399320087-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FziVkHDEVQ3vSm4tXD199%2Fuploads%2FQANaymIADhxlVE86eKB4%2FQQ%E6%88%AA%E5%9B%BE20230906151838.png?alt=media&amp;token=f94457df-765e-40a6-a7e4-55daee17d593" width="181" height="auto" decoding="async" class="r-z2wwpe r-dnmrzs"></img>
        </div>
        <div className="game-text">
            <strong>Step 2:</strong>
            <span>  Send a direct message to GM Bot#3983 bot, for example, by typing “help”.</span>
            <img alt="" src="https://399320087-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FziVkHDEVQ3vSm4tXD199%2Fuploads%2Fawk5vrj2eS17635nlkkb%2F%E5%8A%A8%E7%94%BB.gif?alt=media&amp;token=7b154d01-0034-4e3b-84e9-654e155a9a28" width="284" height="auto" decoding="async" class="r-z2wwpe r-dnmrzs"></img>
        </div>
        <div className="game-text">
            <strong>Step 3:</strong>
            <span>  Link your wallet by using the command “setwallet your_wallet_address”, replacing “your_wallet_address” with your actual wallet address.</span>
        </div>
        <div className="game-text">
            <strong>Step 4:</strong>
            <span>  Link your SteamID by using command setsteam link_to_your_steam_prfile. Bot will send you secret phrase. You need to change your steam account's display name to secret phrase and use linking command again. After profile linking is done, you can change your profile name back to your own. </span>
        </div> 
        <div className="game-text">
            <strong>Step 5:</strong>
            <span>  Make sure that your public match history is enabled in the game settings. Go to the game settings and check the box as shown in the screenshot.</span>
            <img alt="" loading="lazy" src="https://cdn.discordapp.com/attachments/1104122389090009178/1105894498300612608/image.png" width="100%" height="auto" decoding="async" class="r-z2wwpe r-dnmrzs"></img>
        </div>
        <div className="game-text">
            <strong>Step 6:</strong>
            <span>  Play and earn!</span><br />
            <span>Available modes: Ranked and Unranked. Modes that are not counted towards earning rewards: Custom Games, Custom Lobbies, VS Bots, New Player Mode. In general, all modes except Ranked and Unranked are not counted.</span>
            <img alt="" loading="lazy" src="https://cdn.discordapp.com/attachments/1109219358019952710/1109222409799733339/image.png" width="750" height="auto" decoding="async" class="r-z2wwpe r-dnmrzs"></img>
        </div>
    </div>
  );
}
