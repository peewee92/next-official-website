import "../globals.css";

import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left top-nav">
      <div className="logo-wrap">
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
      <Link
        href="/"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        rel="noopener noreferrer"
      >
        <h2 className={``}>
          Home{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
      </Link>

      <Link
        href="/game"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
        rel="noopener noreferrer"
      >
        <h2 className={``}>
          Gaming{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
      </Link>

      <Link
        href="/build"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        rel="noopener noreferrer"
      >
        <h2 className={``}>
          Project{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
      </Link>
    </div>
  );
}
