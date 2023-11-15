import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import styles from "./home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <section className={styles.home}>
      <p className={styles.homeDiv}></p>
      <article className=" relative z-20 p-6">
        <nav className="flex justify-between items-center bg-[#FFFFFF] p-4 rounded-lg ">
          <div className="flex gap-2 justify-center items-center">
            <h3 className="text-[28.69px] text-sectify font-bold uppercase">
              Sectify
            </h3>
          </div>
          <ul className="flex justify-center items-center gap-12 text-sectify-black">
            <li className="hidden md:inline-block">
              <Link href={""}>About</Link>
            </li>
            <li className="hidden md:inline-block">
              <Link href={""}>Process</Link>
            </li>
            <li className="hidden md:inline-block">
              <Link href={""}>Blog</Link>
            </li>
            <li className="hidden md:inline-block text-sectify">
              <Link href={""}>Sign in</Link>
            </li>
            <li className="hidden md:inline-block">
              <button className="text-white bg-sectify rounded-lg text-sm px-5 py-2.5">
                Sign Up
              </button>
            </li>
          </ul>
        </nav>
        <div className="flex flex-col gap-4 justify-center items-center mt-[250px]">
        <main className=" w-[920px] flex flex-col gap-4 text-center p-3 ">
          <h3 className="text-[40px]">
          Unlock the power of your vote with SECTIFY
          </h3>
          <p className="text-[24px] text-center">Welcome to our innovative voting platform, 
            where your voice becomes the catalyst for change. Join us on a transformative journey,
             empowering you to shape the future you desire</p>
             <div className="flex justify-center items-center">
             <button className="text-white bg-sectify rounded-sm text-sm p-[12px] text-center w-[300px]">
                Get Started
              </button>
             </div>
          
        </main>
        </div>
      </article>
    </section>
  );
}
