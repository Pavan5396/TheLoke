import React from "react";
import SingleProduct from "./Single_product";

let items = [
  {
    name: "Brown Leather Bags",
    price: "$10.00-$100",
    img: "/img/trending/leatherBag1.jpeg",
    rating: 5,
  },
  {
    name: "Brother Hoodies in Grey",
    price: "$35.00",
    img: "/img/trending/greyTshirt1.jpeg",
    rating: 4,
  },
  {
    name: "MVTH Leather watch – BouleVard Edit",
    price: "$219.00",
    img: "/img/trending/whiteWatch1.jpeg",
    rating: 3,
  },
  {
    name: "Enjoy The Rest T-Shirt",
    price: "$123.00-$632.00",
    img: "/img/trending/whiteTshirt1.jpeg",
    rating: 5,
  },
  {
    name: "DELAWARE Messenger Bags",
    price: "$39.59",
    img: "/img/trending/messengerBag1.jpeg",
    rating: 5,
  },
  {
    name: "MVMTH Leather Watch in Black Face",
    price: "$59.90",
    img: "/img/trending/blackWatch1.jpeg",
    rating: 4,
  },
  {
    name: "Classic Sandal",
    price: "$200",
    img: "/img/trending/slipper1.jpeg",
    rating: 5,
  },
  {
    name: "Blue N Poker T-shirts",
    price: "$99",
    img: "/img/trending/redTshirt1.jpeg",
    rating: 5,
  },
];

let itemList = items.map((item, index) => {
  return (
    <SingleProduct
      key={index}
      name={item.name}
      price={item.price}
      img={item.img}
      rating={item.rating}
    />
  );
});

function product() {
  return (
    <section>
      <section className="trendingHeading">Trending Product</section>
      <section className="category">
        <p>Our most trending products based on sales. Update hourly.</p>
        <ul className="categoryList">
          <li>All</li>
          <li>Clothing</li>
          <li>Watch</li>
          <li>Shoe</li>
          <li>Bag</li>
        </ul>
      </section>
      <section className="trendingProducts">{itemList}</section>
      <button className="loadMore">... LOAD MORE</button>
    </section>
  );
}

export default product;
