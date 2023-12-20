import React from 'react'

export const Footer = () => {
  return (
    <footer className='mb-10 px-4 mt-4 text-center text-gray-500' >
      <small className='mb-2 block text-xs' >
        &copy; 2022 Whatever Company. All rights reserved.
      </small>
      <p className='text-xs' >
        <span className='font-semibold' >
          About this company:{' '}
        </span>
        Comapny info
      </p>
    </footer>
  )
}