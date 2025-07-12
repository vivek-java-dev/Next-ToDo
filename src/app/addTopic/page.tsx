'use client'
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { error } from "console"


export default function AddTopic(){
    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!title || !description){
            alert("Title and description are required...")
        }
        try{
            const res = await fetch('http://localhost:3000/api/topics',{
                method:"POST",
                headers:{
                    "Content-type":"application/json",
                },
                body:JSON.stringify({title,description}),
            });

            if(res.ok){
                console.log("just testing budydydydydyyd");
                window.location.href = '/' 
                // router.push('/')

            }else{
                throw new Error("Failed to create a topic")
            }
        }catch (error) {
            console.log(error,"did not enter try block");
            
        }
    };

    return(
        <div className="flex flex-col items-center mt-12">
            <form onSubmit={handleSubmit} className="flex flex-col w-[40%] gap-3 ">
                <h2 className="text-2xl">Add Topic Form</h2>
                 
                <input type="text" placeholder="Enter Topic Title" className="outline-1 rounded-md p-3" onChange={(e) =>setTitle(e.target.value)} value={title}/>
                <input type="text" placeholder="Enter Topic Description" className="outline-1 rounded-md p-3 " onChange={(e) =>setDescription(e.target.value)} value={description}/>

                <div className="mt-1">
                <button type="submit" className='border-2 px-4 py-2  rounded-md cursor-pointer text-gray-500'>Add Topic</button>
                </div>

            </form>
        </div>
    )
}