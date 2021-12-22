import { useState } from 'react';
import ConfirmPledge from '../components/ConfirmPledge';
import PledgeFormContainer from './PledgeFormContainer';

/**
 * Handles pledge information and pledge submission. 
 * ACTIONS: Conditionally displays a pledgeFormContainer Modal and pledge confirmation Modal.
 * ACTIONS: Closing pledges modal to return to MainApp.
  * @callback closePledges - closePledges modal after submitting pledge.
  * @callback onPledgeSubmission - receive an amount and create a pledge object for submission
 * @returns 
 */
export default function Pledges({
  closePledges ,onPledgeSubmission,  
}) {

  const [pledge, setPledge] = useState({ productId: null, amount: 0 }); // {productId, amount}
  const [showConfirmationMessage, setShowConfirmationMessage] = useState(false);

  // creates a pledge and runs pledge submission functions.
  function submitPledge() {
    onPledgeSubmission(pledge);
    setShowConfirmationMessage(false);
    closePledges(); // close ConfirmationMessage and PledgeFormsContainer
  }

  // clicking on overlay prevents submission and shows pledgeFormContainer
  function preventPledgeSubmission() {
    setShowConfirmationMessage(false);
  }

  function updatePledge(pledge) {
    setPledge(pledge);
    setShowConfirmationMessage(true);
  }

  return (
    <>
      {
        showConfirmationMessage
        ? <ConfirmPledge 
          submitPledge={submitPledge}
          preventPledgeSubmission={preventPledgeSubmission}
        />
        : <PledgeFormContainer 
          closePledges={closePledges}
          updatePledge={updatePledge}
          initialPedgeInfo={pledge}
        />
      }
    </>
  );
}
