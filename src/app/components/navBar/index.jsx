import "./styles.scss";

import { FaBars, FaReact } from "react-icons/fa";
import React, { useState } from "react";

import { HiX } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import discord from "../../../assets/discord.png";
import telegram from "../../../assets/telegram.png";
import twitter from "../../../assets/twitter.png";

const data = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Gaming",
    to: "/game",
  },
  {
    label: "Project",
    to: "/build",
  },
];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };
  return (
    <div class="w-full">
      <nav class="">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div class="relative flex h-16 items-center justify-between">
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span class="absolute -inset-0.5"></span>
                <span class="sr-only">Open main menu</span>

                <svg
                  class="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                <svg
                  class="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div class="flex flex-shrink-0 items-center">
                <img
                  class="h-8 w-auto"
                  src="https://www.gitbook.com/cdn-cgi/image/width=40,dpr=2,height=40,fit=contain,format=auto/https%3A%2F%2F399320087-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FziVkHDEVQ3vSm4tXD199%252Ficon%252FPrd7Sq6KvqwgomszzNin%252F%25E5%25BE%25AE%25E4%25BF%25A1%25E5%259B%25BE%25E7%2589%2587_20230820211010.png%3Falt%3Dmedia%26token%3Dcf4e4ec8-76c9-4140-a861-fa00508676e5"
                  alt="Your Company"
                />
              </div>
              <div class="hidden sm:ml-6 sm:block">
                <div class="flex space-x-3">
                  <Link
                    href="/"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-600"
                    rel="noopener noreferrer"
                  >
                    <h2 className={``}>Home</h2>
                  </Link>

                  <Link
                    href="/game"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
                    rel="noopener noreferrer"
                  >
                    <h2 className={``}>Gaming </h2>
                  </Link>

                  <Link
                    href="/build"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    rel="noopener noreferrer"
                  >
                    <h2 className={``}>Project</h2>
                  </Link>
                </div>
              </div>
            </div>
            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              

              {/* <div class="relative ml-3">
                <div>
                  <button
                    type="button"
                    class="relative flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <a
                      href="https://discord.com/invite/4uJMUhDSHB"
                      target="_blank"
                    >
                      <div className="social-item">
                        <Image src={discord} alt="discord" />
                      </div>
                    </a>
                    <a
                      href="https://discord.com/invite/4uJMUhDSHB"
                      target="_blank"
                    >
                      <div className="social-item">
                        <Image src={telegram} alt="telegram" />
                      </div>
                    </a>
                    <a
                      href="https://twitter.com/MorningWor94299"
                      target="_blank"
                    >
                      <div className="social-item hover:text-gray-900">
                        <Image src={twitter} alt="twitter" />
                      </div>
                    </a>
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <div class="sm:hidden" id="mobile-menu">
          <div class="space-y-1 px-2 pb-3 pt-2">
            <Link
              href="/"
              class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
              rel="noopener noreferrer"
            >
              <h2 className={``}>Home</h2>
            </Link>
            <Link
              href="/game"
              class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
              rel="noopener noreferrer"
            >
              <h2 className={``}>Gaming</h2>
            </Link>
            <Link
              href="/bulid"
              class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
              rel="noopener noreferrer"
            >
              <h2 className={``}>Project</h2>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
