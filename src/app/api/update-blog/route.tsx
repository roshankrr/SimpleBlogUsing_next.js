import dbconnect from "@/database";
import Blog from "@/models/blog";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest) {
  // Extract data from the request body
  const extractedData = await req.json();
  const { id, title, discription } = extractedData;

  try {
    // Connect to the database
    await dbconnect();

    console.log("id:", id, "title:", title, "content:", discription); // Improved readability with commas

    // Update the blog post
    const updatedBlog = await Blog.findByIdAndUpdate(
      { _id: id }, // Use _id for MongoDB document ID
      { title, discription },
      { new: true } // Return the updated document
    );

    console.log("Blog updated");

    // Respond with success message and updated data
    return NextResponse.json({
      success: true,
      message: "Blog Updated",
      data: updatedBlog,
    });
  } catch (error) {
    console.error(error); // Use console.error for errors

    // Respond with error message
    return NextResponse.json({
      success: false,
      message: "Something Went Wrong",
      error: error || "An unknown error occurred", // Provide a more user-friendly error message
    });
  }
}
