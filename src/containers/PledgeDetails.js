import PledgeForm from './PledgeForm';

export default function PledgeDetails({ isSelected, pledge, setAsActivePledge, openSuccessMessage }) {
  const { id, name, price, description, quantity } = pledge;

  let detailsClass = 'product';

  if ( isSelected ) {
    detailsClass += ' product--selected';
    // detailsClass += ' selected';
  }
  if (id !== 'no-reward') {
    if ( quantity === 0) {
      detailsClass += ' unavailable';
    }
  }

  function handleClick() {
    setAsActivePledge(id);
  }
  
  return (
    <div className={detailsClass}>
      <label className="product__selection">
        {/* <!-- <input type="checkbox" id="no-reward"> --> */}
        <input 
          type="radio" 
          id={id} 
          name="pledgeType" 
          checked={isSelected}
          value={id}
          onChange={handleClick}
        />
        <span aria-label="Checkbox"></span>
      </label>
      
      <div className="product__header">
        <label htmlFor={id} className="product__title">
          { name }
        </label>
        {  quantity !== 0 && (
          <p className="product__subtitle">
            {`Pledge $ ${ price} or more`}
          </p>
          )
        }
      </div>
      <p className="product__description">
        { description}
      </p>

      { 
        quantity !== 0 && (
          <p className="product__details">
            <span className="product__quantity text-strong">
              {quantity}
            </span> left
          </p>
        )
      }

      {/* <!-- Selected pledge  start --> */}
      {
        isSelected === true && (
          <PledgeForm
            name={name}
            price={price}
            openSuccessMessage={openSuccessMessage}
          />
        )
      }
      {/* <!-- Selected pledge end --> */}
    </div>
  )
}
