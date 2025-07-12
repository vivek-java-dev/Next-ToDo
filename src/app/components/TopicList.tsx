import Link from "next/link"
import RemoveBtn from "./RemoveBtn";
import {HiPencilAlt} from "react-icons/hi"

export type Topic = {
  _id: string;
  title: string;
  description: string;
  createdAt: string;  // or `Date` if you're parsing it as a Date
  updatedAt: string;  // or `Date`
  __v: number;
};


const getTopics = async(): Promise<{ topics: Topic[] }>=>{
    try{
        const res = await fetch("http://localhost:3000/api/topics",
            {cache:"no-store",}
        );

        if(!res.ok){
            throw new Error("failed to fetch topics");
        }

        const data: Topic[] = await res.json();
        return { topics: data };
        
    }catch(error){
        console.log("Error loading topics: ",error);
        return { topics: [] }
    }
}

export default async function TopicList () {
    const {topics} = await getTopics();
    return (
        <>
        {topics.map((t:Topic) => (
        <div 
            key={t._id}
            className="w-[60%] border-2 rounded-md mt-4 p-3 border-gray-400"
            >
            <div className="flex flex-1 justify-between">
                <h2 className="font-bold text-2xl">{t.title}</h2>
                <div className="flex gap-2">
                    <div className="">
                        <RemoveBtn id={t._id.toString()}/>
                    </div>
                    <div className="">
                        <Link href={`/editTopic/${t._id}`}>
                        <HiPencilAlt size={24}/>
                        </Link>
                    </div>
                </div>
            </div>
            <h4 className="text-gray-500">{t.description}</h4>
        </div>
        ))}
        </>
    );
}