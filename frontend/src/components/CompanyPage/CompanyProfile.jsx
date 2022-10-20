import React from 'react'
import UserInfo from '../UserInfo';
import FollowBox from '../FollowBox';
const CompanyProfile = () => {
  return (
    <div className='bg-grey'>
    <div className='pt-12'>
      <div className='flex justify-between'>
        <div className="h-screen ml-24 bg-white w-3/5 rounded p-5 border border-solid">
          <div className='w-100 relative'>
            <img className="rounded min-w-full max-h-48" src={process.env.PUBLIC_URL + "images/default.svg"} alt="cover" />
            <img className="absolute bottom-0 left-0 w-36 h-36 my-1 border-4 border-white rounded-full z-2 ml-5" src={process.env.PUBLIC_URL + "images/default.svg"} alt="cover" />
          </div>
            <UserInfo />
        </div>
        <FollowBox />
      </div>
    </div>
  </div>
  )
}

export default CompanyProfile
