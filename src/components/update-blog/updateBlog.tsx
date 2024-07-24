"use client"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { use, useEffect, useState } from "react"
// import BlogOverview from "../blog-overview/blogOverview"
// import { useRouter } from "next/navigation"
const initialBlogFormData = {
    id: '',
    title: '',
    discription: '',

}


export default function UpdateBlog( blogId:{blogId:string} ) {


    const [loading, setloading] = useState(false);
    const [openblogDialog, setopenblogDialog] = useState(false);
    const [blogFormData, setBlogFormData] = useState(initialBlogFormData);



    const handleSubmit=async()=>{
        blogFormData.id=blogId.blogId;
        try {
            setloading(true);
            const apiResponse = await fetch("api/update-blog", {
                method: "PUT",
                body: JSON.stringify(blogFormData),
                cache:"no-store"
                
            });
            const data = await apiResponse.json();
            console.log(data);
            setloading(false);
            setopenblogDialog(false);

            window.location.reload();

            
        } catch (error) {
            console.log(error);
        }
    }
    return <>
    
    <div className="">
        <Dialog open={openblogDialog}>
            <DialogTrigger asChild={true} >
                <Button className=" p-4 rounded-xl bg-black text-white" onClick={() => {
                    setopenblogDialog(true)
                    setBlogFormData(initialBlogFormData);
                }} variant="outline"> Edit</Button>
                {/* <Link href={'/'}><Button>Reload</Button></Link> */}
                
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add New Blog <span onClick={() => setopenblogDialog(false)} className=" cursor-pointer absolute right-3 top-3 z-20">❎</span></DialogTitle>
                    <DialogDescription>
                        Enter Your Discription Here
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Title
                        </Label>
                        <Input id="Title" placeholder="Enter your title" value={blogFormData.title} onChange={(event) => {
                            setBlogFormData({
                                ...blogFormData,
                                title: event.target.value
                            })
                        }}
                            className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="Discription" className="text-right">
                            Discription
                        </Label>
                        <Input id="Discription" placeholder="Enter your discription" value={blogFormData.discription} onChange={(event) => {
                            setBlogFormData({
                                ...blogFormData,
                                discription: event.target.value
                            })
                        }} className="col-span-3" />
                    </div>
                </div>
                <DialogFooter>
                    
                        <Button name="submit" type="submit" onClick={handleSubmit}>
                            {
                                loading ? "Saving..." : "Save changes"
                            }
                        </Button>
  
                </DialogFooter>
            </DialogContent>
        </Dialog>

    </div>

</>
}