import React from 'react'

function Topbar() {
  return (
   <>
   <section className="topBar">
        <p>Welcome to TheLoke WordPress Theme</p>
        <section className="rightTopBar">
          <ul className="social">
            <li>
              <a href="#"><img src="img/social/fb.png" alt="" /></a>
            </li>
            <li>
              <a href="#"><img src="img/social/twitter.png" alt="" /></a>
            </li>
            <li>
              <a href="#"><img src="img/social/instagram.png" alt="" /></a>
            </li>
            <li>
              <a href="#"><img src="img/social/dribble.png" alt="" /></a>
            </li>
            <li>
              <a href="#"><img src="img/social/linkedin.png" alt="" /></a>
            </li>
            <li>
              <a href="#"><img src="img/social/pinterest.png" alt="" /></a>
            </li>
            <li>
              <a href="#"><img src="img/social/tumblr.png" alt="" /></a>
            </li>
          </ul>

          <div className="vertical"></div>

          <select id="lang">
            <option value="">ENG</option>
            <option value="">POR</option>
            <option value="">DUC</option>
          </select>

          <div className="vertical"></div>

          <select id="currency">
            <option value="">USD</option>
            <option value="">EURO</option>
            <option value="">RUPEES</option>
          </select>

          <div className="vertical"></div>

          <p>Track My Order</p>
          <div className="vertical"></div>
          <p>My Account</p>
        </section>
      </section>
      <hr />
   </>
   
  )
}

export default Topbar
