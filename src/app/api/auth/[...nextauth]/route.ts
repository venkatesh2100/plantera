import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest, params: any){
    console.log(params)
    return NextResponse.json({
        message: "hello man"
    })
}