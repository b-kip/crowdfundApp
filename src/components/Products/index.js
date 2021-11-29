import { products } from '../../data';
import ProductDetails from './ProductDetails';

export default function Products({ openPledges }) {
  return (
    <div className="products flow-content" id="products">
      {
        products.slice(1, products.length).map(product => (
          <ProductDetails product={product} handleClick={openPledges} key={product.name}/>
        ))
      }
    </div>
  )
}
