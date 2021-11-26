import { useEffect } from 'react';
import Logo from './assets/images/logo.svg';

function App() {

  useEffect(() => {
    import('./js/main.js');
  }, []);
  return (
    <>
      <header className="main-header">
        <div className="container">
          <div className="overlay overlay--nav  hidden" id="nav-overlay"></div>
          <div className="nav-container">
            <div className="nav-top">
              <a href="/" className="logo"><img src={Logo} alt="crowdfund logo" /></a>
              <nav className="nav--mobile">
                {/* <!-- Add mobile navigation --> */}
                <ul className="burger-menu" id="burger-menu">
                  <span className="burger-menu__item burger-menu__item--top"></span>
                  <span className="burger-menu__item burger-menu__item--middle"></span>
                  <span className="burger-menu__item burger-menu__item--bottom"></span>
                </ul>
              </nav>
            </div>
            <nav className="nav nav--desktop" id="nav">
              <ul className="nav__list">
                <li className="nav__list__item"><a href="">About</a></li>
                <li className="nav__list__item"><a href="#">Discover</a></li>
                <li className="nav__list__item"><a href="#"> Get Started</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>


      <main className="flow-content">
        <div className="overlay--page overlay hidden" id="page-overlay"></div>
        <section className="page-intro flow-content container">
            <h1 className="page-intro__title">Mastercraft Bamboo Monitor Riser</h1>
            <p className="page-intro__lead">A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
            <div className="call-to-action">
              <button className="call-to-action__main btn-open-reward btn">Back this project</button>
              <div className="call-to-action__bookmark">
                <svg className="icon"  viewBox="0 0 56 56"  xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#2F2F2F" cx="28" cy="28" r="28"/><path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z"/></g></svg>
                <span className="text">Bookmark</span>
              </div>
          </div>
        </section>


        <section className="stats container flow-content">
          {/* <!-- <div className="container"> --> */}
            <ul className="stats__list">
              <li className="stats__list__item"><span className="stats-highlight text-strong">$89,914</span> of $100,000 backed</li>
              <li className="stats__list__item"><span className="stats-highlight text-strong">5,007</span> total backers</li>
              <li className="stats__list__item"><span className="stats-highlight text-strong">56</span> days left</li>
            </ul>
            <div className="stats__bar">
            </div>
          {/* <!-- </div> --> */}
        </section>
        
        
        <section className="about flow-content container">
          <h2 className="section__subtitle">About this project</h2>
        
          <p>
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen
            to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve
            your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
          </p>
        
          <p>
            Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer
            to allow notepads, pens, and USB sticks to be stored under the stand.
          </p>
        
          <div className="products flow-content">
            <div className="product flow-content">
              <div className="product__header">
                <h3 className="product__title">Bamboo Stand</h3>
                <p className="product__subtitle">Pledge $25 or more</p>
              </div>
              <p className="product__description">
                You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
                you’ll be added to a special Backer member list.
              </p>
              <div className="product__footer">
                <p><span className="product__quantity text-strong">101</span> left</p>
                <button className="btn btn-open-reward">Select Reward</button>
              </div>
            </div>
        
            <div className="product flow-content">
              <div className="product__header">
                <h3 className="product__title">Black Edition Stand</h3>
                <p className="product__subtitle">Pledge $75 or more</p>
              </div>
              <p className="product__description">
                You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
                member list. Shipping is included.
              </p>
              <div className="product__footer">
                <p><span className="product__quantity text-strong">64</span>left</p>
                <button className="btn btn-open-reward">Select Reward</button>
              </div>
            </div>
        
            <div className="product  flow-content unavailable">
              <div className="product__header">
                <h3 className="product__title">Mahogany Special Edition</h3>
                <p className="product__subtitle">Pledge $200 or more</p>
              </div>
              <p className="product__description">
                You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
                to our Backer member list. Shipping is included.
              </p>
              <div className="product__footer">
                <p><span className="product__quantity text-strong">0</span>left</p>
                <button className="btn btn--dark btn-open-reward">Out of Stock</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* <!-- Selection modal start --> */}
      <section id="main-modal" className="modal flow-content container hidden">

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
        {/* <!-- Selection modal end --> */}
      </section>
        {/* <!-- Success modal start --> */}
      <section id="success-modal" className=" modal modal--success container flow-content hidden">
        <h2 className="section__subtitle">Thanks for your support!</h2>
        <p>
          Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
          an email once our campaign is completed.
        </p>
        <button className="btn" id="success-btn">Got it!</button>
      </section>
  </>
  );
}

export default App;
