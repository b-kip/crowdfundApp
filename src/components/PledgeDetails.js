import PledgeForm from '../containers/PledgeForm';

/**
 * Displays product details that a backer pledges on and the pledge form to be filled.
 * @param {boolean} isSelected - Whether the product is selected or not.
 * @callback setAsActiveProductId - handle radio button selection and set product as the product to be pledged on.
 * @param {product} - contains product details.
 * @param {number} productQuantity - number of product available.
 * @callback handleAmountSubmission - receive an amount and create a pledge object for submission.
 * @returns - JSX
 */
export default function PledgeDetails({ 
  isSelected,
  setAsActiveProductId,
  product,
  productQuantity,
  handleAmountSubmission 
}) {
  const { id, name, price, description } = product;

  let detailsClass = 'product'; //default class with base styles.

  if ( isSelected ) {
    detailsClass += ' product--selected'; // modifier to active product
    // detailsClass += ' selected';
  }

  if (id !== 'no-reward') { 
    // no-reward is not tied to an item so can't ever run out!
    if ( productQuantity === 0) {
      // blur unavailable products to avoid form submission.
      detailsClass += ' unavailable';
    }
  }
  // couldn't do the above className concatenation inline since it involves evaluating a compound boolean expression since it resulted in adding 'false' to className string.

  function handleClick() {
    // console.log("Active Product", id);
    setAsActiveProductId(id);
  }
  
  return (
    <div className={detailsClass} id={id+'-form'}>
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
        { productQuantity !== 0 && (
          <p className="product__subtitle">
            {`Pledge $ ${ price} or more`}
          </p>
          )
        }
      </div>
      <p className="product__description">
        { description }
      </p>

      { 
        productQuantity !== 0 && (
          <p className="product__details">
            <span className="product__quantity text-strong">
              {productQuantity}
            </span> left
          </p>
        )
      }

      {
        isSelected === true && (
          <PledgeForm
            name={name}
            price={price}
            onAmountSubmission={handleAmountSubmission}
          />
        )
      }
      
    </div>
  )
}
