import React, { useContext, useState } from 'react';
import { StoredFriendContext } from '../Context/context';

import TimelineCard from './Components/TimeLine/TimelineCard';

const Timeline = () => {
    const [filtered,setFiltered] = useState('all')
    const {calls} = useContext(StoredFriendContext)
    const onlyCalls = [...calls.filter(call=> call.type === 'Call')]
    const onlyVideoCalls = [...calls.filter(call=> call.type === 'Video Call')]
    const onlyMessages = [...calls.filter(call=> call.type === 'Message')]
    let dateList = '';
    
    if(filtered==='date'){
        const filteredDate = [...calls].sort((a,b)=>new Date(b.time) - new Date(a.time));
         dateList= filteredDate;
    }
    
    if (calls.length === 0) {
        return (
            <div className='w-9/10 md:w-8/10 mx-auto my-20 text-center'>
                <div className='p-20 bg-gray-100 border-2 border-dashed border-gray-300 rounded-2xl'>
                    <p className='text-2xl font-semibold black'>
                        No history yet
                    </p>
                    <p className='text-gray-500 mt-2'>
                        You haven't made any calls or messages. Your activity timeline will appear here.
                    </p>
                </div>
            </div>
        );
    }
    return (
        <div className=''>
            <div className='w-9/10 md:w-8/10 mx-auto py-20'>
            <h1 className='font-bold text-5xl black'>Timeline</h1>
            <select defaultValue="Filter Timeline" className="select mt-6 gray text-base">
  <option disabled={true}>Filter Timeline</option>
  <option onClick={()=>setFiltered('all')} className='black'>All Activities</option>
  <option onClick={()=>setFiltered('call')} className='black'>Call</option>
  <option onClick={()=>setFiltered('video')} className='black'>Video Call</option>
  <option onClick={()=>setFiltered('message')} className='black'>Message</option>
  <option onClick={()=>setFiltered('date')} className='black'>Date</option>
</select>
           
           {
            filtered === 'all' && <TimelineCard calls={calls}></TimelineCard>
           }
           {
            filtered === 'call' && <TimelineCard calls={onlyCalls}></TimelineCard>
           }
           {
            filtered === 'video' && <TimelineCard calls={onlyVideoCalls}></TimelineCard>
           }
           {
            filtered === 'message' && <TimelineCard calls={onlyMessages}></TimelineCard>
           }
           {
            filtered === 'date' && <TimelineCard calls={dateList}></TimelineCard>
           }
            </div>
           
        </div>
    );
};

export default Timeline;