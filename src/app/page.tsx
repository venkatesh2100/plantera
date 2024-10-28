"use client"

import Image from "next/image";
import { Buttonbox } from "@/components/button";
import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <div className="text-3xl">
      hi there
      <Buttonbox/>
      <button onClick={()=>{
        signIn();
      }}>signin</button>
    </div>
  );
}
