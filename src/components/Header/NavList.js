import { NavbarLinks } from "../../api/data";

export default function NavList({ display, handleClick }) {
  return (
    <div className="nav nav--desktop" id="nav">
      <ul className={`nav__list ${display === true ? '': 'hidden' }`}>
        {NavbarLinks.map( link => (
          <li className="nav__list__item" key={link.name}>
            <a 
              href={link.location}
              onClick={handleClick}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}