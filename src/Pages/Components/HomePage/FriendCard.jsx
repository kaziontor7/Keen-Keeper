import React from 'react';

const FriendCard = ({friend}) => {
    return (
        <div className='p-6 text-center  shadow rounded-lg'>
            <img className='w-20 h-20 rounded-full mx-auto mb-3' src={friend.picture} alt={friend.name} />
            <div className='space-y-2'>
            <h2 className='black text-xl font-semibold'>{friend.name}</h2>
            <p className='gray text-[12px]'>{friend.days_since_contact}d ago</p>
            <div className='flex gap-2 mx-auto items-center justify-center'>
            {friend.tags.map((tag,index)=><p key={index} className='text-[12px] green-bg dark-green py-1.5 px-2 rounded-[100px] font-medium'>{tag.toUpperCase()}</p>)}
            </div>
            <p className={`text-white rounded-[100px] text-[12px] font-medium w-fit mx-auto py-1.5 px-2 ${friend.status==='Overdue'? 'red-bg': ''} ${friend.status==='Almost Due'? 'yellow-bg': ''} ${friend.status==='On-Track'? 'bg-dark-green': ''}`}>{friend.status}</p>
            </div>
            
        </div>
    );
};

export default FriendCard;