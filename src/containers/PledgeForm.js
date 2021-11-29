import { useRef } from 'react';

export default function PledgeForm({ name, price, openSuccessMessage }) {
  const inputRef = useRef();
  price = price === 0 ? 200 : price;

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Pledged:", inputRef.current.value);
    openSuccessMessage();
  }
  return (
    <div className="pledge">
      <p className="pledge__title">Enter your pledge</p>
      <form className="pledge__form" onSubmit={handleSubmit}>
        <span className="pledge__amount">
          <input 
            type="text" 
            className="pledge__amount__input" 
            name={name} 
            defaultValue={price}
            ref={inputRef}
          />
        </span>
        <button type="submit" className="btn btn-submit-reward">
          Continue
        </button>
      </form>
    </div>
  )
}
