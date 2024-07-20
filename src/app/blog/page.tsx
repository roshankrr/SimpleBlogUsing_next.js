import AddBlog from "@/components/add-new-blog/addBlog";
import GetBlog from "@/components/get-all-blog/getBlog";
import Image from "next/image";
import amazon from "@/svgs/amazon-company-logo.a75b7df5.svg"
import airbnb from "@/svgs/airbnb.svg";
import bosh from "@/svgs/bosch-company-logo.613be880.svg";
import ebay from "@/svgs/EBay_logo.svg";
import google from "@/svgs/google-company-logo.bfedee9d.svg";
import larsen from "@/svgs/lt-company-logo.a4138397.svg";

    const companyLogo = [amazon, airbnb, bosh, ebay, google, larsen];


export default function Blog() {
    return <>
        <div className="min-h-screen w-full flex flex-col items-center pt-10  bg-zinc-950">
            <AddBlog></AddBlog>
            <div className="h-1/2 w-full text-black  p-10 flex  flex-wrap">
                <GetBlog></GetBlog>
            </div>
            <div className="w-full flex gap-24 px-5 animate-bounce">
                {companyLogo.map((logo, index) => (
                    <Image key={index} height={150} width={150} src={logo} alt="Company Logo" />
                ))}
            </div>

        </div>


    </>
}