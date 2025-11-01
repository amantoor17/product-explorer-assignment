import { useEffect, useState, useMemo } from "react";
import {fetchProducts, fetchCategories, fetchProductsByCategory} from "../api/products";
import Header from "../components/Header";
import ProductGrid from "../components/ProductGrid";
import LoadingSkeleton from "../components/LoadingSkeleton";
import ErrorMessage from "../components/ErrorMessage";
import Filters from "../components/Filters";
import Pagination from "../components/Pagination";
import ProductDetailModal from "../components/ProductDetailModal";

const Home = () => {

    const PAGE_SIZE = 12;
    const [productsData, setProductsData] = useState({products: [], total: 0});
    const [categories, setCategories] = useState([]);
    const [page, setPage] = useState(0);
    const [activeCategory, setActiveCategory] = useState(null);
    const [sort, setSort] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [selectedProductId, setSelectedProductId] = useState(null);

    // Fetch categories once
    useEffect(() => {
        fetchCategories()
        .then((cats) => setCategories(cats))
        .catch((err) => console.error("Failed to fetch categories", err));
    }, []);

    // Fetch products whenever page or category changes
    useEffect(() => {
        async function loadProducts() {
            setLoading(true);
            setError(null);

            try{
                const params = {limit: PAGE_SIZE, skip: page * PAGE_SIZE};
                const res = activeCategory
                ? await fetchProductsByCategory(activeCategory, params)
                : await fetchProducts(params);

                console.log("API Response: ", res);

                if(res && Array.isArray(res.products)) {
                    setProductsData({products: res.products, total: res.total || 0});
                } else if(Array.isArray(res)) {
                    setProductsData({products: res, total: res.length});
                } else {
                    setProductsData({products: [], total: 0});
                }
            } catch(err){
                console.error("Error fetching products: ", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        loadProducts();
    }, [page, activeCategory]);

    // Client-side sorting (price/title)
    const sortedProducts = useMemo(() => {
        const arr = [...(productsData.products || [])];
        if(!sort) return arr;
        if(sort === "price_asc") return arr.sort((a, b) => a.price - b.price);
        if(sort === "price_desc") return arr.sort((a, b) => b.price - a.price);
        if(sort === "title_asc") return arr.sort((a, b) => a.title.localeCompare(b.title));
        if(sort === "title_desc") return arr.sort((a, b) => b.title.localeCompare(a.title));
        return arr;
    }, [productsData.products, sort]);

    const totalPages = productsData.total ? Math.ceil(productsData.total / PAGE_SIZE) : null;

  return (
    <div>

      <Header sort={sort} onSortChange={(v) => setSort(v)}/>

      <div>
        <Filters 
            categories={categories}
            active={activeCategory}
            onSelect={(c) => {
                setActiveCategory(c);
                setPage(0);
            }}
        />

        {error && (
            <ErrorMessage
                message={error}
                onRetry={() => {
                    setPage(0);
                    setActiveCategory(null);
                }}
            />
        )}

        {loading ?  (
            <LoadingSkeleton count={PAGE_SIZE} />
        ) : (
            <>
                <ProductGrid 
                    products={sortedProducts}
                    onOpen={(id) => setSelectedProductId(id)}
                />
                <div className="mt-6 flex items-center justify-between">
                    <Pagination 
                        page={page}
                        totalPages={totalPages}
                        onChange={(p) => setPage(Math.max(0, p))}
                    />
                    <div className="text-sm text-gray-500">
                        {productsData.total ? `${productsData.total} items` : ""}
                    </div>
                </div>
            </>
        )}
      </div>

      <ProductDetailModal 
        id={selectedProductId}
        onClose={() => setSelectedProductId(null)}
      />
    </div>
  );
}

export default Home
