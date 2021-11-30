# Crowdfund: A product crowdfunding page

Crowdfund is an application used to crowdfund the Mastercraft Bamboo Monitor Riser by allowing users to make
pledges on the product or products of their choice that will be eventually shipped to them once built.
## Overview

The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height thus reducing neck and eye strain. The Mastercraft Bamboo Monitor Riser has 3 products; the Bamboo Stand, the Black Edition Stand and the Mahogany Special Edition. Willing backers can pledge on some or all of the available Monitor Risers.

This project is a Frontend Mentor Challenge solution.


### Functionality and Features

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Make a selection of which pledge to make
- See an updated progress bar and total money raised based on their pledge total after confirming a pledge
- See the number of total backers increment by one after confirming a pledge
- Toggle whether or not the product is bookmarked


### Screenshot



### Links
Hosted by Vercel
Source on Github


## My process

### Built with

This application was first built using vanilla JavaScript only. In this first step I used:
  - Semantic HTML5 markup
  - CSS custom properties
  - CSS Flexbox
  - Mobile-first workflow
  - Sass
  - Vanilla JavaScript
  - Parcel Bundler

I later converted it to a React Application.
  - React
  - styled components

### What I learned

  - Using styled components to create components that receive dynamic style values. The Progressbar component determines what percentage of the set pledge target of $100,000 has been received and passes this value as a width of the ::after element of the Bar styled component.
  ```js
    const Bar = styled.div`
      ...
       &::after {
        width: ${props => props.percentProgress};
        ...
        }
      `
  ```
  I chose styles components in favor of (css-vars-hook)[https://www.npmjs.com/package/css-vars-hook] that would've allowed me to use CSS custom properties to pass dynamic width values to the ::after pseudo-element.

  - Documenting code with JSDoc.

### Continued development



### Useful resource



## Author

[b-kip](https://github.com/b-kip)