import React, { useState } from 'react'
import { apply } from '../hooks/apply';
const ApplyModal = (props) => {
    const [email, setEmail] = useState('');
    const [phonenum, setPhoneNum] = useState('');
    const onSubmit = async (e) => {
        e.preventDefault();
        
        const applicant = {
            user: props.user_id,
            job: props.job_id,
            email: email,
            phonenum: phonenum
        }
        await apply(applicant);
        console.log(props.user_id, props.job_id)
        setEmail("");
        setPhoneNum("");
    }
    if (!props.show) {
        return null
    }
    return (
        <div className="modal" >
            <div className="modal_content p-5" onClick={e => e.stopPropagation}>
                <div className="modal_header">
                    <h1 className='text-2xl font-medium mb-3'>Easy Apply</h1>
                    <button onClick={props.onClose} className="text-xl">X</button>
                </div>
                <form className="space-y-3 mt-2" onSubmit={onSubmit}>
                    <label className='text-gray-800'>Email</label>
                    <input type="text" className="w-full h-10 border border-gray-800 rounded px-3" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label className='text-gray-800'>Phone Number</label>
                    <input type="text" className="w-full h-10 border border-gray-800 rounded px-3" placeholder="Phone Number" value={phonenum} onChange={(e) => setPhoneNum(e.target.value)} />
                    <button className="mt-1 text-center rounded-full w-40 bg-blue text-white py-3 font-medium">Apply</button>
                </form>
            </div>
        </div>
    )
}

export default ApplyModal
