'use client'

import { useState , FormEvent} from "react"
import { useRouter } from "next/navigation";

type EditTopicFormProps = {
  id: string;
  title: string;
  description: string;
};

export default function EditTopicForm({id,title,description}: EditTopicFormProps) {
    const [newTitle,setNewTitle] = useState(title);
    const [newDescription,setNewDescription] = useState(description);
    const router = useRouter();

    const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
        const res = await fetch(`http://localhost:3000/api/topics/${id}`,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({newTitle,newDescription}),
        });
        if(!res.ok){
            throw new Error("failed to update topic...");
        }
        window.location.href = '/' 
        
    } catch (error) {
        console.log(error);
        
    }
}
    return(
        <form onSubmit={handleSubmit} className="flex flex-col w-[40%] gap-3 ">
                <h2 className="text-2xl">Edit Topic Form</h2>
                <input type="text" 
                    placeholder="Enter Topic Title" 
                    className="outline-1 rounded-md p-3"
                    value={newTitle}
                    onChange={e => setNewTitle(e.target.value)}
                     />
                <input type="text" 
                    placeholder="Enter Topic Description" 
                    className="outline-1 rounded-md p-3 " 
                    value={newDescription}
                    onChange={e => setNewDescription(e.target.value)}

                    />
                <div className="mt-1">
                <button type="submit" className='border-2 px-4 py-2  rounded-md cursor-pointer text-gray-500'>Update Topic</button>
                </div>

            </form>
    )
}