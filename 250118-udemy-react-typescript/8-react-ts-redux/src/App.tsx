import "./App.css";
import Header from "./components/Header";
import Product from "./components/Product";
import Shop from "./components/Shop";
import { DUMMY_PRODUCTS } from "./dummy-products";

function App() {
  return (
    <>
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </>
  );
}

export default App;
