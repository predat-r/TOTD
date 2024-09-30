import React from 'react'
import SmallNotif from './SmallNotif'

const NotifsDropdown = () => {
  return (
       <div className='h-52 min-h-40 overflow-y-scroll w-32 pt-3 pl-2 pr-2 pb-2  md:w-64 bg-[#AFAFFF] absolute right-6 top-28 rounded-md shadow-elevateLow flex flex-col  items-center gap-y-2 md:gap-y-4 z-10'>
         <SmallNotif notifText={'haris liked your thought'} notifTime={'1:52'}></SmallNotif>
         <SmallNotif notifText={'haris liked your thought'} notifTime={'1:52'}></SmallNotif>
         <SmallNotif notifText={'haris liked your thought'} notifTime={'1:52'}></SmallNotif>
         <SmallNotif notifText={'haris liked your thought'} notifTime={'1:52'}></SmallNotif>
         <SmallNotif notifText={'haris liked your thought'} notifTime={'1:52'}></SmallNotif>
       </div>
  ) 
}

export default NotifsDropdown