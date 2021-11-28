import { useState } from 'react';

import Overlay from '../components/Utils/Overlay';
import Intro from './Intro';
import Stats from '../components/Stats';
import About from '../layoutComponents/About';
import Products from '../components/Products';
import PledgeForms from './Pledges';

export default function MainApp() {
  const [showOverlay, setShowOverlay] = useState(false);

  function closeOverlay() {
    setShowOverlay(false);
  }

  function openOverlay() {
    setShowOverlay(true);
  }
  return (
    <>
      <main className="flow-content">
        { showOverlay && <Overlay closeOverlay={closeOverlay}/>}
        <Intro/>
        <Stats />
        <About>
          <Products openOverlay={openOverlay}/>
        </About>
      </main>
      <PledgeForms />
    </>
  );
}