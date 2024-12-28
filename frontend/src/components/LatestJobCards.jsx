import React from 'react'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

const LatestJobCards = ({job}) => {
    const navigate = useNavigate();
    return(

        <div onClick={()=> navigate(`/description/${job._id}`)} className='w-30 p-7 rounded-md shadow-xl  bg-white border border-slate-200 cursor-pointer my-5'>
            <div>
                <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
                <p className='text-sm text-gray-500'>India</p>
            </div>
            <div>
                <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
                <p className='text-sm text-gray-600'>{job?.description}</p>
            </div>
            <div className='w-25 flex items-center gap-2 mt-4 flex-wrap '>
                <Badge className={'text-blue-700  text-xs'} variant="ghost">{job?.position} Positions</Badge>
                <Badge className={'text-[#F83002] text-xs'} variant="ghost">{job?.jobType}</Badge>
                <Badge className={'text-[#7209b7] text-xs'} variant="ghost">{job?.salary}LPA</Badge>
            </div>
        </div>
    )
}

export default LatestJobCards