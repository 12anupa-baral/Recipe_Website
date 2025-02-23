import Image from "next/image";
import Card from "../Components/Card";

export default function Home() {
  return (
    <div className="flex flex-wrap w-full px-4 sm:px-6 lg:px-8 justify-center gap-5">
   <Card/>
   <Card/>
   <Card/>
   <Card/>
   <Card/>
   <Card/>
   </div>
  );
}
