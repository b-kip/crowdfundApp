import { useRef } from 'react';

/**
 * Display a form for pledge entry.
 * @param {string} name - assigned to input's name property.
 * @param {number} price - price of the product as the minimum amount to pledge.
 * @callback onAmountSubmission - handle submission of the amount pledge by the user.
 */
export default function PledgeForm({ name, price, onAmountSubmission }) {
  const inputRef = useRef();
  price = price === 0 ? 200 : price;

  function handleSubmit(e) {
    e.preventDefault();
    // console.log("Pledged:", inputRef.current.value);
    // console.log(typeof inputRef.current.value);
    onAmountSubmission(Number(inputRef.current.value));
  }

  return (
    <div className="pledge">
      <p className="pledge__title">Enter your pledge</p>
      <form className="pledge__form" onSubmit={handleSubmit}>
        <span className="pledge__amount">
          <input 
            className="pledge__amount__input" 
            type="number" 
            name={name} 
            defaultValue={price}
            ref={inputRef}
            required 
            min={price} // can't pledge an amount less than product's price.
          />
        </span>
        <button type="submit" className="btn btn-submit-reward">
          Continue
        </button>
      </form>
    </div>
  )
}
