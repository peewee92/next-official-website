"use client"; // This is a client component

import "./styles.scss";

import React, { useEffect, useRef, useState } from 'react';

export default function Home() {
    
  return (
    <div className={`game-content animate__animated animate__fadeInUpBig`}>
        <h4 className="">How-to-Store</h4>
        <p>GamingPass is an important part of the Gaming ecosystem, and buying and using it can give you high Gaming rewards!</p>
        <div className="game-text">
            <strong>Step 1:</strong>
            <span>  Join our Discord server and find the GM_Store_Bot#7738 bot in member list on the right side of the screen</span>
            <img alt="" className="game-img" src="https://399320087-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FziVkHDEVQ3vSm4tXD199%2Fuploads%2F2wRm6PSV5EN5ZyY1BU3X%2FQQ%E6%88%AA%E5%9B%BE20230930212017.png?alt=media&amp;token=97d6ccd6-f5de-47e5-8d73-2fc0893dcd7d" width="216" height="auto" decoding="async" class="r-z2wwpe r-dnmrzs"></img>
        </div>
        <div className="game-text">
            <strong>Step 2:</strong>
            <span>  Send a direct message to GM_Store_Bot#7738 bot, for example, by typing “help”.</span>
            <img alt="" src="https://399320087-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FziVkHDEVQ3vSm4tXD199%2Fuploads%2F2J3L6fdrx3oUWGm2JP7L%2Fstore.gif?alt=media&amp;token=82a4f5b1-aecc-4d9e-b853-8ea2f1daf695" width="278" height="auto" decoding="async" class="r-z2wwpe r-dnmrzs"></img>
            <img alt="" loading="lazy" src="https://399320087-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FziVkHDEVQ3vSm4tXD199%2Fuploads%2FlOMF4dWEdl9ZaOz4HQz4%2FQQ%E6%88%AA%E5%9B%BE20230930212157.png?alt=media&amp;token=3a8dad65-f136-4d7c-9ad3-ceca3513c5f6" width="484" height="auto" decoding="async" class="r-z2wwpe r-dnmrzs"></img>
        </div>
        <div className="game-text">
            <strong>Step 3:</strong>
            <span>  Transfer the amount of coins you wish to deposit to the address sent to you by the bot to complete the deposit</span>
        </div>
        <div className="game-text">
            <strong>Step 4:</strong>
            <span>  Send "buylist" to the bot for a list of items available for purchase</span>
            <img alt="" loading="lazy" src="https://399320087-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FziVkHDEVQ3vSm4tXD199%2Fuploads%2F68AYiwpImZXJ8auZJhDJ%2FQQ%E6%88%AA%E5%9B%BE20230930214613.png?alt=media&amp;token=92280577-d2e9-4101-b86e-8d5b29c330ef" width="465" height="auto" decoding="async" class="r-z2wwpe r-dnmrzs"></img>
        </div> 
        <div className="game-text">
            <strong>Step 5:</strong>
            <span>  Send "buy" with the item you want to buy to complete the purchase</span>
            <img alt="" loading="lazy" src="https://399320087-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FziVkHDEVQ3vSm4tXD199%2Fuploads%2FJwQ4Gd3YwL6PXm503sRw%2FQQ%E6%88%AA%E5%9B%BE20230930215733.png?alt=media&amp;token=47e92fbc-bb85-4c73-ad55-cf2cdce25c3a" width="740" height="auto" decoding="async" class="r-z2wwpe r-dnmrzs"></img>
        </div>
        <div className="game-text">
            <strong>Step 6:</strong>
            <span>  Send a "backpack" command to see what you have for use</span>
            <img alt="" loading="lazy" src="https://399320087-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FziVkHDEVQ3vSm4tXD199%2Fuploads%2FYjM6Vd37vJOxS0m5IlH6%2FQQ%E6%88%AA%E5%9B%BE20230930215847.png?alt=media&amp;token=34c661a2-bb8e-4033-84f9-898a97edfa92" width="324" height="auto" decoding="async" class="r-z2wwpe r-dnmrzs"></img>
        </div>
        <div className="game-text">
            <strong>Step 7:</strong>
            <span>  Send the "use_item" command and the item you want to use to use it</span>
            <img alt="" loading="lazy" src="https://399320087-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FziVkHDEVQ3vSm4tXD199%2Fuploads%2FoBbSyqIZTZ2vbK1vAHMQ%2FQQ%E6%88%AA%E5%9B%BE20230930220009.png?alt=media&amp;token=64238037-ff5c-4554-8e66-05f7fc6c088e" width="392" height="auto" decoding="async" class="r-z2wwpe r-dnmrzs"></img>
        </div>
        <div className="game-text">
            <strong>Step 8:</strong>
            <span>  Once you have your gaming license, you will now need to visit the following link to bind your gaming account, and once you have done so, you can play and earn coins on Pubg, Dota2, Naraka, League of Legends, and Rust!</span>
            
        </div> 
    </div>
  );
}
