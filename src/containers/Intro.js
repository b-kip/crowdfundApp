import { useState } from 'react';
import { ReactComponent as Bookmark } from '../assets/images/bookmark.svg';

/**
 * Display the intro section of the crowdfund app. Enable user to bookmark
 * the project and open pledges form.
 * @callback openPledges - Opens the pledge form. Receives a hash to bookmark
 * opened pledge form.
 * @returns
 */
export default function Intro({ openPledges }) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmarking = () => {
    const value = prompt(`Please use the shortcut Ctrl + D to bookmark or unbookmark this page.
    Enter ANY CHARACTER when done.
    `);
    if( value && value !== "") {
      setIsBookmarked(!isBookmarked);
    }
  };
  return (
    <section id="intro" className="page-intro flow-content container">
      <h1 className="page-intro__title">Mastercraft Bamboo Monitor Riser</h1>
      <p className="page-intro__lead">A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
      <div className="call-to-action">
        <button 
          className="call-to-action__main btn-open-reward btn"
          onClick={() => openPledges('#pledge-form-container')}
        >
            Back this project
        </button>
        <div 
            className={`call-to-action__bookmark ${isBookmarked ? "bookmarked": ""}`}
            onClick={toggleBookmarking}
          >
          <Bookmark className="icon"/>
          <span className="text">{ isBookmarked ? "Bookmarked" : "Bookmark"}</span>
        </div>
      </div>
    </section>
  );
}