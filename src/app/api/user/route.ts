import { NextResponse } from "next/server";

let  url= "https://reqres.in/api/users"


//=============== get api route ===============
export async function GET() {
    const response = await fetch(url)
    const res= await response.json()
    console.log(res,"getting response")
    return NextResponse.json({data:res})
}

//========= post api route =============

export async function POST (req:Request) {
    const body = await req.json()
    const res= await fetch(url,{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(body)

    })
    const response= await res.json()
    return NextResponse.json({response})
}




