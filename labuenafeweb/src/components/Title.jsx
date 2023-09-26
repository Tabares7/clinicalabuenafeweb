import React from 'react'

const Title = ({title, subtitle}) => {
  return (
    <div className=' flex flex-col'>
    <h3 className='text-sm font-normal text-lightblue'>{subtitle}</h3>
    <h1 className='text-3xl font-bold text-darkblue'>{title}</h1>
    </div>
  )
}

export default Title