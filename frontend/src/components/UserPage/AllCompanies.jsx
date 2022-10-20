import axios from 'axios';
import React, { useEffect, useState } from 'react'
import FollowButton from '../FollowButton'

const AllCompanies = () => {
    const [companies, setCompanies] = useState([]);
    const [onFollow, setOnFollow] = useState(false);
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
    const handleClick = async (event) => {
        setOnFollow(event.target.value);
        const data = {
            follower: localStorage.getItem('id'),
            following: event.target.value
        }
        try {
            await axios.post(`http://localhost:3001/user/follow`, data,
                { headers: { 'authorization': `Bearer ${localStorage.getItem(`token`)}` } })
                .then(response => {
                    console.log(response.data.message)
                });
        } catch (err) {
            console.error(err.message);
        }
      }
    useEffect(() => {
        getCompanies()
    }, [])
    return (
        <>
            <div className='bg-grey '>
                <div className="flex flex-col justify-center items-center">
                    <div className="h-24 bg-blue w-2/4">
                        <h1 className="text-white text-4xl text-center pt-5"> All Companies </h1>
                    </div>
                    <div className="bg-white h-48 w-2/4 border p-5">
                        {companies.map((company, index) => (
                            <div className='flex flex-col mt-2 justify-center' key={index}>
                                <h1 className='text-gray-600'>{company.name}</h1>
                                <FollowButton key={index} value={company._id} onClick={handleClick} text={onFollow === company._id ? "Following" : "Follow"} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllCompanies
