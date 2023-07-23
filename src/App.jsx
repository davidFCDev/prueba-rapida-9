import "./App.css";
import { useState } from "react";
import Products from "./components/Products";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { products as initialProducts } from "./mocks/products.json";
import { useFilters } from "./hooks/useFilters";
import { Cart } from "./components/Cart";

function App() {
  const [products] = useState(initialProducts);
  const { setFilters, filterProducts } = useFilters();

  const filteredProducts = filterProducts(products);

  return (
    <>
      <Cart />
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
      <Footer />
    </>
  );
}

export default App;
