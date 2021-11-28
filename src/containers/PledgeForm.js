export default function PledgeForm({ productDetails }) {
  return (
    <div className="product selected">
      <label className="product__selection">
        {/* <!-- <input type="checkbox" id="no-reward"> --> */}
        <input type="radio" id="no-reward" name="pledge" checked value="no-reward" />
        <span aria-label="Checkbox"></span>
      </label>
      
      <div className="product__header">
        <label htmlFor="no-reward" className="product__title">Pledge with no reward</label>
      </div>
      <p className="product__description">
        Choose to support us without a reward if you simply believe in our project. As a backer,
        you will be signed up to receive product updates via email.
      </p>
      {/* <!-- Selected pledge  start --> */}
      <div className="pledge">
        <p className="pledge__title">Enter your pledge</p>
        <form className="pledge__form">
          <span className="pledge__amount">
            <input type="text" className="pledge__amount__input" name="no-reward" value="200"></input>
          </span>
          <button  type="submit"  className="btn btn-submit-reward">Continue</button>
        </form>
      </div>
      {/* <!-- Selected pledge end --> */}
    </div>
  )
}
