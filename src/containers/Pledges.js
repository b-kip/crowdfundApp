import { useState } from 'react';

import Modal from '../components/Utils/Modal';
import PledgeDetails from '../components/PledgeDetails';
import CloseButton from '../assets/images/icon-close-modal.svg';

/**
 * Displays a pledgeForm for each product.
 * @param {product[]} products - List of product info: product id, name, price and description. We pledge on products so each
// product is a pledge type.
 * @param {{productId: { quantity: number }}} productInventory - Quantity of each product available for pledging
  * @callback closePledges - closePledges modal after submitting pledge.
  * @callback onPledgeSubmission - receive an amount and create a pledge object for submission
 * @returns 
 */
export default function Pledges({ 
  products, productInventory, closePledges ,onPledgeSubmission, containerClass  
}) {
  // fetching active pledge id from url.
  const pledgeFromHash = window.location.hash.slice(1);
  console.log(pledgeFromHash, productInventory[pledgeFromHash]);

  const defaultActivePledgeId = productInventory[pledgeFromHash] ? pledgeFromHash : products[0].id;
  // keeps a reference of the currently selected pledge item to enable styling
  // and adding product
  const [activeProductId, setActiveProductId] = useState(defaultActivePledgeId);

  // creates a pledge and runs pledge submission functions.
  function handleAmountSubmission(amount) {
    const pledge = { productId: activeProductId, amount}
    onPledgeSubmission(pledge);
  }
  return (
    <Modal containerClass="pledges-container" classModifier={containerClass}>
      <header className="modal__header">
        <h2 className="section__subtitle">Back this project</h2>
        <button className="btn  btn--tight btn--clear"
          onClick={closePledges}
        >
          <img className="modal__close-icon" src={CloseButton} alt="Close Modal" />
        </button>
      </header>
      <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>

      <div className="pledges flow-content">
        {
          products.map(product => (
            <PledgeDetails
              key={product.id}
              isSelected={product.id === activeProductId}
              product={product}
              productQuantity={productInventory[product.id].quantity}
              setAsActiveProductId={setActiveProductId}
              handleAmountSubmission={handleAmountSubmission}
            />
          ))
        }
      </div>
    </Modal>
  );
}
