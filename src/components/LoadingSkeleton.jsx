import React from 'react'

const LoadingSkeleton = ({ count = 8 }) => {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="p-4 bg-white rounded-lg shadow-md border border-gray-100">
            <div className="w-full h-40 bg-gray-300 rounded-md mb-3 animate-pulse"></div>
            <div className="h-4 w-3/4 bg-gray-300 rounded mb-2 animate-pulse"></div>
            <div className="h-4 w-1/3 bg-gray-300 rounded animate-pulse"></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LoadingSkeleton
