export default function Overlay({ closeOverlay }){
  return (
  <div 
    className="overlay overlay--nav" id="nav-overlay"
    onClick={closeOverlay}
  ></div>
  );
};