import React, { useContext } from 'react';
import { RxValue } from 'react-icons/rx';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { StoredFriendContext } from '../Context/context';
import { Link } from 'react-router';


const Stats = () => {
    const {calls} = useContext(StoredFriendContext)
        const onlyCalls = [...calls.filter(call=> call.type === 'Call')]
        const onlyVideoCalls = [...calls.filter(call=> call.type === 'Video Call')]
        const onlyMessages = [...calls.filter(call=> call.type === 'Message')]
       
        if (onlyVideoCalls.length===0 && calls.length === 0 && onlyMessages.length===0) {
        return (
            <div className='p-20'>
                <div className='p-12 bg-white rounded-lg border-2 border-dashed border-gray-100 text-center'>
                    <div className="w-32 h-32 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                         <div className="w-20 h-20 border-8 border-gray-100 border-t-transparent rounded-full opacity-40"></div>
                    </div>
                    
                    <h3 className='black font-bold text-2xl mb-2'>No Data to Visualize</h3>
                    <p className='gray max-w-xs mx-auto mb-6'>
                        Your interaction statistics will appear here once you start making calls or sending messages.
                    </p>
                    
                    <Link to={'/timeline'} className=" px-6 py-2 bg-[#244D3F] text-white rounded-md text-sm font-medium hover:opacity-90">
                        View Timeline
                    </Link>
                </div>
            </div>
        );
    }


    const data = [
        {name:'Call', value: onlyCalls.length , fill: '#244D3F'},
        {name:'Video', value: onlyVideoCalls.length , fill: '#37A163'},
        {name:'Text', value: onlyMessages.length , fill: '#7E35E1'}
    ];
    return (
        <div className='w:9/10 md:w-8/10 mx-auto  my-20'>
            <h1 className='font-bold text-5xl black pb-6'>Friends Analytics</h1>
            <div className='p-8 bg-white rounded-lg w-full'>
            <p className='dark-green font-medium text-xl pb-6'>By Interaction Type</p>
            <div className='mx-auto'>
            <PieChart style={{ width: '100%', maxWidth: '400px', maxHeight: '80vh', aspectRatio: 1, margin: 'auto' }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
     <Legend 
  iconType="circle" 
  iconSize={10} 
  verticalAlign="bottom" 
  wrapperStyle={{ paddingTop: '20px' }}
/>
      <Tooltip></Tooltip>
    </PieChart>
            </div>
            </div>
        </div>
    );
};

export default Stats;