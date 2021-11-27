import { useState } from 'react';

import Modal from '../components/Utils/Modal';
import Overlay from '../components/Utils/Overlay';
import Intro from './Intro';
import Stats from '../components/Stats';
import About from '../layoutComponents/About';
import Products from '../components/Products';

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
      <Intro />
      <Stats />
      <About>
        <Products openOverlay={openOverlay}/>
      </About>
    </main>

    <Modal id="main-modal" >
      <header className="modal__header">
        <h2 className="section__subtitle">Back this project</h2>
        <img className="modal__close-icon" src="../assets/images/icon-close-modal.svg" alt="" />
      </header>
        <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>

        <div className="pledges flow-content">
          <div className="product pledge--no-reward selected">
            <label className="product__selection">
              {/* <!-- <input type="checkbox" id="no-reward"> --> */}
              <input type="radio" id="no-reward" name="pledge" checked value="no-reward" />
              <span aria-label="Checkbox"></span>
            </label>
            
            <div className="product__header">
              <label htmlFor="no-reward" className="product__title">Pledge with no reward</label>
            </div>
            <p className="product__description">
              Choose to support us without a reward if you simply believe in our project. As a backer,
              you will be signed up to receive product updates via email.
            </p>
            {/* <!-- Selected pledge  start --> */}
            <div className="pledge">
              <p className="pledge__title">Enter your pledge</p>
              <form className="pledge__form">
                <span className="pledge__amount">
                  <input type="text" className="pledge__amount__input" name="no-reward" value="200"></input>
                </span>
                <button  type="submit"  className="btn btn-submit-reward">Continue</button>
              </form>
            </div>
            {/* <!-- Selected pledge end --> */}
          </div>


          <div className="product">
            <label className="product__selection">
              {/* <!-- <input type="checkbox" id="bamboo-stand"> --> */}
              <input type="radio" id="bamboo-stand" name="pledge" value="bamboo-stand" />
              <span aria-label="Checkbox"></span>
            </label>
            <div className="product__header">
              <label htmlFor="bamboo-stand" className="product__title">Bamboo Stand</label>
              <p className="product__subtitle">Pledge $25 or more</p>
            </div>
            <p className="product__description">
              You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
              you’ll be added to a special Backer member list.
            </p>
            <p className="product__details"><span className="product__quantity text-strong">101</span> left</p>
            {/* <!-- Selected pledge start --> */}

            <div className="pledge">
              <p className="pledge__title">Enter your pledge</p>
              <form className="pledge__form">
                <span className="pledge__amount">
                  <input type="text" className="pledge__amount__input" name="pledge-bamboo" value="25"></input>
                </span>
                <button type="submit" className="btn btn-submit-reward">Continue</button>
              </form>
            </div>
            {/* <!-- Selected pledge end --> */}
          </div>


          <div className="product">
            <label className="product__selection">
              {/* <!-- <input type="checkbox" id="black-edition"> --> */}
              <input type="radio" id="black-edition" name="pledge" value="black-edition" />
              <span aria-label="Checkbox"></span>
            </label>
            <div className="product__header">
              <label htmlFor="black-edition" className="product__title">Black Edition Stand</label>
              <p className="product__subtitle">Pledge $75 or more</p>
            </div>
            <p className="product__description">
              You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
              member list. Shipping is included.
            </p>
            <p className="product__details"><span className="product__quantity text-strong">64</span> left</p>
            {/* <!-- Selected pledge start --> */}
            <div className="pledge">
              <p className="pledge__title">Enter your pledge</p>
              <form className="pledge__form">
                <span className="pledge__amount">
                  <input type="text" className="pledge__amount__input" name="pledge-black" value="75"></input>
                </span>
                <button  type="submit" className="btn btn-submit-reward">Continue</button>
              </form>
            </div>
            {/* <!-- Selected pledge end --> */}
          </div>
          
          <div className="product pledge--complete unavailable">
            <label htmlFor="mahogany" className="product__selection">
              {/* <!-- <input type="checkbox" id="mahogany"> --> */}
              <input type="radio" id="mahogany" name="pledge" value="mahogany" />
              <span aria-label="Checkbox"></span>
            </label>
            <div className="product__header">
              <label htmlFor="mahogany" className="product__title">Mahogany Special Edition</label>
              <p className="product__subtitle">Pledge $200 or more</p>
            </div>
            <p className="product__description">
              You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
              to our Backer member list. Shipping is included.
            </p>
            <p className="product__details"><span className="product__quantity text-strong">0</span> left</p>
            {/* <!-- Selected pledge  start --> */}
            <div className="pledge">
              <p className="pledge__title">Enter your pledge</p>
              <form className="pledge__form">
                <span className="pledge__amount">
                  <input type="text" className="pledge__amount__input" name="pledge-mahogany" value="200"></input>
                </span>
                <button  type="submit"  className="btn btn-submit-reward">Continue</button>
              </form>
            </div>
            {/* <!-- Selected pledge end --> */}
          </div>
          
        </div>
      </Modal>
        {/* <!-- Success modal start --> */}
      <Modal id="success-modal">
        <h2 className="section__subtitle">Thanks for your support!</h2>
        <p>
          Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
          an email once our campaign is completed.
        </p>
        <button className="btn" id="success-btn">Got it!</button>
      </Modal>
      {/* <section id="success-modal" className=" modal modal--success container flow-content hidden"> */}
        
      {/* </section> */}
    </>

      
  );
}