import React from 'react'

type SectionHeaderProps = {
  children: React.ReactNode
}

export const SectionHeading: React.FC<SectionHeaderProps> = ({ children }) => {
  return (
    <h2 className='text-3xl font-medium capitalize mb-8 text-center' >
      {children}
    </h2>
  )
}