import { useState } from "react";
import "./App.css";
import Products from "./components/Products";
import { products as initialProducts } from "./mocks/products.json";

function App() {
  const [products] = useState(initialProducts);
  
  return (
    <>
      <Products products={products} />
    </>
  );
}

export default App;
