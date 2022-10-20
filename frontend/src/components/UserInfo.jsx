import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EditProfileModal from './EditProfileModal';
import { faFileImage, faImage, faPen } from '@fortawesome/free-solid-svg-icons';
import EditProfileImageModal from './EditProfileImageModal';
const UserInfo = () => {
    const [showModal, setShow] = useState(false);
    const [showModalProfileImage, setShowModalProfileImage] = useState(false);
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
        <div className="h-screen ml-24 bg-white w-3/5 rounded p-5 border border-solid">
            <div className='w-100 relative'>
                <img className="rounded min-w-full max-h-48" src={process.env.PUBLIC_URL + "images/default.svg"} alt="cover" />
                <img className='absolute bottom-0 left-0 w-36 h-36 my-1 border-4 border-white rounded-full z-2 ml-5' alt="profile" src={user.image}/>
                <button className="absolute bottom-0 left-0 w-36 h-36" onClick={() => setShowModalProfileImage(true)} ><FontAwesomeIcon icon={faImage} /></button>
            </div>

            <div className='flex justify-between'>
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
                <div>
                    <button className='place-self-end' onClick={() => setShow(true)}><FontAwesomeIcon icon={faPen} /></button>
                </div>
                <EditProfileModal onClose={() => setShow(false)} show={showModal} />
                <EditProfileImageModal onClose={() => setShowModalProfileImage(false)} show={showModalProfileImage} />
            </div>
        </div>

    )
}

export default UserInfo
