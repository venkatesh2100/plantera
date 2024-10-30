import { NEXT_AUTH_CONFIG } from "@/lib/auth";
import { getServerSession } from "next-auth"


export default async function (){
    const session = await getServerSession(NEXT_AUTH_CONFIG);
    return <div>
        hi check
        {JSON.stringify(session)}
    </div>
}