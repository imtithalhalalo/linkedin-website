import React, { useEffect, useState } from 'react'
import FollowButton from './FollowButton'
import axios from 'axios';
const FollowBox = () => {
    const [companies, setCompanies] = useState([]);

    const getCompanies = async () => {
        try {
            await axios.get(`http://localhost:3001/companies/companies`,
                { headers: { 'authorization': `Bearer ${localStorage.getItem(`token`)}` } })
                .then(response => {
                    setCompanies(response.data.company)
                });
        } catch (err) {
            console.error(err.message);
        }
    };
    
    useEffect(() => {
        getCompanies()
    }, [])
    return (
        <div className='flex flex-col w-72 mr-12 h-100 bg-white border rounded p-5'>
            <h1 className='text-gray-900 text-md font-semibold'>Add to your feed</h1>
            {companies.map((company, index) => (
                <div className='flex flex-col mt-2 justify-center' key={index}>
                    <h1 className='text-gray-600'>{company.name}</h1>
                    <FollowButton key={index} company_id={company._id}   />
                </div>
            ))}
        </div>
    )
}

export default FollowBox
