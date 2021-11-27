import { useState } from 'react';

import Logo from '../../components/Utils/Logo';
import HamburgerButton from './HamburgerButton';
import NavList from './NavList';
import Overlay from '../../components/Utils/Overlay';

export default function Navbar() {
  const [showNavList, setShowNavList] = useState(false);

  function toggleMenuLinks() {
    setShowNavList(!showNavList);
  }
  console.log("Navbar Loaded");
  return (
    <>
      { showNavList && <Overlay/>}
      <nav className="nav-container">
        <div className="nav-top">
          <Logo />
          <div className="nav--mobile">
            <HamburgerButton handleClick={toggleMenuLinks}/>
          </div>
        </div>
        <NavList display={showNavList}/>
      </nav>
    </>
    );
}