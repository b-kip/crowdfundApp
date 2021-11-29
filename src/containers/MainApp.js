import { useState } from 'react';

import Overlay from '../components/Utils/Overlay';
import Modal from '../components/Utils/Modal';
import Intro from './Intro';
import Stats from '../components/Stats';
import About from '../layoutComponents/About';
import Products from '../components/Products';
import Pledges from './Pledges';

export default function MainApp() {
  const [showPledges, setShowPledges] = useState(false); // controls toggling
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); //
  // of overlay and Pledges modal.

  // closes both pledges modal and overlay.
  function closePledges() {
    setShowPledges(false);
  }

  // open both the pledges Modal and overlay.
  function openPledges() {
    setShowPledges(true);
  }

  function openSuccessMessage() {
    setShowSuccessMessage(true);
    closePledges();
  }

  function closeSuccessMessage() {
    setShowSuccessMessage(false);
  }

  return (
    <>
      <main className="flow-content">
        { (showPledges || showSuccessMessage) && <Overlay closeOverlay={closePledges}/>}
        <Intro openPledges={openPledges}/>
        <Stats />
        <About>
          <Products openPledges={openPledges}/>
        </About>
      </main>
      { showPledges && <Pledges closePledges={closePledges} openSuccessMessage={openSuccessMessage}/>}
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