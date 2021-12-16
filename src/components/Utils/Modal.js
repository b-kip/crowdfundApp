import Overlay from './Overlay';

export default function Modal({ classModifier, closeModal, children }){
  return (
    <>
      <Overlay closeOverlay={closeModal} />
      <section className={`modal flow-content container ${classModifier}`}>
        { children }
      </section>
    </>
  );
}