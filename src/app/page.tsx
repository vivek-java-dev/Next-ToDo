'use client';
import { useState } from 'react';
import Link from 'next/link';
import { imageOptimizer } from 'next/dist/server/image-optimizer';
import  TopicList  from './components/TopicList';

export default function Home() {
  return (
    <div className='bg-white px-52 flex flex-col items-center'>
      <div className='w-full text-center flex flex-col items-center '>
        <h1 className="text-2xl font-bold pt-4 ml-6 mb-3 text-gray-700">What do you want to do?</h1>
        <Link href='/addTopic' className='border-2 px-4 py-2 rounded-xl cursor-pointer text-gray-500'>Add new Topic</Link>
      </div>
      
      <TopicList/>
      
    </div>
  );
}