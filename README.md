# Product Explorer Assignment

A React + Vite application built as part of the Product Explorer Assignment, which displays products from a public API (https://dummyjson.com).
The app allows users to browse, sort, filter, and view product details in an interactive, responsive interface using Tailwind CSS and Framer Motion.

# Features
# Core Functionality

Fetch products from DummyJSON API (https://dummyjson.com/products)

Pagination using limit and skip query parameters

Filter products by category

Sort products by:

Price: Low → High / High → Low

Title: A → Z / Z → A

Product detail modal showing product information (image, price, rating, etc.)

Loading skeleton and error message handling

# UI & Styling

Built with Tailwind CSS

Fully responsive design (mobile, tablet, desktop)

Smooth animations using Framer Motion

Modern layout with a sticky header and clean product grid

# Tech Stack
Layer	Technology
Frontend Framework	React (with Vite)
Styling	Tailwind CSS
Animations	Framer Motion
API	DummyJSON (https://dummyjson.com)

# Concepts Implemented

React hooks: useState, useEffect, useMemo

Reusable components (Filters, Sorter, Pagination, ProductCard)

Dynamic API queries with limit, skip, and category parameters

Conditional rendering for loading/error states

Animated modal transitions (AnimatePresence + motion.div)

Client-side sorting and filtering logic


# Installation & Setup

- Clone the Repository
git clone https://github.com/amantoor17/product-explorer-assignment
cd product-explorer-assignment

- Install Dependencies
npm install

- Run Development Server
npm run dev

# API Reference

Base URL → https://dummyjson.com

Fetch Products
GET /products?limit=12&skip=0

Fetch Categories
GET /products/categories

Fetch Products by Category
GET /products/category/{category}?limit=12&skip=0

Fetch Single Product
GET /products/{id}