import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { editImage } from '../hooks/editImage';
const EditProfileImageModal = (props) => {

  const [imagebase64, setImagebase64] = useState({ myImage: "" });
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(imagebase64)
    let id = localStorage.getItem('id');
    const user = {
      id: id,
      imagebase64: imagebase64
    }

    await editImage(user);
  }
  const toBase64 = (image) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(image);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const handleUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await toBase64(file);
    setImagebase64({ ...imagebase64, myImage: base64 });
  };

  if (!props.show) {
    return null
  }
  return (
    <div className="modal" >
      <div className="modal_content p-5" onClick={e => e.stopPropagation}>
        <div className="modal_header">
          <h1 className='text-2xl font-medium mb-3'>Edit Image <FontAwesomeIcon icon={faPen} /></h1>
          <button onClick={props.onClose} className="text-xl">X</button>
        </div>
        <form className="space-y-3 mt-2" onSubmit={onSubmit}>
          <div >
            <input type="file" id="file-input" accept="image/png, image/*" onChange={(e) => handleUpload(e)} />
          </div>
          <button className="mt-1 text-center rounded-full w-40 bg-blue text-white py-3 font-medium">Save</button>
        </form>
      </div>
    </div>
  )
}

export default EditProfileImageModal
