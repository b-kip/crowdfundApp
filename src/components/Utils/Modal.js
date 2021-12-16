import Overlay from './Overlay';

/**
 * @param string containerClass - what type of content the modal contains.
 * @callback closeModal - handles closing of the modal and overlay.
 * @returns modal containing its children.
 */
export default function Modal({ containerClass, closeModal, children }){
  return (
    <>
      <Overlay closeOverlay={closeModal} />
      <section className={`modal flow-content container ${containerClass}`}>
        { children }
      </section>
    </>
  );
}