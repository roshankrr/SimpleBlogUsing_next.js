import dbconnect from "@/database";
import Blog from "@/models/blog";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
    try {
        await dbconnect();
        const { id } = await req.json();
        const data = await Blog.findByIdAndDelete(id);
        console.log("blog deleted");
        
        return NextResponse.json({
            success: true,
            message: "Blog Deleted",
            data: data
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            success: false,
            message: "Something Went Wrong",
            error: error,
        });
    }
}
