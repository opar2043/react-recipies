import React from 'react'

const Total = ({time , calori}) => {
  return (
    <div className='px-6'>
        <div className="flex gap-2 px-2 justify-between items-center text-sm font-semibold py-3 rounded-md border-b-2 shadow">
        <p className='font-bold text-slate-900'>Total Time: {time} min</p>
        <p className='font-bold text-slate-900'>Total Calori: {calori} calori</p>
             
    </div>
    </div>
  )
}

export default Total