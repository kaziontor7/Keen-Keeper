import React, { useState } from 'react';
import { StoredFriendContext } from './context';



const FriendContext = ({children}) => {
    const [calls,setCalls]=useState([]);
    const handleCalls = (name)=>{
        const newEntry = {
            name: name,
            time: new Date().toLocaleString(),
            type: 'Call'
        }
       setCalls([...calls,newEntry])
    }
    const handleTexts = (name)=>{
        const newEntry = {
            name: name,
            time: new Date().toLocaleString(),
            type: 'Message'
        }
       setCalls([...calls,newEntry])
    }
    const handleVideoCalls = (name)=>{
        const newEntry = {
            name: name,
            time: new Date().toLocaleString(),
            type: 'Video Call'
        }
       setCalls([...calls,newEntry])
    }
    
    const data={
        calls,
        handleCalls,
        handleTexts,
        handleVideoCalls,
        setCalls
    }
    return (
        <StoredFriendContext value={data}>{children}</StoredFriendContext>
    );
};

export default FriendContext;