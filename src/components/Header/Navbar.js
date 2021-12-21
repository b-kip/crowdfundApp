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

  function closeNavbar() {
    setShowNavList(false);
  }
  console.log("Navbar Loaded");
  return (
    <>
      { showNavList && <Overlay closeOverlay={closeNavbar}/>}
      <nav className="nav-container">
        <div className="nav-top">
          <Logo />
          <div className="nav--mobile">
            <HamburgerButton
              handleClick={toggleMenuLinks} 
              isActive={showNavList}
            />
          </div>
        </div>
        <NavList display={showNavList} handleClick={closeNavbar}/>
      </nav>
    </>
    );
}