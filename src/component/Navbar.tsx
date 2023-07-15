import logo from '../assets/logo.svg'

export const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="Fylo Logo" />
      <div className="link-box">
        <a href="#features">Features</a>
        <a href="#">Team</a>
        <a href="#">Sing In</a>
      </div>
    </nav>
  )
}
