"use client"

import { useState, useEffect } from "react";
import Mycard from "../ui/mycard";

interface Blog {
    _id:string,
  title: string;
  discription: string; // Use 'description' to match the interface
}

export default function GetBlog() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(false); // Add a loading state for better UX

  useEffect(() => {
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

    fetchData();
  }, []);

  // Conditionally render content based on loading state
  return (
    <div className= "text-white w-full item-center flex gap-5 flex-wrap">
      {isLoading ? (
        <p>Loading blog data...</p>
      ) : (
        blogs.map((blog) => (
          <Mycard _id={blog._id} title={blog.title} discription={blog.discription} /> // Assuming Mycard has a key prop
        ))
      )}
    </div>
  );
}
