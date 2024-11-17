

import { getServerSession } from "next-auth"

export async function Buttonbox(){
    const serversession = await getServerSession()
    return <div>
        <button>hello form component</button>
        {JSON.stringify(serversession)}
    </div>
}