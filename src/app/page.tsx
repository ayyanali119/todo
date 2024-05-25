import Image from "next/image";
import Link from "next/link";





export default function Home() {
  return (
    <div className="mainBg h-[calc(100vh-60px)] flex flex-col justify-center items-center gap-10">
     <h1 className=" text-6xl font-bold">Todo App</h1>
     <Link className=" bg-black p-1 rounded text-white text-2xl px-4 hover:bg-gray-900" href={"/todo"}>Get Started</Link>

    </div>
  );
}

