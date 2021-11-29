import { useState } from 'react';

import Modal from '../components/Utils/Modal';
import PledgeDetails from './PledgeDetails';
import CloseButton from '../assets/images/icon-close-modal.svg';

import { products } from '../data'; // We pledge on products so each
// product is a pledge type.

export default function Pledges({ closePledges, openSuccessMessage  }) {
  const [activePledge, setActivePledge] = useState(products[0].id);

  function updateActivePledge(pledge) {
    setActivePledge(pledge);
  }
  return (
    <Modal>
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
          products.map(pledge => (
            <PledgeDetails
              key={pledge.id}
              isSelected={pledge.id === activePledge}
              pledge={pledge}
              setAsActivePledge={updateActivePledge}
              openSuccessMessage={openSuccessMessage}
            />
          ))
        }
        
      </div>
    </Modal>
  );
}
