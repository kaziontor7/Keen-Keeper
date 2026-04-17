import React, { useState } from 'react';
import FriendCard from './FriendCard';
import { RiseLoader } from 'react-spinners';

const AllFriends = ({friends}) => {
    const friendTotal = friends.map(friend=>friend)
    const [loading,setLoading]= useState(true);
    setTimeout(()=>{
      setLoading(false)
    },2400)
    return (
        <div className=''>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 border-b border-[#E9E9E9] pb-10'>
             <div className='space-y-2 bg-white rounded-lg shadow p-6'>
                <p className='dark-green md:text-3xl text-2xl text-center font-semibold'>{friendTotal.length}</p>
                <p className='text-lg gray text-center'>Total Friends</p>
             </div>
             <div className='space-y-2 bg-white rounded-lg shadow  p-6'>
                <p className='dark-green md:text-3xl text-2xl text-center font-semibold'>3</p>
                <p className='text-lg gray text-center'>On Track</p>
             </div>
             <div className='space-y-2 bg-white rounded-lg shadow p-6'>
                <p className='dark-green md:text-3xl text-2xl text-center font-semibold'>5</p>
                <p className='text-lg gray text-center'>Need Attention</p>
             </div>
             <div className='space-y-2 bg-white rounded-lg shadow p-6'>
                <p className='dark-green md:text-3xl text-2xl text-center font-semibold'>12</p>
                <p className='text-lg gray text-center'>Interactions This Month</p>
             </div>
           
            </div>
            <p className='font-semibold black text-2xl pt-10 pb-4'>Your Friends</p>
            {
               loading? <div className='text-center py-20'><RiseLoader color='#244D3F' /></div>  : <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6 pb-20'>
                {friends.map((friend,index) => <FriendCard friend={friend} key={index}></FriendCard>)}
             </div>
            }
              
        </div>
    );
};

export default AllFriends;