export default function HamburgerButton({ isActive, handleClick }) {
  return (
    <button 
      className={`burger-button${isActive ? ' active' : ''}`}
      onClick={handleClick}>
      <div className="burger-menu" id="burger-menu">
        <span className="burger-menu__item burger-menu__item--top"></span>
        <span className="burger-menu__item burger-menu__item--middle"></span>
        <span className="burger-menu__item burger-menu__item--bottom"></span>
      </div>
    </button>
  );
}