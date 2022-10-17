import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';

const Applicants = () => {
    const [applicants, setApplicants] = useState([]);
    const job_id = localStorage.getItem('job_id');
    const navigate = useNavigate();
    const data = {
        job_id: job_id
    }
    const getApplicants = async () => {
        try {
            await axios.post(`http://localhost:3001/companies/applicants`, data,
                { headers: { 'authorization': `Bearer ${localStorage.getItem(`token`)}` } })
                .then(response => {
                    setApplicants(response.data.applicant)
                });
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getApplicants()
    }, [])
    return (

        <>
            <div className="bg-grey">
                <div className="flex flex-col justify-center items-center">
                    <div className="h-24 bg-blue w-2/4">
                        <h1 className="text-white text-4xl text-center pt-5"> Applicants </h1>
                    </div>
                    {applicants.map((applicant, index) => (
                        <div className="bg-white h-48 w-2/4 border p-5" key={index}>
                            <div className="flex flex-col" key={index}>
                                <a className="text-lg text-blue-600">{applicant.user.name}</a>
                                <h6 className="text-md text-black">{applicant.email}</h6>
                                <h6 className="text-sm text-gray-500">{applicant.user.education}</h6>
                                <h6 className="text-sm text-gray-500">{applicant.user.location}</h6>
                            </div>
                            <Button onClick={() => {
                                navigate('/applicant');
                                localStorage.setItem('applicant_id', applicant.user._id)
                                console.log(applicant.user._id)
                                }} text={"Review Applicant"} />
                        </div>
                        
                    ))}
                    
                </div>
            </div>


        </>



    )
}

export default Applicants