import React, { use } from 'react';
import Banner from './Components/HomePage/Banner';

const friendsPromise = fetch('/friends.json').then(res=>res.json())
const HomePage = () => {
    const friends = use(friendsPromise)
    return (
        <div>
            <Banner friends={friends}></Banner>
        </div>
    );
};

export default HomePage;