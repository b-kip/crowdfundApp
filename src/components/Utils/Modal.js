export default function Modal({ classModifier, children }){
  return (
    <section className={`modal flow-content container ${classModifier}`}>
      { children }
    </section>
  );
}