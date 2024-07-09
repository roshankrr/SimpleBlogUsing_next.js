import dbconnect from "@/database";
import Blog from "@/models/blog";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req:NextRequest,res:NextResponse){
    try {
        await dbconnect();
    
        const data = await Blog.find({}); // adjust the query as needed
        // console.log(data);
        
        if (data) {
            return NextResponse.json({
                success: true,
                message: "Data fetched sucessfully",
                data:data,
            })

        }
      } catch (error) {
        console.error(error);
        if (error) {
            return NextResponse.json({
                success: false,
                message: "Something Went Wrong internally"
            })

        }
      }
    

    return <>

    </>
}

