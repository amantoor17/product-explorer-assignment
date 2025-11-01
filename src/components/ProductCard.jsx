import React from 'react'
import { motion } from 'framer-motion'

const ProductCard = ({product, onOpen}) => {
  return (
    <motion.div
        initial={{opacity:0, y:10}}
        animate={{opacity:1, y:0}}
        whileHover={{scale: 1.02}}
        layout
        className='bg-white rounded-lg shadow p-3 cursor-pointer flex flex-col'
        onClick={() => onOpen(product.id)}
    >
    <div className='h-44 flex items-center justify-center overflow-hidden rounded'>
        <img src={product.thumbnail || product.images?.[0]} alt={product.title} className='object-cover w-full h-full'/>
    </div>
    <div className='mt-3 flex-1'>
        <h3 className='text-sm font-medium line-clamp-2'>{product.title}</h3>
        <div className='mt-2 flex items-center justify-between'>
            <span className='font-semibold'>₹{product.price}</span>
            <span className='text-sm text-gray-500'>{product.rating} ★</span>
        </div>
    </div>
    </motion.div>
  );
}

export default ProductCard
