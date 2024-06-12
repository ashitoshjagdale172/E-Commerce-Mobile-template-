import React from 'react'

const RedBar = (props) => {
  return (
    <div>
        <div className='flex flex-col justify-center items-center' > 
            <div className='w-[23px] h-[79px] bg-[#ff0000] rounded-full'>

            </div>
            <div className='mt-[20px]'>{props.underText}</div>
        </div>
      
    </div>
  )
}

export default RedBar
