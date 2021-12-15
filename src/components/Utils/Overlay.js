export default function Overlay({ closeOverlay, children }){
  return (
  <div 
    className="overlay overlay--nav" id="nav-overlay"
    onClick={closeOverlay}
  >{children}</div>
  );
};