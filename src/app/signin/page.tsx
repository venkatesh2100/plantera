"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function () {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('https://imgs.search.brave.com/SIRjtiRRSJmjrnXkBeBVvR1Rbu4OW1r7CNd0RsVsqLs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jNC53/YWxscGFwZXJmbGFy/ZS5jb20vd2FsbHBh/cGVyLzYxOC83MTEv/NjQzL25hdHVyZS1s/ZWF2ZXMtcGxhbnRz/LXdhdGVyLWRyb3Bz/LXdhbGxwYXBlci1w/cmV2aWV3LmpwZw')",
      }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h2 className="text-2xl font-bold text-green-700 mb-6">Welcome Back to Plantera</h2>
        
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          onChange={(e) => setUsername(e.target.value)}
        />
        
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <button
          onClick={async () => {
            await signIn("credentials", { username, password, redirect: false });
            router.push("/");
          }}
          className="w-full p-3 mb-4 bg-green-700 text-white font-semibold rounded-md hover:bg-green-600 transition"
        >
          Login with Email
        </button>

        <button
          onClick={async () => signIn("google")}
          className="w-full p-3 mb-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-400 transition"
        >
          Login with Google
        </button>

        <button
          onClick={async () => signIn("github")}
          className="w-full p-3 mb-6 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-700 transition"
        >
          Login with GitHub
        </button>

        <p className="text-sm text-green-700">
          New to Plantera?{" "}
          <a href="/signup" className="font-semibold underline text-green-600 hover:text-green-500">
            Create an account
          </a>
        </p>
      </div>
    </div>
  );
}
