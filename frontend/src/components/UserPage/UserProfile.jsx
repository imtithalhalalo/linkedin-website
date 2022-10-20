import React from 'react'
import FollowBox from '../FollowBox';
import UserInfo from '../UserInfo';
const UserProfile = () => {
  return (
    <>
      <div className='bg-grey'>
        <div className='pt-12'>
          <div className='flex justify-between'>
            <UserInfo />
            <FollowBox />
          </div>
        </div>
      </div>
    </>
  )
}

export default UserProfile
