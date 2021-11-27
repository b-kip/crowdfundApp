export default function Intro() {
  return (
    <section className="page-intro flow-content container">
      <h1 className="page-intro__title">Mastercraft Bamboo Monitor Riser</h1>
      <p className="page-intro__lead">A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
      <div className="call-to-action">
        <button className="call-to-action__main btn-open-reward btn">Back this project</button>
        <div className="call-to-action__bookmark">
          <svg className="icon"  viewBox="0 0 56 56"  xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#2F2F2F" cx="28" cy="28" r="28"/><path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z"/></g></svg>
          <span className="text">Bookmark</span>
        </div>
      </div>
    </section>
  );
}