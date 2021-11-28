export default function Modal({ children }){
  return (
    <section className="modal flow-content container hidden">
      { children }
    </section>
  );
}