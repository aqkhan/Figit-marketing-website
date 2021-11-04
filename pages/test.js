import React from 'react'

const test = () => {
    return (
        <div className='flex items-start justify-between relative space-x-72'>
            <div className='w-1/2'>
            <div className='h-96 w-10 bg-gray-200'></div>
            <div className='h-96 w-full bg-pink-200'></div>
            <div className='h-96 w-10 bg-yellow-200'></div>
            <div className='h-96 w-10 bg-blue-200'></div>
            </div>
            <div className='fixed top-0 right-0 w-1/2'>
                <div className='text-black text-xl'>testb heading</div>
            </div>
        </div>
    )
}

export default test 
