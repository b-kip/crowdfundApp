import Progressbar from './Progressbar';

export default function Stats({ totalBackers, totalPledges, pledgeTarget }) {
  return (
    <section className="stats container flow-content">
      <ul className="stats__list">
        <li className="stats__list__item">
          <span className="stats-highlight text-strong">
            {`$${totalPledges.toLocaleString()}`}
          </span>
          {` of $${pledgeTarget.toLocaleString()} backed`}
          </li>
        <li className="stats__list__item">
          <span className="stats-highlight text-strong">
            {totalBackers.toLocaleString()}
            </span> total backers
        </li>
        <li className="stats__list__item"><span className="stats-highlight text-strong">56</span> days left</li>
      </ul>
      <Progressbar currentValue={totalPledges} maximumValue={pledgeTarget}/>
  </section>
  )
}
