import React, { useState, useEffect } from 'react'
import axios from 'axios';
const UserInfo = () => {
    const [user, setUser] = useState([]);
    const id = localStorage.getItem('id');
    const getUser = async () => {
        try {
            await axios.get(`http://localhost:3001/user/getuser/${id}`,
                { headers: { 'authorization': `Bearer ${localStorage.getItem(`token`)}` } })
                .then(response => {
                    setUser(response.data.user)
                });
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getUser()
    }, [])
    return (
        <div className='flex flex-col'>
            <ul>
                <li className="boxes" key={user._id}>
                    <div className='box-white'>
                        <div>
                            <h1 className='text-3xl font-medium mb-3' >
                                {user.name}
                            </h1>
                            <p className='text-sm text-gray-600'>
                                {user.location}
                            </p>
                            <h2 className="text-sm mb-3">{user.education}</h2>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default UserInfo
