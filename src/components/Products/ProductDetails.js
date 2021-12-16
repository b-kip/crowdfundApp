/**
 * Displays product name, price, description and no. of available products
 * @param {product} product - product information
 * @param {number} price - price information used as minimum pledge amount
 * @callback handleClick - handle openning of pledgeForms. Receives hash for 
 * bookmarking the opened pledge form.
 */
export default function ProductDetails({
  product, productQuantity, handleClick
}) {
  const {name, price, description, id} = product;
  return (
    <div 
      className={`product flow-content
      ${(productQuantity === 0 && ' unavailable')} `}
    >
      <div className="product__header">
        <h3 className="product__title">{name}</h3>
        <p className="product__subtitle">{`Pledge ${price} or more`}</p>
      </div>
      <p className="product__description">
        {description}
      </p>
      <div className="product__footer">
        <p><span className="product__quantity text-strong">{productQuantity}</span> left</p>
        <button 
          className={`btn btn-open-reward ${ !productQuantity && 'btn--dark'}`}
          onClick={() => handleClick(`#${id}`)}
        >
          { productQuantity ? 'Select Reward' : 'Out of Stock'}
        </button>
      </div>
    </div>
  )
}
