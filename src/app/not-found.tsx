import { FlipWords } from "@/components/ui/flip-words";
import { Button } from "@/components/ui/moving-border";
import Link from "next/link";

export default function Not_Found(){
    return <>

<div className="h-screen w-full bg-black flex flex-col text-white text-xl items-center justify-center ">
    <h1>PAGE NOT FOUND <FlipWords words={['HOME','MAIN','START','INITIAL']} className="text-xl text-blue-600"></FlipWords></h1>
    <div className="pt-10">
        <Link href={'/'}><Button children={'GO BACK'} className=""></Button></Link>
        
        </div>
    </div>
    </>
}