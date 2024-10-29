"use client"

import Image from "next/image";
import { Buttonbox } from "@/components/button";
import { signIn } from "next-auth/react";
import { Sessioncom } from "@/components/Session";

export default function Home() {
  return (
    <div className="text-3xl">
      hi there
      <button onClick={()=>{
        signIn();
      }}>signin</button>
      <div>
        <Buttonbox/>
        <Sessioncom/>
      </div>
    </div>
  );
}
