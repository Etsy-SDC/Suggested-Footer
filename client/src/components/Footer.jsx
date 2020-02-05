import React from "react";
import ReactDOM from "react-dom";

function Footer(props) {
  return (
    <footer className="footer">
      <div class="prepended-background-shape wt-body-max-width">
        <span class="inline-svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="wt-fill-denim wt-width-full"
            viewBox="0 0 1280 30"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M1280 30h-27.4c-.4-.2-.9-.1-1.5-.3-1.8.5-2.9-.1-4.6-.2-1.7.1-3.3.3-5 .3-7.2.1-14-.5-21-.6-.6 0-1.1-.1-1.7-.2-4.8-.5-9.6-.5-14.2 0-1.7.2-3.5.4-5.1.3-3.1-.2-6.3 0-9.4 0-4.4 0-8.6-.3-12.9-.2-4.8.1-9-.8-13.8-.5-.2 0-.7-.1-.9-.1-1.5-.3-3.1-.3-5-.2-1.1.1-2.2.1-3.5 0-3.1 0-3.1 0-6.4.4-2-.1-3.9-.4-5.7-.4-2.6 0-2.9-.6-4.6-.8h-.5c-2.4.1-3.9-.2-5.5-.6-1.7-.4-3.7-.6-6.1-.3-.7.1-1.8 0-2.8 0-3.7-.3-7.5-.5-11.2-.8-6.1-.6-11.9-1.1-18-1.7-2.8-.3-5.3-.6-6.8-1.1-2.4.1-4.6.2-6.8.4-2.8-.3-5.5-.7-7-1.4-.4-.2-1.8-.4-2.4-.5-4 .1-7.7.3-11.4.4-.5-.1-1.1-.3-1.8-.4-1.3-.1-2.6-.4-3.7-.3-3.7.2-7 0-10.5-.1-3.7-.1-6.6-.4-9.6-.9-2-.4-4.4-.8-7.5-.4-1.7.2-3.9.1-5.7.2-2.2.1-4.4 0-6.3-.2-1.8-.3-3.5-.4-5.7-.3-2.6.1-4.8 0-6.8-.3-2-.2-4-.4-6.1-.5-1.8-.1-4.2-.1-5.3-.6-1.3-.5-3.3-.6-5.1-.6-2.9 0-5.3-.2-7.5-.6-1.8-.3-3.7-.5-6.1-.4-1.3 0-2.9 0-3.9-.2-2-.4-4.2-.4-6.8-.5-1.8-.8-4.6-1.2-8.6-1-3.3-.4-7.4-.2-10.1-.9-.9-.3-2.9-.3-4.4 0-2.2.3-4.6.3-6.8 0-2.6-.4-5.1-.3-7.7-.1-5.5.5-11 .9-17.1 1-.9 0-1.8.1-2.8.3-2.8.4-5.3.6-8.5.4-2-.1-4.2 0-6.6-.1-2.4.4-4.6.9-8.1.9-.7 0-1.5.1-2 .2-3.3.6-6.8.7-10.5.4-7-.4-14.2-.7-21.3-.9-1.3 0-2.6-.2-3.9-.3-4 .8-8.6.8-13.4.6-3.3-.1-6.6-.5-10.3-.5-1.5 0-3.5-.2-4.6-.6-.6-.2-1.3-.3-2.6-.2h-2.2c-5.3-.8-12-1.1-15.8-2.4-6.1-.2-12-.4-17.6-.6-4.8-.2-9.6-.3-14.3.2-1.1.1-2.8.1-4 0-1.3-.1-2.2-.1-3.3 0-2.8.3-5.3 0-7.5-.4-1.5.2-2.6.4-3.9.6-1.5.1-2.9.3-4.4.3-4.2-.1-8.6-.1-12.9 0-1.5 0-2.8-.1-3.7-.4-2-.6-4.8-.6-7.5-.7-4-.1-8.1-.2-12-.4-2.6-.5-4-1.2-7.7-1.4-2.8.4-5.7.3-8.8.1-1.8-.1-3.3-.3-4.8-.6-1.3-.2-2.6-.6-4-.6-2.8-.1-5.3-.3-6.8-.9-.2.3-.9.2-1.5.2-3.5-.3-7.4-.2-10.8-.6-.9-.2-2.6.1-3.9.1-.7 0-1.5 0-2.2-.1-1.5-.1-2.9-.2-4.6-.3-4.4-.2-8.5-.7-12.1-1.4-.9-.2-2-.4-3.1-.4-2 0-3.7-.3-5.3-.6-2.6-.4-5.1-.8-8.1-1.1-3.9-.4-7.5-.9-12.3-.7-3.1.1-6.4-.6-7-1.3-.4-.7-2-1.1-3.7-1.6-2.4 0-4.6-.1-6.6-.1-3.7 0-7.4-.2-11 .1-3.7.3-7.5.5-11.6.1-1.7-.1-3.5 0-5.5 0-1.5.7-3.5 1.1-6.6 1.1-2.8 0-4.4.4-6.1.8-.9.2-1.7.4-2.6.6-3.3-.3-4.2-.3-8.6 0-.7 0-1.5.1-2.2.1s-1.5.1-2 .2c-2.2.4-4 .8-7 .9-.6 0-1.3.2-1.7.4-.9.3-1.7.6-2.6.8-3.5-.2-6.4 0-9.7.2-5 .2-10.1.2-15.3.3-5 0-10.1 0-14.9-.4-.4 0-.7-.1-1.1-.1-3.7-.1-7.4-.4-10.8.2-.7.1-1.8.1-2.8.2-3.5.3-6.8.4-10.1-.1-4-.6-8.5-.1-12.7 0-.7 0-1.5.2-1.8.3-1.3.5-3.3.5-5.3.5h-3.3c-2.4 1.1-3.5 1.4-8.3 2.2-1.5.2-3.1.4-4.8.6-2.4.3-5 .3-7.5.2-3.1-.1-6.3-.2-9.2-.4-1.3 0-2.8-.1-3.9-.3-2.6-.5-4.8-.6-7.5-.1-1.2.3-3.4.3-3.6.6-.9.6-3.1.7-4.8.9-3.5.6-7.2.9-9.6 1.8-1.3.5-3.3.8-5.1 1.1-2 .4-4 .8-6.3.9-3.3.2-6.1.6-7.7 1.2-1.3 0-2.4 0-3.3.1-1.1.1-2 .3-3.1.4-.9.1-2 0-2.8 0-.9.1-1.5.5-2.4.6-1.7.2-3.5.4-5.3.6-4.2.3-8.6.3-12.5.7-4.8.5-9.4.7-14.3.4h-1.8c-5.1-.3-10.5-.2-15.3-.8-3.1-.5-6.8-.6-10.8-.5-3.3.1-6.6-.1-9.7-.5-1.7-.2-3.5-.5-5.3-.6-2.2-.1-4-.2-5.7-.7-.6-.2-1.8-.3-2.6-.2-3.3.1-6.1-.2-9-.5-2.8-.2-5.1-.5-6.6-1-2.6-.9-6.4-1-10.7-.8-2.6.2-5 .5-6.1 1-.7.4-2.2.6-3.5.8-1.1.2-2.8.3-3.5.5-1.5.4-3.3.5-5 .7-4.2.6-9 .7-13.6.8-7.2.2-14.5.5-21.5-.3-1.7-.2-3.5-.2-5.3.1 0 .7-1.8 1-3.9 1.4-2 .4-3.9.8-6.1 1-3.7.6-6.8 1.3-11 1.8-5.3.6-10.7 1.1-16 1.7-3.9.4-7.5.7-11 1.2-1.3.2-2.9.3-4.4.4-2.6.2-5.7.2-7.9.6-3.3.6-6.6.7-10.5.7-2.4 0-5 .3-7.4.4-3.1.8-7.5.9-11.2 1.5-2.6.4-5.1.4-7.9.2-3.7-.2-7.4-.3-11 0-.9.1-2 .1-2.9 0-4.8-.3-9-.1-12.5.8-.4.1-.9.1-1.5.2-4 .6-9 .7-12.9 1.3-2.4-.1-4.2 0-5.3.6-.2.1-1.5.1-2.2.2-1.1 0-2.6 0-3.5.1l-7.2.3H0"></path>
          </svg>
        </span>
      </div>
      <div className="nav">
        <div className="nav-section">
          <h4>Shop</h4>
          <ul>
            <li>
              <a href="#">Gift cards</a>
            </li>
            <li>
              <a href="#">Etsy blog</a>
            </li>
          </ul>
        </div>
        <div className="nav-section">
          <h4>Sell</h4>
          <ul>
            <li>
              <a href="#">Sell on Etsy</a>
            </li>
            <li>
              <a href="#">Teams</a>
            </li>
            <li>
              <a href="#">Forums</a>
            </li>
            <li>
              <a href="#">Affiliates</a>
            </li>
          </ul>
        </div>
        <div className="nav-section">
          <h4>About</h4>
          <ul>
            <li>
              <a href="#">Etsy, Inc.</a>
            </li>
            <li>
              <a href="#">Policies</a>
            </li>
            <li>
              <a href="#">Investors</a>
            </li>
            <li>
              <a href="#">Carrers</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
            <li>
              <a href="#">Impact</a>
            </li>
          </ul>
        </div>
        <div className="nav-section">
          <h4>Help</h4>
          <ul>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Privacy settings</a>
            </li>
          </ul>
          <div className="download">
            <span>Download the Etsy App</span>
          </div>
          <div className="icons">
            {/* <img src='https://i.dlpng.com/static/png/5242502-instagram-icon-white-png-175206-free-icons-library-instagram-white-png-653_653_preview.png' alt=""/> */}
            <img
              src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/facebook-icon-18-256.png"
              alt=""
              id="facebook-icon"
            />
            <img
              src="https://lh3.googleusercontent.com/proxy/ptk97Yc5W2EdgOkVvgyN4fqcABq0bH-RXGK6BBHxe9S4WnbfHaYh1I_c-grMEDDaJJlJ64b8xGgEI_BjmyADyQl327UjhlnYnCnGxWihOM2Vb_8WhIn_kg=s0-d"
              alt=""
            />
            <img
              src="https://www.southerntioga.org/wp-content/uploads/2017/09/twitter-white-clear2-circle.png"
              alt=""
            />
            <img
              src="https://i0.wp.com/www.mtctutorials.com/wp-content/uploads/2019/04/youtube-flag-png-icon-logo-free.png?resize=316%2C223&ssl=1"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="bottom">
        <div>
          <div>
            <div className="span-container">
              <img
                className="flag"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png"
                alt=""
              />
              <span className="footer-span">United States</span>
              <span className="footer-span">|</span>
              <span className="footer-span">English(US)</span>
              <span className="footer-span">|</span>
              <span className="footer-span">$(USD)</span>
            </div>
          </div>
          <div className="right-side span-container">
            <span className="copy-span">&copy; 2020 Etsy, Inc.</span>
            <a href="">
              <span className="right-span">Terms of Use</span>
            </a>
            <a href="">
              <span className="right-span">Privacy</span>
            </a>
            <a href="">
              <span className="right-span">Interest - based ads</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
