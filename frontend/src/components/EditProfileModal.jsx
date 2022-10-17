import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { edit } from '../hooks/edit';
const EditProfileModal = (props) => {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [education, setEducation] = useState('');
    const [experience, setExperience] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        let id = localStorage.getItem('id'); 
        const user = {
            id: id,
            name: name,
            location: location,
            education: education,
            experience: experience
        }
        await edit(user);

        setName("");
        setEducation("");
        setExperience("");
        setLocation("");
    }
    if (!props.show) {
        return null
    }
    return (
        <div className="modal" >
            <div className="modal_content p-5" onClick={e => e.stopPropagation}>
                <div className="modal_header">
                    <h1 className='text-2xl font-medium mb-3'>Edit Intro <FontAwesomeIcon icon={faPen} /></h1>
                    <button onClick={props.onClose} className="text-xl">X</button>
                </div>
                <form className="space-y-3 mt-2" onSubmit={ onSubmit }>
                    <label className='text-gray-800'>Name</label>
                    <input type="text" className="w-full h-10 border border-gray-800 rounded px-3" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                    <label className='text-gray-800'>Location</label>
                    <input type="text" className="w-full h-10 border border-gray-800 rounded px-3" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)}/>
                    <label className='text-gray-800'>Education</label>
                    <input type="text" className="w-full h-10 border border-gray-800 rounded px-3" placeholder="Education" value={education} onChange={(e) => setEducation(e.target.value)}/>
                    <label className='text-gray-800'>Experience</label>
                    <input type="text" className="w-full h-10 border border-gray-800 rounded px-3" placeholder="Experience" value={experience} onChange={(e) => setExperience(e.target.value)}/>
                    <button className="mt-1 text-center rounded-full w-40 bg-blue text-white py-3 font-medium">Save</button>
                </form>
            </div>
        </div>
    )
}

export default EditProfileModal
