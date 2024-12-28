import React from 'react'
import LatestJobCards from './LatestJobCards';
import { useSelector } from 'react-redux'; 


const LatestJobs = () => {
    const {allJobs} = useSelector(store=>store.job);
   
    return (
        <div className='max-w-7xl mx-auto my-24'>
            <h1 className='m-8 text-lg font-bold  sm:text-3xl'><span className='text-[#6A38C2]'>Latest & Top </span> Job Openings</h1>
            <div className='m-8 gap-3 grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3'>
                {
                    allJobs.length <= 0 ? <span>No Job Available</span> : allJobs?.slice(0,8).map((job) => <LatestJobCards key={job._id} job={job}/>)
                }
            </div>
        </div>
    )   
}

export default LatestJobs