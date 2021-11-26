import Logo from '../../assets/images/logo.svg';

export default function Header() {
  return (
    <header className="main-header">
        <div className="container">
          <div className="overlay overlay--nav  hidden" id="nav-overlay"></div>
          <div className="nav-container">
            <div className="nav-top">
              <a href="/" className="logo"><img src={Logo} alt="crowdfund logo" /></a>
              <nav className="nav--mobile">
                {/* <!-- Add mobile navigation --> */}
                <ul className="burger-menu" id="burger-menu">
                  <span className="burger-menu__item burger-menu__item--top"></span>
                  <span className="burger-menu__item burger-menu__item--middle"></span>
                  <span className="burger-menu__item burger-menu__item--bottom"></span>
                </ul>
              </nav>
            </div>
            <nav className="nav nav--desktop" id="nav">
              <ul className="nav__list">
                <li className="nav__list__item"><a href="#about">About</a></li>
                <li className="nav__list__item"><a href="#products">Discover</a></li>
                <li className="nav__list__item"><a href="#main-modal"> Get Started</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
  );
}