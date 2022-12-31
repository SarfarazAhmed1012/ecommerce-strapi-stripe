import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Featured products are typically best-selling, well-reviewed, or brand
          new products that are shown on the homepage of an eCommerce site.
          Check out some of your favorite online stores and it’s likely that
          you’ll find featured products on their websites.
          <br />
          <br /> Featured products are typically best-selling, well-reviewed, or
          brand new products that are shown on the homepage of an eCommerce
          site. To succeed in ecommerce, you need three things: high-demand
          products to sell, the skills to market them, and the drive to succeed.
          You already have the winner’s mindset—you’re continually learning,
          researching, and preparing for success.
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
