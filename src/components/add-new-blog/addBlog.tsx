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
// import { useRouter } from "next/navigation"
const initialBlogFormData = {
    title: '',
    discription: '',

}


export default function AddBlog() {

    const [loading, setloading] = useState(false);
    const [openblogDialog, setopenblogDialog] = useState(false);
    const [blogFormData, setBlogFormData] = useState(initialBlogFormData);
    // const router=useRouter();
    const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   if (!isMounted) {
//     return null;
//   }



    const handelSubmit = async () => {


        // event.preventDefault(); // Prevent default form submission
        try {
            setloading(true);
            const apiResponse = await fetch("api/add-blog", {
                method: "POST",
                body: JSON.stringify(blogFormData),
            });

            const result = await apiResponse.json();
            if (result?.success) {
                setBlogFormData(blogFormData);
                setopenblogDialog(false);
                setloading(true);
                // router.push("/blog");
                
                
                // Redirect to the "/blog" page
                window.location.href = "/blog";
            }


            setloading(false);
            
        } catch (error) {
            console.log(error);
            setloading(false);
            setBlogFormData(initialBlogFormData)


        }
    }



    return <>
    
        <div className="">

            <Dialog  open={openblogDialog}>
                <DialogTrigger asChild={true} >
                    <Button onClick={() => {
                        setopenblogDialog(true)
                        setBlogFormData(initialBlogFormData);
                    }} variant="outline"> Add Blog</Button>
                    {/* <Link href={'/'}><Button>Reload</Button></Link> */}
                    
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add New Blog <span onClick={() => setopenblogDialog(false)} className="text-2xl text-white cursor-pointer absolute right-3 top-3 z-20">❎</span></DialogTitle>
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
                        
                            <Button name="submit" type="submit" onClick={handelSubmit}>
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