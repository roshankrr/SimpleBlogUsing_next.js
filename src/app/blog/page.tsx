import AddBlog from "@/components/add-new-blog/addBlog";
import GetBlog from "@/components/get-all-blog/getBlog";




export default function Blog() {
    return <>
        <div className="min-h-screen w-full flex flex-col items-center pt-10  bg-zinc-950">
            <AddBlog ></AddBlog>
            <div className="h-1/2 w-full text-black  p-10 flex  flex-wrap">
            <GetBlog></GetBlog>
            </div>
        </div>


    </>
}