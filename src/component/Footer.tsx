import logo from '../assets/logo.svg'
import location from '../assets/icon-location.svg'
import phone from '../assets/icon-phone.svg'
import email from '../assets/icon-email.svg'

export const Footer = () => {
  return (
    <footer>
      <img alt="logo" src={logo} className="logo" />

      <div className="info">
        <p className="location">
          <img src={location} alt="location icon" className="icon" />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>

      <div className="info text-14">
        <p>
          <img src={phone} alt="phone icon" className="icon" />
          +1-543-123-4567
        </p>
        <p>
          <img src={email} alt="email icon" className="icon" />
          example@fylo.com
        </p>
      </div>

      <ul className="link-container1">
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Jobs</a>
        </li>
        <li>
          <a href="#">Press</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
      </ul>

      <ul className="link-container2">
        <li>
          <a href="#">Contact Us</a>
        </li>
        <li>
          <a href="#">Terms</a>
        </li>
        <li>
          <a href="#">Privacy</a>
        </li>
      </ul>

      <div className="social">
        <a href="https://facebook.com" target="_blank">
          <span className="sr-only">Facebook</span>
          <i className="social__icon fa-brands fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com" target="_blank">
          <span className="sr-only">Twitter</span>
          <i className="social__icon fa-brands fa-twitter"></i>
        </a>
        <a href="https://instagram.com" target="_blank">
          <span className="sr-only">Instagram</span>
          <i className="social__icon fa-brands fa-instagram"></i>
        </a>
      </div>

      <p className="attribution">
        Challenge by{' '}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a
          href="https://www.frontendmentor.io/profile/Marchino5791"
          target="_blank"
        >
          Marco Antonio Paolino
        </a>
        .
      </p>
    </footer>
  )
}
