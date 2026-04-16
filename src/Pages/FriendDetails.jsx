import React from 'react';
import { FiArchive, FiPhoneCall } from 'react-icons/fi';
import { LuMessageSquareText, LuVideo } from 'react-icons/lu';
import { RiDeleteBin6Line, RiNotificationSnoozeLine } from 'react-icons/ri';
import { useLoaderData, useParams } from 'react-router';

const FriendDetails = () => {
    const friends = useLoaderData();
    const {id} = useParams();
    const selectedFriend = friends.find(friend=> friend.id == id);
    const {name,picture,email,days_since_contact:contact,status,tags,bio,goal,next_due_date:due} = selectedFriend;
    return (
        <div className='bg-[#F8FAFC]'>
            <div className='w-9/10 md:8/10 mx-auto grid lg:grid-cols-3 grid-cols-1 gap-6 py-20'>

            <div className=''>
            <div className='shadow bg-white p-6 rounded-lg'>
                <img className='w-20 h-20 rounded-full mx-auto mb-3' src={picture} alt={name} />
            <div className='space-y-2'>
            <h2 className='black text-xl font-semibold text-center'>{name}</h2>
            <p className={`text-white rounded-[100px] text-[12px] font-medium w-fit mx-auto py-1.5 px-2 ${status==='Overdue'? 'red-bg': ''} ${status==='Almost Due'? 'yellow-bg': ''} ${status==='On-Track'? 'bg-dark-green': ''}`}>{status}</p>
            <div className='flex gap-2 mx-auto items-center justify-center'>
            {tags.map((tag,index)=><p key={index} className='text-[12px] green-bg dark-green py-1.5 px-2 rounded-[100px] font-medium'>{tag.toUpperCase()}</p>)}
            </div>
            <p className='font-medium gray text-center'><i>"{bio}"</i></p>
            <p className='text-sm gray text-center'>Email:{email}</p>
            </div>
            </div>
            <div className='space-y-2 py-4'>
                 <button className='btn  font-medium bg-white w-full'>{<RiNotificationSnoozeLine />} Snooze 2 Weeks</button>
                 <br />
            <button className='btn w-full font-medium bg-white'>{<FiArchive />} Archive</button>
            <br />
            <button className='btn w-full font-medium text-red-500 bg-white'>{<RiDeleteBin6Line />} Delete</button>
            </div>
            </div>
            <div className='lg:col-span-2 space-y-6'>
             <div className='grid lg:grid-cols-3 gap-4'>
             <div className='space-y-2 bg-white rounded-lg shadow p-6'>
                <p className='dark-green md:text-3xl text-2xl text-center font-semibold'>{contact}</p>
                <p className='text-lg gray text-center'>Days Since Contact</p>
             </div>
             <div className='space-y-2 bg-white rounded-lg shadow  p-6'>
                <p className='dark-green md:text-3xl text-2xl text-center font-semibold'>{goal}</p>
                <p className='text-lg gray text-center'>Goal (Days)</p>
             </div>
             <div className='space-y-2 bg-white rounded-lg shadow p-6'>
                <p className='dark-green md:text-3xl text-2xl text-center font-semibold'>{due}</p>
                <p className='text-lg gray text-center'>Next Due</p>
             </div>
            </div>
            <div className='shadow space-y-4 p-6 bg-white rounded-lg'>
                <div className='flex justify-between items-center'>
                    <p className='dark-green font-medium text-xl'>Relationship Goal</p>
                    <button className='btn rounded-sm'>Edit</button>
                </div>
                <p className='gray text-lg'>Connect every <span className='font-bold black'>{goal} days</span></p>
            </div>
            <div className='shadow space-y-4 p-6 bg-white rounded-lg'>
            <p className='dark-green font-medium text-xl'>Quick Check-In</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 '>
                <button className='max-sm:mx-auto btn flex flex-col h-full p-4 btn-wide text-lg items-center justify-center'><span className='text-3xl black font-bold'><FiPhoneCall /></span> Call
            </button>
                <button className='max-sm:mx-auto btn flex flex-col h-full p-4 btn-wide text-lg items-center justify-center'><span className='text-3xl black font-bold'><LuMessageSquareText />
</span> Text
            </button>
                <button className='max-sm:mx-auto btn flex flex-col h-full p-4 btn-wide text-lg items-center justify-center'><span className='text-3xl black font-bold'><LuVideo />
</span> Video
            </button>
            </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default FriendDetails;