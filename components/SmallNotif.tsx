import React from 'react'
interface Props{
    notifText:string,
    notifTime:string,
    
}
const SmallNotif = ({notifText,notifTime}:Props) => {
  return (
    <div className='h-12 p-2 w-full rounded-lg bg-[#efefef] flex flex-row items-center justify-between'>
       <p className='text-purple-950 font-semibold text-sm'>{notifText}</p>
       <p className='text-gray-400 text-sm'>{notifTime}</p>
    </div>
  )
}

export default SmallNotif