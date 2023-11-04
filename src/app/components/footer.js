import "./footer.scss";

import Image from "next/image";
import Link from "next/link";
import discord from "../../assets/discord.png";
import telegram from "../../assets/telegram.png";
import twitter from "../../assets/twitter.png";

export default function Footer() {
  return (
    <div className="footer">
      {/* <div className="copy-right">
        <img
          alt=""
          src="https://www.gitbook.com/cdn-cgi/image/width=40,dpr=2,height=40,fit=contain,format=auto/https%3A%2F%2F399320087-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FziVkHDEVQ3vSm4tXD199%252Ficon%252FPrd7Sq6KvqwgomszzNin%252F%25E5%25BE%25AE%25E4%25BF%25A1%25E5%259B%25BE%25E7%2589%2587_20230820211010.png%3Falt%3Dmedia%26token%3Dcf4e4ec8-76c9-4140-a861-fa00508676e5"
          width="100%"
          height="auto"
          decoding="async"
          className="copy-logo"
        />
        <span>Copyright © 2023 GoodMorningNetWork. All rights reserved.</span>
      </div>
      <div className="copy-bottom">
        <div className="copy-left">
          <div className="social">
            <a href="https://discord.com/invite/4uJMUhDSHB" target="_blank">
              <div className="social-item">
                <Image src={discord} />
              </div>
            </a>
            <a href="https://discord.com/invite/4uJMUhDSHB" target="_blank">
              <div className="social-item">
                <Image src={telegram} />
              </div>
            </a>
            <a href="https://twitter.com/MorningWor94299" target="_blank">
              <div className="social-item">
                <Image src={twitter} />
              </div>
            </a>
          </div>
          <div className="copy-text">
            <p>Terms & Conditions</p>
            <p className="copy-text-item">Privacy Policy</p>
          </div>
        </div>
        <div className="bottom-nav">
          <Link
            href="/"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            Home{" "}
          </Link>

          <Link
            href="/game"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            rel="noopener noreferrer"
          >
            Gaming{" "}
          </Link>

          <Link
            href="/build"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            Building{" "}
          </Link>
        </div>
      </div> */}

      <div className="container flex flex-col mx-auto">
        <div className="flex flex-col items-center w-full my-20">
          <div className="flex flex-wrap items-center justify-center gap-5 lg:gap-12 gap-y-3 lg:flex-nowrap text-dark-grey-900">
            <Link
              href="/"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              rel="noopener noreferrer"
            >
              Home{" "}
            </Link>

            <Link
              href="/game"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
              rel="noopener noreferrer"
            >
              Gaming{" "}
            </Link>

            <Link
              href="/build"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              rel="noopener noreferrer"
            >
              Building{" "}
            </Link>
          </div>
          <div className="flex flex-col items-center gap-6 mt-5">
            <div className="flex flex-wrap items-center justify-center gap-5 lg:gap-12 gap-y-3 lg:flex-nowrap text-dark-grey-900">
              <a href="https://discord.com/invite/4uJMUhDSHB" target="_blank">
                <div className="social-item">
                  <Image src={discord} alt="discord" />
                </div>
              </a>
              <a href="https://discord.com/invite/4uJMUhDSHB" target="_blank">
                <div className="social-item">
                  <Image src={telegram} alt="telegram" />
                </div>
              </a>
              <a href="https://twitter.com/MorningWor94299" target="_blank">
                <div className="social-item hover:text-gray-900">
                  <Image src={twitter} alt="twitter" />
                </div>
              </a>
            </div>
            <div className="flex items-center gap-8"></div>
          </div>
          <div className="flex items-center">
            <p className="text-base font-normal leading-7 text-center text-grey-700 copy-right">
              {/* <img
                alt="logo"
                src="https://www.gitbook.com/cdn-cgi/image/width=40,dpr=2,height=40,fit=contain,format=auto/https%3A%2F%2F399320087-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FziVkHDEVQ3vSm4tXD199%252Ficon%252FPrd7Sq6KvqwgomszzNin%252F%25E5%25BE%25AE%25E4%25BF%25A1%25E5%259B%25BE%25E7%2589%2587_20230820211010.png%3Falt%3Dmedia%26token%3Dcf4e4ec8-76c9-4140-a861-fa00508676e5"
                width="100%"
                height="auto"
                decoding="async"
                className="copy-logo"
              /> */}
              Copyright © 2023 GoodMorningNetWork. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
