import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CompanyJobs = () => {
    const [jobs, setJobs] = useState([]);
    const navigate = useNavigate();
    const getJobs = async () => {
        const company_id = localStorage.getItem('id');
        const data = {
            company_id: company_id
        }
        try {
            await axios.post(`http://localhost:3001/companies/jobs`, data,
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
                    {jobs.map((job, index) => (
                        <div className="bg-white h-52 w-2/4 border p-5" key={index}>
                            <div className="flex flex-col">
                                <a className="text-lg text-blue-600">{job.title}</a>
                                <h6 className="text-md text-black">{job.purpose}</h6>
                                <h6 className="text-sm text-gray-500">{job.desc}</h6>
                            </div>
                            <button className="text-center rounded-full w-48 bg-blue text-white py-3 font-medium mt-5"
                            onClick={() => {
                                navigate('/applicants'); localStorage.setItem('job_id', job._id); console.log(job._id);
                            }}>View Applicants</button>
                        </div>
                        
                    ))}
                </div>
            </div>


        </>



    )
}

export default CompanyJobs