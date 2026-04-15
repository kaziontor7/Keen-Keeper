import React, { use } from 'react';
import Banner from './Components/HomePage/Banner';
import AllFriends from './Components/HomePage/AllFriends';

const friendsPromise = fetch('/friends.json').then(res=>res.json())
const HomePage = () => {
    const friends = use(friendsPromise)
    return (
        <div className='bg-[#F8FAFC]'>
        <div className=' w-9/10 md:w-8/10  mx-auto'>
            <Banner></Banner>
            <AllFriends friends={friends}></AllFriends>
        </div>
        </div>
    );
};

export default HomePage;