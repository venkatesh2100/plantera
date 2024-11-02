"use client"
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function() {
    const router = useRouter();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    return <div>
        <input onChange={(e)=>{
            setUsername(e.target.value);
        }} type="email" placeholder='Email' />
        <input onChange={(e)=>{
            setPassword(e.target.value);
        }} type="password" placeholder='Password' />
        <button onClick={async () => {
            await signIn("credentials", {
                username: username,
                password: password,
                redirect: false,
            });
            router.push("/")
        }}>Login with email</button>
        
        <br />
        <button onClick={async () => {
            await signIn("google");
        }}>Login with google</button>

        <br />
        <button onClick={async () => {
            await signIn("github");
        }}>Login with Github</button>
    </div>
}
