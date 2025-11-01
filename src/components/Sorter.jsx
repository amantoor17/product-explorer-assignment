import React from 'react'

const Sorter = ({value, onChange}) => {
  return (
    <div>
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className='w-full sm:w-auto 
            border border-gray-300 rounded-lg
            px-4 py-2
            text-sm sm:text-base
            bg-white text-gray-700
            shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500
            transition duration-200 ease-in-out'
        >
            <option value="">Sort</option>
            <option value="price_asc">Price: Low → High</option>
            <option value="price_desc">Price: High → Low</option>
            <option value="title_asc">Title: A → Z</option>
            <option value="title_desc">Title: Z → A</option>
        </select>
    </div>
  );
}

export default Sorter
