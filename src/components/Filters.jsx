import React from 'react'

const Filters = ({categories = [], active, onSelect}) => {

    const normalized = categories.map((cat, index) => {
        if(typeof cat === "string"){
            return{
                key: cat, 
                label: cat.replace(/-/g, " "),
            }
        }

        if(typeof cat === "object" && cat.name){
            return {
                key: cat.slug || cat.name,
                label: (cat.name || " ").replace(/-/g, " "),
            }
        }

        return {
            key: `cat-${index}`,
            label: `Category${index+1}`,
        }
    });

  return (
    <div className='flex flex-wrap gap-2 mt-5 mb-10'>
      {normalized.map((cat) => (
        <button
            key={cat.key}
            onClick={() => onSelect(cat.key)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition ${
                active === cat.key 
                ? "bg-blue-600 text-white" 
                : "bg-gray-200 hover:bg-gray-300 text-gray-700"
            }`}
        >
            {cat.label}
        </button>
      ))}
    </div>
  )
}

export default Filters
