"use client"
import { useRouter } from "next/navigation";
import { HiOutlineTrash } from "react-icons/hi";
export default function RemoveBtn({ id }: any) { 
    const router = useRouter()
    const removeShop = async () => {
    const confirmed = confirm("Are you sure?");
    if (confirmed) {
        const res = await fetch(`http://localhost:4000/api/shops?id=${id}`, {
            method: "DELETE",
        });
        if (res.ok) {
            router.refresh()
        }
    }
}
    return (
        <button onClick={removeShop} className="cursor-pointer">
            <HiOutlineTrash size={24} className="text-red-400"/>
        </button>
    )
}