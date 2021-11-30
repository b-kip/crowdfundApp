import ProductDetails from './ProductDetails';

/**
  * Displays available products backers can pledge on.
  * @param {product[]} products - List of product info: product id, name, price and description
  * @param {{productId: { quantity: number }}} productInventory - Quantity of each product available for pledging
  * @callback openPledges - open pledgeForms to enable user pledge on a product
*/ 
export default function Products({ products, productInventory, openPledges }) {
  return (
    <div className="products flow-content" id="products">
      {
        products.slice(1, products.length).map(product => (
          <ProductDetails 
            key={product.name}
            product={product}
            productQuantity={productInventory[product.id].quantity}
            handleClick={openPledges}
          />
          ))
      }
    </div>
  )
}
