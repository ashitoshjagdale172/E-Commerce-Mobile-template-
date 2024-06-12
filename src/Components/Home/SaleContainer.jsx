import React from 'react'

const SaleContainer = (props) => {
  return (
    <div>
        <div className='w-[280px] h-[280px] rounded=[10px] mb-[25%] mx-[10%]'>
        <div className='w-[280px] h-[280px] bg-[#edf2f4] relative flex justify-center items-center '>
<div className=' w-[54px] h-[27px] rounded-[20px] bg-[#d9d9d9] flex justify-center items-center absolute text-[12px] z-2 mt-[-85%] ml-[-70%]'  > sale !</div>
<div className='flex justify-center items-center'><img src={props.images} alt="" className=' w-[150px] h-[150px]'  /></div>
        </div>
        <div className='text-[14px] flex justify-start'>
          {props.Text} <br />
          {props.Name}
        </div>
        </div>

    </div>
  )
}

export default SaleContainer
