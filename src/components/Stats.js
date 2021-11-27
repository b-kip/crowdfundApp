export default function Stats() {
  return (
    <section className="stats container flow-content">
    {/* <!-- <div className="container"> --> */}
      <ul className="stats__list">
        <li className="stats__list__item"><span className="stats-highlight text-strong">$89,914</span> of $100,000 backed</li>
        <li className="stats__list__item"><span className="stats-highlight text-strong">5,007</span> total backers</li>
        <li className="stats__list__item"><span className="stats-highlight text-strong">56</span> days left</li>
      </ul>
      <div className="stats__bar">
      </div>
    {/* <!-- </div> --> */}
  </section>
  )
}
