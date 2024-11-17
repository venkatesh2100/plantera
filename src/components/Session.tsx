"use client"

import { useSession } from "next-auth/react"


export function Sessioncom(){
    const session = useSession();
    return <div>
        {JSON.stringify(session)}
    </div>
}