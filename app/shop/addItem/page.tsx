"use client"

import { sectionPadding } from "@/app/styles/styles";
import Button from "@/app/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function AddItem() {
    const router = useRouter();
    const [formValue, setFormValue] = useState({
        title: "",
        description: "",
        price: ""
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        if (name === "price") {
            const numericValue =  value.replace(/\D/g, "")
            setFormValue((prev) => ({...prev, [name]: numericValue}))
        }
        setFormValue((prev) => (
                {...prev, [name]: value}
            )
        )
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formValue.title || !formValue.description || !formValue.price) {
            alert("Title, Description, and Price are required.");
            return;
        }
        try {
            const res = await fetch("http://localhost:4000/api/shops/", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({title: formValue.title, price: formValue.price, description: formValue.description})
             } );
             if (res.ok) {
                router.push("/shop");
             } else {
                throw new Error("Failed to create Shop");
             }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <section className={`${sectionPadding} mt-20 py-20 `}>
            <form onSubmit={handleSubmit} className="w-full md:w-[600px] flex flex-col gap-6 mt-10 mx-auto">
                <input 
                onChange={handleChange}
                name="title"
                value={formValue.title}
                className="border border-slate-300 px-8 py-3"
                type="text"
                placeholder="Item" />
                <input 
                onChange={handleChange}
                name="description"
                value={formValue.description}
                className="border border-slate-300 px-8 py-3"
                type="text"
                placeholder="Description"
                />
                <input 
                onChange={handleChange}
                name="price"
                value={formValue.price}
                className="border border-slate-300 px-8 py-3"
                type="text"
                placeholder="Price"
                />
                <Button >
                    Add Item
                </Button>
            </form>
        </section>
    )
}