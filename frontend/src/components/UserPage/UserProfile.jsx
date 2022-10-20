import React, { useState } from 'react'
import EditProfileModal from '../EditProfileModal';
import FollowBox from '../FollowBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import UserInfo from '../UserInfo';
const UserProfile = () => {
  const [showModal, setShow] = useState(false);
  return (
    <>
      <div className='bg-grey'>
        <div className='pt-12'>
          <div className='flex justify-between'>
            <div className="h-screen ml-24 bg-white w-3/5 rounded p-5 border border-solid">
              <div className='w-100 relative'>
                <img className="rounded min-w-full max-h-48" src={process.env.PUBLIC_URL + "images/default.svg"} alt="cover" />
                <img className="absolute bottom-0 left-0 w-36 h-36 my-1 border-4 border-white rounded-full z-2 ml-5" src={process.env.PUBLIC_URL + "images/default.svg"} alt="cover" />
              </div>

              <div className='flex justify-between'>
                <div>
                  <UserInfo />
                </div>
                <div>
                  <button className='place-self-end' onClick={() => setShow(true)}><FontAwesomeIcon icon={faPen} /></button>
                </div>
                <EditProfileModal onClose={() => setShow(false)} show={showModal} />
              </div>
            </div>

            <FollowBox />
          </div>



        </div>
      </div>

    </>



  )
}

export default UserProfile
