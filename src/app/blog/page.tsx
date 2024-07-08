import AddBlog from "@/components/add-new-blog/addBlog";
import Mycard from "@/components/ui/mycard";




export default function Blog() {
    return <>
        <div className="h-screen w-full flex flex-col items-center justify-center bg-zinc-950">

            <AddBlog ></AddBlog>

            <div className="h-1/2 w-full  p-10 flex  gap-5 flex-wrap">
                <Mycard></Mycard> 
                <Mycard></Mycard> 
                <Mycard></Mycard>
            </div>



        </div>


    </>
}