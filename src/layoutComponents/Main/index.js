export default function Main() {
  return (
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
        
        
        <section className="about flow-content container" >
          <h2 className="section__subtitle" id="about">About this project</h2>
        
          <p>
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen
            to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve
            your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
          </p>
        
          <p>
            Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer
            to allow notepads, pens, and USB sticks to be stored under the stand.
          </p>
        
          <div className="products flow-content" id="products">
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
  );
}