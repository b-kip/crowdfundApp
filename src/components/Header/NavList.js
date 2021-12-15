import { NavbarLinks } from "../../api/data";

export default function NavList({ display }) {
  return (
    <div className="nav nav--desktop" id="nav">
      <ul className={`nav__list ${display === true ? '': 'hidden' }`}>
        {NavbarLinks.map( link => (
          <li className="nav__list__item" key={link.name}>
            <a href={link.location}>{link.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}