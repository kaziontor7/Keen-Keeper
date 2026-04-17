import React, { useState } from 'react';
import { StoredFriendContext } from './context';
import { toast } from 'react-toastify';



const FriendContext = ({children}) => {
    const [calls,setCalls]=useState([]);
    const handleCalls = (name)=>{
        const newEntry = {
            name: name,
            time: new Date().toLocaleString(),
            type: 'Call'
        }
        toast.success(`Called ${name}.`)
       setCalls([...calls,newEntry])
    }
    const handleTexts = (name)=>{
        const newEntry = {
            name: name,
            time: new Date().toLocaleString(),
            type: 'Message'
        }
        toast.success(`Texted ${name}.`)
       setCalls([...calls,newEntry])
    }
    const handleVideoCalls = (name)=>{
        const newEntry = {
            name: name,
            time: new Date().toLocaleString(),
            type: 'Video Call'
        }
        toast.success(`Video Called ${name}.`)
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