import RemoveBtn from "@/app/components/shared/RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
const getShops = async () => {
    try {
        const res = await fetch("http://localhost:4000/api/shops/", {cache: "no-store"});
        if (!res.ok) {
            throw new Error("Failed to fetch Shops")
        }
        return res.json();
    } catch (error) {
        console.log("Error loading Shops... ", error)
    }
}

export default async function GetItem() {
    const data = await getShops();
    const shops = data?.shops || [];
    return (
        <>
        {shops.map((item: any) => (
        <div key={item._id} className="p-4 border border-slate-300 my-3 flex justify-between items-end">
            <div>
                <h2 className="font-bold text-2xl">{item.title}</h2>
                <p className="text-sm">
                   {item.description}
                </p>
                <p className="font-bold mt-6">
                    {item.price}
                </p>
            </div>
            <div className="flex gap-2 ">
                <RemoveBtn id={item._id}/>
                <Link href={`/shop/updateItem/${item._id}`}>
                   <HiPencilAlt size={24}/>
                </Link>
            </div>
        </div>) ) }
        </>
    )
}