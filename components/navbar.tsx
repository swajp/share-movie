import Image from "next/image";
import Link from "next/link";
import React from "react";
import ThemeButton from "./themebutton";
import AuthButton from "./authButton";

const items = [
  {
    name: "Movies",
    url: "/movies",
  },
  {
    name: "Series",
    url: "/series",
  },
];

export default function Navbar() {
  return (
    <header className=" max-w-screen-xl mx-auto px-8 py-3 bg-white dark:bg-black">
      <div className="flex justify-between h-16">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-8">
            <Link href="/">
              <div className="flex gap-2 items-center">
                <div>
                  <svg
                    width="39"
                    height="39"
                    viewBox="0 0 39 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M29.2516 32.5H32.5V35.75H19.5C10.5251 35.75 3.25 28.4749 3.25 19.5C3.25 10.5251 10.5251 3.25 19.5 3.25C28.4749 3.25 35.75 10.5251 35.75 19.5C35.7521 22.0229 35.1658 24.5116 34.0378 26.7683C32.9097 29.025 31.2709 30.9875 29.2516 32.5ZM19.5 16.25C20.362 16.25 21.1886 15.9076 21.7981 15.2981C22.4076 14.6886 22.75 13.862 22.75 13C22.75 12.138 22.4076 11.3114 21.7981 10.7019C21.1886 10.0924 20.362 9.75 19.5 9.75C18.6381 9.75 17.8114 10.0924 17.2019 10.7019C16.5924 11.3114 16.25 12.138 16.25 13C16.25 13.862 16.5924 14.6886 17.2019 15.2981C17.8114 15.9076 18.6381 16.25 19.5 16.25ZM13 22.75C13.862 22.75 14.6886 22.4076 15.2981 21.7981C15.9076 21.1886 16.25 20.362 16.25 19.5C16.25 18.6381 15.9076 17.8114 15.2981 17.2019C14.6886 16.5924 13.862 16.25 13 16.25C12.138 16.25 11.3114 16.5924 10.7019 17.2019C10.0924 17.8114 9.75 18.6381 9.75 19.5C9.75 20.362 10.0924 21.1886 10.7019 21.7981C11.3114 22.4076 12.138 22.75 13 22.75ZM26 22.75C26.862 22.75 27.6886 22.4076 28.2981 21.7981C28.9076 21.1886 29.25 20.362 29.25 19.5C29.25 18.6381 28.9076 17.8114 28.2981 17.2019C27.6886 16.5924 26.862 16.25 26 16.25C25.1381 16.25 24.3114 16.5924 23.7019 17.2019C23.0924 17.8114 22.75 18.6381 22.75 19.5C22.75 20.362 23.0924 21.1886 23.7019 21.7981C24.3114 22.4076 25.1381 22.75 26 22.75ZM19.5 29.25C20.362 29.25 21.1886 28.9076 21.7981 28.2981C22.4076 27.6886 22.75 26.862 22.75 26C22.75 25.1381 22.4076 24.3114 21.7981 23.7019C21.1886 23.0924 20.362 22.75 19.5 22.75C18.6381 22.75 17.8114 23.0924 17.2019 23.7019C16.5924 24.3114 16.25 25.1381 16.25 26C16.25 26.862 16.5924 27.6886 17.2019 28.2981C17.8114 28.9076 18.6381 29.25 19.5 29.25Z"
                      className="fill-black dark:fill-white"
                    />
                  </svg>
                </div>
                <p className="text-2xl font-black whitespace-nowrap text-black dark:text-white">
                  WatchLater
                </p>
              </div>
            </Link>
            <div className="flex gap-3">
              {/*items.map((item) => (
                <Link key={item.name} href={item.url}>
                  <p className="text-xl whitespace-nowrap text-black dark:text-white">
                    {item.name}
                  </p>
                </Link>
              ))*/}
            </div>
          </div>

          <div className="flex gap-2">
            <AuthButton />
            <ThemeButton />
          </div>
        </div>
      </div>
    </header>
  );
}
