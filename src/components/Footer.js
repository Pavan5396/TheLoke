import React from "react";

function Footer() {
  return (
    <div className="mainFooter">
      <section className="footer">
        <section className="contact">
          <ul>
            <li className="phoneNo">(+1) 000 123 456</li>
            <li>
              <img src="/img/pin.png" alt="" width="" /> 736 NW. Street
              Morrisville, PA 19067
            </li>
            <li>
              <img src="/img/mail.png" alt="" width="" /> theloke@support.com
            </li>
            <ul className="social">
              <li>
                <a href="#">
                  <img src="img/social/fb.png" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="img/social/twitter.png" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="img/social/instagram.png" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="img/social/dribble.png" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="img/social/linkedin.png" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="img/social/pinterest.png" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="img/social/tumblr.png" alt="" />
                </a>
              </li>
            </ul>
          </ul>
        </section>
        <section className="terms">
          <ul>
            <li>Terms Of Use</li>
            <li>Privacy & Policy</li>
            <li>Return Policy</li>
            <li>Shipping</li>
          </ul>
        </section>
        <section className="account">
          <ul>
            <li>Account </li>
            <li>Wishlist</li>
            <li>Shopping Cart</li>
            <li>Track My Order</li>
          </ul>
        </section>
        <section className="newsLetter">
          <ul>
            <li>Subscribe Newsletter</li>
            <li>Let’s stay updated on the latest news and offers.</li>
            <li>
              <form>
                <label>
                  <input type="text" placeholder="Enter your email" />
                  <input type="button" value="SUBSCRIBE" className="button" />
                </label>
              </form>
            </li>
          </ul>
        </section>
      </section>
      <section className="copyright">
        © 2019 TheLoke Main. All Rights Reserved.
      </section>
    </div>
  );
}

export default Footer;
