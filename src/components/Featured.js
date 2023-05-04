import React from 'react'

function Featured() {
  return (
    <>
    <section className="featured">
      <section className="ladiesWatch">
        <h4>Bold Chronograph Rose <br />Dial Ladies Watch</h4>
        <h5>$ 450.00</h5>
        <a href="#">
          <span><img src="img/play.png" alt="" width="12px" /></span> SHOP
          NOW</a
        >
        <img src="img/products/ladies_watch.png" alt="" width="" />
      </section>
      <section className="featuredRight">
        <section className="smartWatch">
          <h4>
            Red Motion Stainless <br />
            Steel Smart Watch
          </h4>
          <h5>$ 99.99</h5>
          <a href="#">
            <span><img src="img/playWhite.png" alt="" width="12px" /></span>
            SHOP NOW</a
          >
          <img src="img/products/smart_watch.png" alt="" width="" />
        </section>
        <section className="featuredRightBottom">
          <section className="bag">
            <h4>$ 29.90</h4>
            <h5>$ 29.90</h5>
            <h6>Leather Shoulder bag</h6>
            <img src="img/products/bag.png" alt="" width="" />
          </section>
          <section className="shoe">
            <h4>$ 390.00</h4>
            <h5>$ 199.00</h5>
            <h6>Adidas Red Sneaker</h6>
            <img src="img/products/shoe.png" alt="" width="" />
          </section>
        </section>
      </section>
    </section>
    </>
  )
}

export default Featured
