import React from 'react'

const Pagination = ({page, totalPages, onChange}) => {
  return (
    <div className='flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 text-sm sm:text-base mt-6'>
      <button onClick={() => onChange(page-1)}
        disabled={page <= 0}
        className={`px-4 py-2 rounded-lg font-medium transition w-full sm:w-auto
        ${page <= 0 ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"}
        `}
      >
        Prev
      </button>

      <div className='text-gray-700 font-semibold text-center'>
        Page {page + 1}
        {totalPages ? `of ${totalPages}` : ""}
      </div>

      <button
      onClick={() => onChange(page + 1)}
      disabled={totalPages != null && page + 1 >= totalPages}
      className={`px-4 py-2 rounded-lg font-medium transition w-full sm:w-auto
      ${totalPages != null && page + 1 >= totalPages
      ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"}
      `}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
