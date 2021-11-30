import { useState } from 'react';

import Overlay from '../components/Utils/Overlay';
import Modal from '../components/Utils/Modal';
import Intro from './Intro';
import Stats from '../components/Stats';
import About from '../layoutComponents/About';
import Products from '../components/Products';
import Pledges from './Pledges';

import { products as productsAvailable, productInventory as currentProductInventory, pledges as receivedPledges, pledgeTarget } from '../data';

/**
 * Main component that handles:
 * 1. pledge submission,
 * 2. updating pledges,
 * 3. decrementing product once they've been pledge on
 * 4. and controls rendering of components rendered inside modals.
 */
export default function MainApp() {
  const [showPledges, setShowPledges] = useState(false); // controls toggling
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); //
  // of overlay and Pledges modal.

  // pledges [{productId, amount}]
  const [pledges, setPledges] = useState(receivedPledges);
  // product [{productId, name, price, desription}]
  const [products,  setProducts] = useState(productsAvailable);
  // productInventory {productId{ quantity}}
  const [productInventory, setProductInventory] = useState(currentProductInventory);

  // DERIVED STATE
  // total pledges
  const totalPledges = pledges.reduce((amount, pledge) => {
    // console.log("Amount", amount);
    return pledge.amount + amount
  }, 0);
  // console.log(totalPledges);

  // total backers
  const totalBackers = pledges.length;

  // closes both pledges modal and overlay.
  function closePledges() {
    setShowPledges(false);
  }

  // open both the pledges Modal and overlay.
  function openPledges() {
    setShowPledges(true);
  }

  // closeses pledges forms and open success message
  function openSuccessMessage() {
    closePledges();
    setShowSuccessMessage(true);
  }

  // close success message modal.
  // Clicking the overlay doesn't close the success message
  // this handle is not passed to the overlay.
  function closeSuccessMessage() {
    setShowSuccessMessage(false);
  }

  // updating pledge: adding productId and amount. fetch from children.
  function addPledge(pledge) {
    setPledges([...pledges, pledge]);
  }
  // updating productInventory: decrement quantity by 1
  function subtractProductQuantity(productId) {
    // can't update quantity for no-reward pledge.
    if (productId === 'no-reward') {
      return;
    }
    
    // take current product.quantity
    let quantity = productInventory[productId].quantity - 1;
    setProductInventory({...productInventory, [productId]: { quantity } });
  }

  function handlePledgeSubmission(pledge) {
    addPledge(pledge);
    openSuccessMessage();
    subtractProductQuantity(pledge.productId);
  }

  return (
    <>
      <main className="flow-content">
        { (showPledges || showSuccessMessage) && <Overlay closeOverlay={closePledges}/>}
        <Intro
          openPledges={openPledges}
          />
        <Stats
          totalBackers={totalBackers}
          totalPledges={totalPledges}
          pledgeTarget={pledgeTarget}

        />
        <About>
          <Products
            products={products}
            productInventory={productInventory}
            openPledges={openPledges}
          />
        </About>
      </main>

      { 
        showPledges && (
          <Pledges
            products={products}
            productInventory={productInventory}
            closePledges={closePledges}
            onPledgeSubmission={handlePledgeSubmission}
          />
        )
      }

      {
        showSuccessMessage && (
        <Modal id="success-modal" classModifier=" modal--success">
          <h2 className="section__subtitle">Thanks for your support!</h2>
          <p>
            Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
            an email once our campaign is completed.
          </p>
          <button 
            className="btn" id="success-btn"
            onClick={closeSuccessMessage}
          >Got it!</button>
        </Modal>
        )
      }
    </>
  );
}