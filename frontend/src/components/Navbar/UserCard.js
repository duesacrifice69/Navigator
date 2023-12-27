import React from 'react'
import { User, logo } from '../../assets';

const UserCard = ({name,onLogout}) => {
  return (
    <div> <div className='flex flex-col items-center'>
    <img src={User} className='object-cover mt-6 mb-1 border-2 border-gray-600 rounded-full w-28'></img>
    <span>{name}</span>
    
    <div className='w-full mt-3 border-t-2 border-gray-400 '>
      <ul className='flex flex-col'>
        <li className='w-full p-1 hover:bg-primary1 hover:text-white'>
          <span className='flex items-center justify-center'>Manage Account</span>
        </li>
        <li className='w-full p-1 hover:bg-primary1 hover:text-white cursor-pointer' onClick={onLogout}>
          <span className='flex items-center justify-center'>Log Out</span>
        </li>
      </ul>
    </div>
  </div></div>
  )
}

export default UserCard