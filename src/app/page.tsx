"use client"

import Image from "next/image";
import { Buttonbox } from "@/components/button";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const session = useSession()
  return (
    <div className="text-3xl">
      hi there
      <br></br>
      <button onClick={()=>{
        signIn();
      }}>signin</button>
      <br></br>
      <button onClick={()=>{
        signOut();
      }}>signOut</button>
      <br></br>
      {JSON.stringify(session)}
    </div>
  );
}
