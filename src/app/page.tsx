import { Button } from "@/components/ui/moving-border";
import { FlipWords } from "../components/ui/flip-words";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="h-screen w-full bg-black flex flex-col text-white text-xl items-center justify-center ">
    <h1>THIS IS  <FlipWords words={['HOME','MAIN','START','INITIAL']} className="text-xl text-blue-600"></FlipWords> PAGE</h1>
    <div className="pt-10">
      <Link href={'/blog'}>
      <Button children={'Explore Blogs'} className=""></Button>
      </Link>
      </div>
    </div>

    
    </>
  );
}
