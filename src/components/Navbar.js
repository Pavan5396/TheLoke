import React from 'react'

function Navbar() {
  return (
    <>
    <nav className="navBar">
        <h1>TheLoke<span className="dot">.</span></h1>
        <section className="navRight">
          <ul className="navItems">
            <li>Home</li>
            <li>Shop</li>
            <li>Pages</li>
            <li>Blog</li>
            <li>About us</li>
            <li>Contact us</li>
          </ul>
          <section className="navIcon">
            <img src="img/social/account.png" alt="" />
            <img src="img/social/search.png" alt="" />
            <img src="img/social/fav.png" alt="" />
            <img src="img/social/bag.png" alt="" />
          </section>
        </section>
      </nav>
    </>
  )
}

export default Navbar
