import "./styles.scss";

import { FaBars, FaReact } from "react-icons/fa";
import React, { useState } from "react";

import { HiX } from "react-icons/hi";
import Link from "next/link";

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
  }
];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };
  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
        <div className="logo-img-wrap">
          <img
            alt=""
            src="https://www.gitbook.com/cdn-cgi/image/width=40,dpr=2,height=40,fit=contain,format=auto/https%3A%2F%2F399320087-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FziVkHDEVQ3vSm4tXD199%252Ficon%252FPrd7Sq6KvqwgomszzNin%252F%25E5%25BE%25AE%25E4%25BF%25A1%25E5%259B%25BE%25E7%2589%2587_20230820211010.png%3Falt%3Dmedia%26token%3Dcf4e4ec8-76c9-4140-a861-fa00508676e5"
            width="100%"
            height="auto"
            decoding="async"
            className="img-logo"
          />
        </div>
        <div>GoodMorningNetWork</div>
        </div>
        <ul
          className={`navbar__container__menu ${toggleIcon ? "active" : ""} `}
        >
          {data.map((item, key) => (
            <li key={key} className="navbar__container__menu__item">
              <Link
                className="navbar__container__menu__item__links"
                href="/game"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;