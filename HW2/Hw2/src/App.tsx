import React, { useState } from 'react';

import ProductList from './components/ProductList.tsx';
import NavigationBar from './components/NavigationBar.tsx';
import Sidebar from './components/Sidebar.tsx';
import productData from './data/products.json';

import { Product } from './types/Product.ts';

import './App.css';

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [products] = useState<Product[]>(productData);

  const sidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app">
      <NavigationBar sidebar={sidebar} isSidebarOpen={isSidebarOpen}/>
      <div className="main-content">
        <Sidebar isOpen={isSidebarOpen} />
        <ProductList products={products} />
      </div>
    </div>
  );
};

export default App;