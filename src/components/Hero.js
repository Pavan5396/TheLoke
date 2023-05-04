import React from 'react'

function Hero() {
  return (
    <main className="main">
      <section className="heroBg">
        <div className="bgCircle"></div>
        <section className="hero">
          <img className="heroLeft" src="img/man.png" alt="" width="300px" />
          <section className="heroRight">
            <h3>Mens Accessories</h3>
            <h2>
              Always Be A <br />
              Gentlemen.
            </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad hic
              facere alias laboriosam explicabo sapiente a laborum
            </p>
            <a href="#">
              <span><img src="img/play.png" alt="" width="12px" /></span> SHOP
              NOW</a
            >
          </section>
        </section>
      </section>
    </main>
  )
}

export default Hero



