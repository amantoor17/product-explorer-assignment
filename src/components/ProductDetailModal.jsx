import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { fetchProductById } from "../api/products";

const ProductDetailModal = ({ id, onClose }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    setError(null);

    fetchProductById(id)
      .then((data) => setProduct(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <AnimatePresence>
      {id && (
        <motion.div
          key="backdrop"
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-40 p-2 sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-lg w-full max-w-4xl mx-auto p-4 sm:p-6 relative max-h-[90vh] overflow-y-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-600 text-lg font-bold hover:text-gray-900"
            >
              ✕
            </button>

            {/*Loading and Error States */}
            {loading && <div className="text-center py-10 text-gray-500">Loading...</div>}
            {error && <div className="text-center text-red-500 py-10">{error}</div>}

            {/*Product Info */}
            {product && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              
                {/* Product Images */}
                <div>
                  <img
                    src={product.images?.[0]}
                    alt={product.title}
                    className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg"
                  />
                  <div className="mt-3 flex space-x-2 overflow-x-auto scrollbar-hide">
                    {product.images?.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`${product.title}-${idx}`}
                        className="h-16 w-20 object-cover rounded-lg border hover:scale-105 transition-transform duration-200"
                      />
                    ))}
                  </div>
                </div>

                {/* Product Details */}
                <div className="space-y-3">
                  <h2 className="text-xl sm:text-2xl font-bold">{product.title}</h2>
                  <p className="text-gray-600 text-sm sm:text-base">{product.description}</p>

                  <div className="mt-4 space-y-2 text-sm sm:text-base">
                    <div>
                      <strong>Price:</strong> ₹{product.price}
                    </div>
                    <div>
                      <strong>Rating:</strong> {product.rating}
                    </div>
                    <div>
                      <strong>Stock:</strong> {product.stock}
                    </div>
                    <div>
                      <strong>Brand:</strong> {product.brand}
                    </div>
                    <div>
                      <strong>Category:</strong> {product.category}
                    </div>
                  </div>

                  <button className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductDetailModal;
