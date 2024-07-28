"use client";
import Link from "next/link";
import { useRef, useState } from "react";

export default function Home() {
  return (
    <main className=" bgmain w-screen h-screen flex justify-center items-center ">
      <Link href='/home'>
        <div className="w-[480px] h-[510px] box relative flex justify-center items-center hover:scale-105 duration-300 cursor-pointer bg-slate-700  ">
          <span className="spans"></span>
          <form
            action=""
            className=" w-[470px]  flex items-center border-none outline-none h-[500px] justify-center bg-gray-800 z-10 absolute "
          >
            <div className="text-white text cursor-pointer duration-500 text-xl">
              Get Start
            </div>
          </form>
        </div>
      </Link>
    </main>
  );
}
