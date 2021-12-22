import Modal from './Utils/Modal';

export default function ConfirmPledge({ submitPledge, preventPledgeSubmission }) {
  return (
    <Modal containerClass="modal--success" closeModal={preventPledgeSubmission}>
      <h2 className="section__subtitle">Thanks for your support!</h2>
      <p>
        Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
        an email once our campaign is completed.
      </p>
      <button 
        className="btn" id="success-btn"
        onClick={submitPledge}
      >
        Got it!
      </button>
    </Modal>
  )
}
