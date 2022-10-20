import React from 'react'
import UserInfo from '../UserInfo';
import FollowBox from '../FollowBox';
const CompanyProfile = () => {
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

export default CompanyProfile
