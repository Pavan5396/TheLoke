import React from "react";

function Single_product({ name, price, img, rating }) {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<img src={"/img/yellowStar.png"} alt="" width="15px" />);
  }
  for (let i = rating; i < 5; i++) {
    stars.push(<img src={"/img/greyStar.png"} alt="" width="15px" />);
  }
  return (
    <div className="trendingSection">
      <img src={img} alt="" width="300px" />
      <p>{name}</p>
      <h3>{price}</h3>
      <section>{stars}</section>
    </div>
  );
}

export default Single_product;
