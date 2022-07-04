import { useEffect, useState } from "react";
import Filters from "./Filter";
import SingleProduct from "./SingleProduct";

const Home = () => {
  const [product, setproduct] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setproduct(json));
  }, []);

  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {product.length === 0 ? (
          <div> loading ...</div>
        ) : (
          product.map((prod) => <SingleProduct prod={prod} key={prod.id} />)
        )}
      </div>
    </div>
  );
};

export default Home;
