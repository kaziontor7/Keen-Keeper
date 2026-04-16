import React from 'react';
import { IoCall } from 'react-icons/io5';
import { IoIosVideocam } from 'react-icons/io';
import { RiMessage3Fill } from 'react-icons/ri';

const TimelineCard = ({calls}) => {
    return (
        <div>
            {
            calls.map((call,i)=><div className='flex items-center gap-4 p-4 bg-white shadow rounded-lg my-6' key={i}>
                <div>
                    {
                        call.type === 'Call' && <div><IoCall className='text-4xl' /></div>
                    }
                    {
                        call.type === 'Video Call' && <div><IoIosVideocam className='text-4xl' /></div>
                    }
                    {
                        call.type === 'Message' && <div><RiMessage3Fill className='text-4xl' /></div>
                    }
                </div>
                <div>
                 <p className='text-lg gray'><span className='font-medium text-xl dark-green'>{call.type}</span> with {call.name}</p>
                 <p className='font-medium gray'>{call.time}</p>
                </div>
            </div>)
           }
        </div>
    );
};

export default TimelineCard;