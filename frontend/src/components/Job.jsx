import { Bookmark } from 'lucide-react';
import { Button } from './ui/button';
import React from 'react'
import { Avatar, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';

const Job = () => {
    return (
        <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100'>
            <div className='flex items-center justify-between'>
                <p className='text-sm text-gray-500'>2 days ago</p>
                <Button variant="outline" className="rounded-full" size="icon"><Bookmark /></Button>
            </div>
            
            <div className='flex items-center gap-2 my-2'>
                <Button className='p-6' variant='outline' size='icon'>
                    <Avatar>
                        <AvatarImage src='https://i.pinimg.com/736x/3c/54/43/3c5443db6923a6e2ea061d7934b1d947.jpg' />
                    </Avatar>
                </Button>
                <div>
                    <h1 className='font-medium text-lg'>Company Name</h1>
                    <p className='text-sm text-gray-500'>India</p>

                </div>
            </div>

            <div>
                <h1 className='font-bold text-lg my-2'>Title</h1>
                <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ad voluptate vel aspernatur officia pariatur nemo sit. </p>
            </div>
            <div>
                <Badge className={'text-blue-700 font-bold'} variant='ghost'>12 Positions</Badge>
                <Badge className={'text-orange-700 font-bold'} variant='ghost'>12 Part Time</Badge>
                <Badge className={'text-purple-900 font-bold'} variant='ghost'>4LPA</Badge>
            </div>
            <div className='flex items-center gap-4 mt-4'>
                <Button variant="outline">Details</Button>
                <Button className="bg-fuchsia-950">Save for later</Button>
            </div>
        </div>
    )
}
 
export default Job;