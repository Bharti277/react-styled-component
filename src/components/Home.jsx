import React from "react";
import ProductsCard from "./ProductsCard";
import productsData from "../data/productsData";

const Home = () => {
  return (
    <div>
      <section id="home">
        <div className="container">
          <div className="home_content">
            {productsData.map((product) => (
              <ProductsCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
