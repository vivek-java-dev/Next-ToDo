"use client"


import {HiOutlineTrash } from "react-icons/hi"
import { useRouter } from "next/navigation";

type RemoveBtnProps = {
  id: String;
};

export default function RemoveBtn({ id }: RemoveBtnProps) {
    const router = useRouter();
    const removeTopic = async() =>{
    console.log("remove topic function");
    
    const confirmed = confirm('Are you sure')

    if(confirmed){
        const res = await fetch(`http://localhost:3000/api/topics?id=${id}`,
        {method:"DELETE",});

        if(res.ok){
            router.refresh();
        }

    }
}
    return (
        <button className="text-red-400 cursor-pointer" onClick={removeTopic}>
            <HiOutlineTrash size={24}/>
        </button>
    )
}