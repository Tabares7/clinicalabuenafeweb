import React from 'react'

const Title = ({title, subtitle}) => {
  return (
    <>
    {subtitle ? 
    <div className='flex flex-col items-center justify-center'>
      <h3 className='text-md font-normal text-lightblue'>{subtitle}</h3>
      <h1 className='text-4xl font-bold text-darkblue'>{title}</h1>
    </div> : 
    <div className='flex flex-col '>
      <h1 className='text-3xl font-bold text-darkblue'>{title}</h1>
    </div>}
    
    </>

  )
}

export default Title;
