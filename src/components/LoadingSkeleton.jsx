import React from 'react'

const LoadingSkeleton = ({count = 8}) => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4'>
      {Array.from({length: count}).map((_, i) => (
        <div key={i} className='p-4 bg-white rounded-lg shadow'>
            <div className='w-full h-40 skeleton rounded-md mb-3'></div>
            <div className='h-4 w-3/4 skeleton rounded mb-2'></div>
            <div className='h-4 w-1/3 skeleton rounded'></div>
        </div>
      ))}
    </div>
  )
}

export default LoadingSkeleton
