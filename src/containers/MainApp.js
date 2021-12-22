import { useState, useEffect } from 'react';

import Intro from './Intro';
import Stats from '../components/Stats';
import About from '../components/About';
import Products from '../components/Products';
import Pledges from './Pledges';
import SuccessMessageModal from '../components/SuccessMessageModal';

import getAsyncData from '../api/getAsyncData';
/**
 * Main component that handles:
 * 1. pledge submission,
 * 2. updating pledges,
 * 3. decrementing product once they've been pledge on
 * 4. and controls rendering of components rendered inside modals.
 */
let scrollPositionTop = 0;
export default function MainApp() {
  const [isLoading, setIsLoading] = useState(true);
  const [showPledges, setShowPledges] = useState(false); // controls toggling of pledge form.
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); //
  // of overlay and Pledges modal.

  // pledges [{productId, amount}]
  const [pledges, setPledges] = useState([]);
  // product [{productId, name, price, desription}]
  const [products,  setProducts] = useState([]);
  // productInventory {productId{ quantity}}
  const [productInventory, setProductInventory] = useState({});
  // The targeted amount of pledges for this campaign
  const [pledgeTarget, setPledgeTarget] = useState(0);


  // DERIVED STATE
  // total pledges
  const totalPledges = pledges.reduce((amount, pledge) => {
    return pledge.amount + amount
  }, 0);

  // total backers
  const totalBackers = pledges.length;

  useEffect(() => {
    getAsyncData()
    .then( result => {
      const { 
        products, productInventory, pledges, pledgeTarget
      } = result.data;
      console.log(result.data);
      setPledges(pledges);
      setProducts(products);
      setProductInventory(productInventory);
      setPledgeTarget(pledgeTarget);
      setIsLoading(false);
    });
  }, [setPledges, setProducts, setProductInventory]);

  // useEffect(() => {
  //   if( showPledges)
  // }, []);

  // closes both pledges modal and overlay.
  function closePledges() {
    window.scroll(0, scrollPositionTop);
    window.history.back();
    setShowPledges(false);
  }

  // open both the pledges Modal and overlay.
  // hash format "#{hashinfo}"
  function openPledges(hash) {
    // get current scroll position.
    scrollPositionTop =window.scrollY;
    setShowPledges(true);
    window.location.hash = hash;
  }

  // closeses pledges forms and open success message
  function openSuccessMessage() {
    // let prevScrollPosTop = scrollPositionTop
    // cheat closePledges to maintain position.
    // scrollPositionTop = window.scrollY;
    closePledges();
    setShowSuccessMessage(true);
    // window.scroll(0, 0);
    // scrollPositionTop = prevScrollPosTop;
  }

  // close success message modal.
  // Clicking the overlay doesn't close the success message
  // this handle is not passed to the overlay.
  function closeSuccessMessage() {
    setShowSuccessMessage(false);
    // reset scroll position.
    // window.scroll(0,scrollPositionTop);
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

  // console.log(isLoading);
  return (
    <>
      {!isLoading && (<main className="flow-content">
        
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
      </main>)}

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
          <SuccessMessageModal
            closeSuccessMessage={closeSuccessMessage}
          />
        )
      }
    </>
  );
}