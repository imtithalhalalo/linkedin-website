import React, {useState} from 'react'
import axios from 'axios';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [purpose, setPurpose] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!title || !desc || !purpose) {
            alert("Fill All Fields");
            return;
        }

        const company_name = localStorage.getItem('name');
        const company_id = localStorage.getItem('id');
        setTitle("");
        setDesc("");
        setPurpose("");
        const data = {
            title: title,
            desc: desc,
            purpose: purpose,
            company_name: company_name,
            company_id: company_id
        }
        console.log(data)
        try {
            await axios.post("http://localhost:3001/companies", data,
                { headers: { 'Authorization': `Bearer ${localStorage.getItem(`token`)}` } }).then(response => {
                    alert(response.data.message)
                });

        } catch (err) {
            console.error(err.message);
        }

    };
    return (
        <>
            {/* <Menu/> */}
            <div className='bg-grey '>
                <div className='pt-12 '>
                    <div className="h-screen ml-24 bg-white w-3/5 rounded p-5 border border-solid">
                        <img className="w-36 h-36 my-1 border-4 bg-blue border-white rounded-full z-2" src={process.env.PUBLIC_URL + "images/linkedin-logo.png"} alt="cover" />
                        <form className="space-y-5 mt-5" onSubmit={onSubmit}>
                            <input type="text" className="w-full h-12 border border-gray-800 rounded px-3" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                            <textarea type="text" className="w-full h-24 border border-gray-800 rounded px-3" placeholder="Job Purpose" value={purpose} onChange={(e) => setPurpose(e.target.value)}/>
                            <textarea type="text" className="w-full h-36 border border-gray-800 rounded px-3" placeholder="Job Description" value={desc} onChange={(e) => setDesc(e.target.value)}/>
                            <button className="text-center w-64 bg-blue rounded-full text-white py-3 font-medium">Post Job</button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CreatePost
