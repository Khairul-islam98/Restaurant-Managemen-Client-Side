import React from 'react';
import { FcBusinessman } from "react-icons/fc";
import { GiStairsCake } from "react-icons/gi";
import { BiSolidParty } from "react-icons/bi";

const Ads = () => {
    return (
        <div className='bg-[#0e7490] h-60 flex flex-col lg: items-center justify-center w-5/6 mx-auto rounded-xl my-14'>
            <div className='space-y-4 lg:flex gap-24  text-white'>
                <div className='flex gap-3'>
                    <p className='text-7xl text-rose-500 items-center '><GiStairsCake></GiStairsCake></p>
                    <div>
                        <h4 className='text-sm font-bold text-red-400'>Birthday Party</h4>
                        <h2 className=' text-sm font-bold'>It typically involves gathering <br /> friends and family to mark the...</h2>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <p className='text-7xl'><FcBusinessman></FcBusinessman></p>
                    <div>
                        <h4 className='text-sm font-bold text-red-400'>Business Meetings</h4>
                        <h2 className='text-sm font-bold'>Business meetings are scheduled <br /> gatherings of individuals within an.</h2>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <p className='text-red-500 text-7xl font-bold'><BiSolidParty></BiSolidParty></p>
                    <div>
                        <h4 className='text-sm text-red-400'>Wedding Party</h4>
                        <h2 className='text-sm font-bold'>A wedding party, often referred to as a <br /> wedding reception, is a celebratory</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ads;