import { NextRequest, NextResponse } from "next/server";
import dbconnect from "@/database"
import Joi from "joi";
import Blog from "@/models/blog";



const AddNewBlog = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required()
})
export async function POST(req: NextRequest, res: NextResponse) {
    try {
        await dbconnect();
        const extractedData = await req.json();

        const { title, discription } = extractedData;

        // const {error}=AddNewBlog.validate({
        //     title,
        //     discription
        // });

        // if(error){
        //         return NextResponse.json({
        //                 success:false,
        //                 message:error.message
        //             })
        //         }

        const NewlyCreatedBlogData = await Blog.create(extractedData);
        console.log(NewlyCreatedBlogData);
        if (NewlyCreatedBlogData) {
            return NextResponse.json({
                success: true,
                message: "Blog Created Successfully"
            })
            

        }
        else {
            return NextResponse.json({
                success: false,
                message: "Somethign Went Wrong!!"
            })

        }


    } catch (error) {
        console.log(error);
        return NextResponse.json({
            success: false,
            message: "Somethign Went Wrong!!"

        })


    }


    // res.("Hello");
    return <>
    </>
}
