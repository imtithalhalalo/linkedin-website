import React from 'react'
import JobsInfo from '../JobsInfo';

const JobsSearched = () => {
    
    const key = localStorage.getItem('key');
    
    return (
       <JobsInfo url={`http://localhost:3001/user/search/${key}`} type={"search"}/>
    )
}

export default JobsSearched
