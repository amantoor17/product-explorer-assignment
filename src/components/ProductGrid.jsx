import React from 'react'
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.06,
        },
    },
};

const ProductGrid = ({products =[], onOpen}) => {

    if(!Array.isArray(products) || products.length === 0) {
        return (
            <div className='text-center text-gray-500 mt-10'>
                No Products available.
            </div>
        );
    }

  return (
    <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
        gap-5 p-4 sm:p-6 md:p-8 lg:p-10 bg-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300'
    >
      {products.map((p) => (
        <motion.div
            key={p.id}
            className='flex justify-center'
            variants={{
                hidden: {opacity:0, y:20},
                show: {opacity:1, y:0},
            }}
        >
            <ProductCard product={p} onOpen={onOpen} />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default ProductGrid
