import React, { useState, useEffect } from 'react'
import axios from 'axios';
import ApplyModal from '../ApplyModal';
import Button from '../Button';

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const id = localStorage.getItem('id');
    const [jobId, setJobID] = useState('');
    const [showModal, setShow] = useState(false);
    const getJobs = async () => {
        try {
            await axios.get(`http://localhost:3001/user/jobs`,
                { headers: { 'authorization': `Bearer ${localStorage.getItem(`token`)}` } })
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
                    {jobs.map((job, index) => (
                        <div className="bg-white h-48 w-2/4 border p-5" key={index}>
                            <div className="flex flex-col">
                                <a className="text-lg text-blue-600">{job.title}</a>
                                <h6 className="text-md text-black">{job.company_name}</h6>
                                <h6 className="text-sm text-gray-500">{job.desc}</h6>
                            </div>
                            <Button onClick={() => {setShow(true); setJobID(job._id); console.log(job._id)}} text={"Easy Apply"}/>
                        </div>
                        
                    ))}

                    <ApplyModal onClose={() => setShow(false)} show={showModal}  user_id={id} job_id={jobId}/>
                </div>
            </div>


        </>



    )
}

export default Jobs