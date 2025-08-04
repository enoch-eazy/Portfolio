import images from "@/public/images";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/button";
import { sectionPadding } from "../styles/styles";
import KidsShop from "./getItem/page";
import GetItem from "./getItem/page";
import { Icons } from "../ui/icons";


export default function ShopPage() {
    return (
        <>
        {/* Desktop Screen  */}
        <main className={`hidden md:flex py-4 mt-10 w-full h-screen `}>
           <div className="flex flex-col px-6 bg-[#0F2B22] w-[250px] min-w-3xs">
                <Link href={"/"} className="cursor-pointer mt-10">
                    <Image src={images.logo} alt="Logo" className="size-24 invert object-contain"/>
                </Link>
                
                <Link 
                className="font-bold text-white mt-4 flex gap-4 items-center ml-4"
                href={"/shop/addItem"}>
                    Add Item <Icons.ArrowRight/>
                </Link>
               
           </div>
           <div className="flex items-center ml-4">
                <GetItem />
           </div>
        </main>

        {/* Mobile Screen  */}
        <main className={`${sectionPadding} grid md:hidden py-4 mt-20 w-full`}>
           <div className="flex justify-between items-center w-full bg-[#0F2B22] p-2">
                <Link href={"/"} className="cursor-pointer">
                    <Image src={images.logo} alt="Logo" className="w-14 h-14 invert"/>
                </Link>
                    <Button >
                    <Link href={"/shop/addItem"}>
                        Add Shop
                    </Link>
                    </Button>
           </div>
           <div>
                <GetItem />
           </div>
        </main>
        </>
    )
}