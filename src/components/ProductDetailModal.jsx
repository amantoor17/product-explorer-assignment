import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react'

const ProductDetailModal = ({id, onClose}) => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

  return (
    <AnimatePresence>
        {id && (
            <motion.div
                key="backdrop"
                className="fixed inset-0 bg-black/40 flex items-center justify-center z-40"
                initial={{opacity:0}}
                animate={{opacity:1}}
                exit={{opacity:0}}
                onClick={onClose}
            >
                <motion.div
                    className="bg-white rounded-lg max-w-4xl w-full mx-4 p-6 relative"
                    opacity={{y:30, opacity:0}}
                    animate={{y:0, opacity:1}}
                    exit={{y:30, opacity:0}}
                    onClick={(e) => e.stopPropagation()}
                >
                    <button onClick={onClose} className='absolute top-4 right-4 text-gray-600'>X</button>
                    {loading && <div>Loading...</div>}
                    {error && <div className='text-red-500'>{error}</div>}
                    {product && (
                        <div className='grid md:grid-cols-2 gap-6'>
                            <div>
                                <img src={product.images?.[0]} alt={product.title} className='w-full h-96 object-cover rounded' />
                                <div className='mt-2 flex space-x-2 overflow-x-auto'>
                                    {product.images?.map((img, idx) => (
                                        <img key={idx} src={img} alt={`${product.title}-${idx}`} className='h-14 w-20 object-cover rounded' />
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h2 className='text-2xl font-bold' >{product.title}</h2>
                                <p className='text-gray-600 mt-2'>{product.description}</p>
                                <div className='mt-4'>
                                    <div><strong>Price:</strong> ₹{product.price}</div>
                                    <div><strong>Rating:</strong> {product.rating}</div>
                                    <div><strong>Stock:</strong> {product.stock}</div>
                                    <div><strong>Brand:</strong> {product.brand}</div>
                                    <div><strong>Category:</strong> {product.category}</div>
                                </div>
                                <div className='mt-6'>
                                    <button className='px-4 py-2 bg-blue-600 text-white rounded'>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    )}
                </motion.div>
            </motion.div>
        )}
    </AnimatePresence>
  )
}

export default ProductDetailModal
