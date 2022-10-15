import React, { useState, useEffect } from 'react'
import EditProfileModal from '../EditProfileModal';

import axios from 'axios';
const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const id = localStorage.getItem('id');
    const getJobs = async () => {
        try {
            await axios.get(`http://localhost:3001/user/jobs`,
                { headers: { 'Authorization': `Bearer ${localStorage.getItem(`token`)}` } })
                .then(response => {
                    setJobs(response.data.job)
                });
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getJobs()
    }, [])
    return (

        <>
            <div className="bg-grey">
                <div className="flex flex-col justify-center items-center">
                    <div className="h-24 bg-blue w-2/4">
                        <h1 className="text-white text-4xl text-center pt-5"> Jobs </h1>
                    </div>
                    {jobs.map(job => (
                        <div className="bg-white h-48 w-2/4 border p-5">
                            <div className="flex flex-col">
                                <a className="text-lg text-blue-600">{job.title}</a>
                                <h6 className="text-md text-black">{job.company_name}</h6>
                                <h6 className="text-sm text-gray-500">{job.desc}</h6>
                            </div>
                            <button className="text-center rounded-full w-48 bg-blue text-white py-3 font-medium mt-5">Easy Apply </button>
                        </div>
                    ))}


                </div>
            </div>


        </>



    )
}

export default Jobs