"use client"

import { useState, useEffect } from "react";
import Mycard from "../ui/mycard";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { useRouter } from "next/navigation";
import UpdateBlog from "../update-blog/updateBlog";


interface Blog {
    _id:string,
  title: string;
  discription: string; // Use 'description' to match the interface
}

export default function GetBlog() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(false); // Add a loading state for better UX

  const fetchData = async () => {
    setIsLoading(true); // Set loading state to true
    try {

      const apiResponse = await fetch("/api/get-blog", {
        method: "GET",
        
      });


      const result = await apiResponse.json();
      console.log("result",result.data);
      
      
      if (Array.isArray(result.data)) { // Check if the response is an array
        setBlogs(result.data);
      } else {
        console.error("Unexpected API response format. Expected an array.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false); // Set loading state to false
    }
  };

  const handleDelete=async(id:string)=>{
    try {
        const apiResponse = await fetch("/api/delete-blog", {
            method: "DELETE",
            body: JSON.stringify({id:id}),
        });

        const result = await apiResponse.json();
        console.log(result);
        console.log(id);
        
        // router.refresh();
        fetchData();


        if (result?.success) {
            console.log("Blog Deleted");
            
        }
        else {
            console.log("Something went wrong");
        }
        
    } catch (error) {
        console.log(error);

        
    }

}


const handleEdit=()=>{
  
}








const router = useRouter();

  useEffect(() => {
        fetchData();
  }, []);

  // Conditionally render content based on loading state
  return (
    <div className= "text-white  w-full flex  gap-5 flex-wrap-reverse ">
      {isLoading ? (
        <p>Loading blog data...</p>
      ) : (
        blogs.map((blog) => (
          <Card className=" max-w-md h-fit     ">
          <CardHeader>
            <CardTitle>{blog.title}</CardTitle>
            <CardDescription>{blog.discription}</CardDescription>
            <div className="flex gap-2 pt-5">
              <button className="p-4 bg-black text-white rounded-xl" onClick={() => handleDelete(blog._id)}>Delete</button>
              <UpdateBlog blogId={blog._id}></UpdateBlog>
            </div>
          </CardHeader>
        </Card>))
      )}



    </div>
  );
}
