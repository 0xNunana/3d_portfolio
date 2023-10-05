import React from 'react'


const SectionTitle = ({children}:{children:React.ReactNode}) => {
  return (
    <h2 className='text-3xl font-medium font-palanquin capitalize mb-8 text-center'>{children}</h2>
  )
}

export default SectionTitle