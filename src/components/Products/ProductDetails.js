export default function ProductDetails({
  product, handleClick
}) {
  return (
    <div 
      className={`product flow-content
      ${(product.quantity === 0 && ' unavailable')} `}
    >
      <div className="product__header">
        <h3 className="product__title">{product.name}</h3>
        <p className="product__subtitle">{`Pledge ${product.price} or more`}</p>
      </div>
      <p className="product__description">
        {product.description}
      </p>
      <div className="product__footer">
        <p><span className="product__quantity text-strong">{product.quantity}</span> left</p>
        <button 
          className={`btn btn-open-reward ${ !product.quantity && 'btn--dark'}`}
          onClick={handleClick}
        >
          { product.quantity ? 'Select Reward' : 'Out of Stock'}
        </button>
      </div>
    </div>
  )
}
