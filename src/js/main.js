const hamburger = document.querySelector('#burger-menu');
const nav = document.querySelector('#nav');
const navOverlay = document.querySelector('#nav-overlay');
const pageOverlay = document.querySelector('#page-overlay');
const openRewardButtons = document.querySelectorAll('.btn-open-reward');
const getStartedButton = document.querySelector('[href="#main-modal"]');
const bookmark = document.querySelector('.call-to-action__bookmark');
const mainModal = document.querySelector('#main-modal');
const successModal = document.querySelector('#success-modal');
const successBtn = document.querySelector('#success-btn');
const closeModalBtn = document.querySelector('.modal__close-icon');
const pledgeForm = document.querySelectorAll('.pledge__form');
const pledges = document.querySelectorAll('.pledges .product');

// console.dir(nav);
hamburger.addEventListener('click', function(){
  console.log("Clicked");
  if(hamburger.classList.contains('active')) {
    hamburger.classList.remove('active');
    // nav.classList.add('hidden');
    nav.style.display = 'none';
    navOverlay.classList.add('hidden');
  } else { 
    hamburger.classList.toggle('active');
    nav.classList.remove('hidden');
    navOverlay.classList.remove('hidden');
    nav.style.display = 'block';
  }
});

bookmark.addEventListener('click', function(event){
  let text = bookmark.querySelector('.text');
  if(bookmark.classList.contains('bookmarked')) {
    // remove bookmark
    console.log('unbookmarked');
    bookmark.classList.remove('bookmarked');
    // change text
    text.innerText = "Bookmark";
  } else {
    // add class
    bookmark.classList.add('bookmarked');
    // change text
    text.innerText = "Bookmarked";
  }
});

// console.log(openRewardButtons);
[...openRewardButtons, getStartedButton].forEach(function(button){
  button.addEventListener('click', function() {
    pageOverlay.classList.remove('hidden');
    mainModal.classList.remove('hidden');
  });
});

pageOverlay.addEventListener('click', function(event){
  pageOverlay.classList.add('hidden');
  mainModal.classList.add('hidden');
  successModal.classList.add('hidden');
});

closeModalBtn.addEventListener('click', function(event){
  pageOverlay.classList.add('hidden');
  mainModal.classList.add('hidden');
});

pledgeForm.forEach(function(form){
  form.addEventListener('submit', function(event){
    event.preventDefault();
    // fetch data here.
    mainModal.classList.add('hidden');
    successModal.classList.remove('hidden');
  });
});


successBtn.addEventListener('click', function(){
  pageOverlay.classList.add('hidden');
  successModal.classList.add('hidden');
});


const radioBoxes = ['no-reward', 'bamboo-stand', 'black-edition', 'mahogany']; 
pledges.forEach(function(pledge){
  // console.log(radioBoxes);
  for(let i=0; i < radioBoxes.length; i++) {
    // get the radiobox.
    let radioBox = pledge.querySelector(`#${radioBoxes[i]}`); 
    // if selected
    if (radioBox) {
        // remove from list
          radioBoxes.splice(i, 1);
          console.log(radioBoxes);

        // addeventlistener
        radioBox.addEventListener('input', function(event){
          
          console.log(event.target.id);
          if (event.target.checked) {
            console.log('checked');
            pledge.classList.add('selected');

            // remove class from other pledges
            pledges.forEach(function(deselectPledge){
              if (deselectPledge !== pledge) {
                deselectPledge.classList.remove('selected');
              }
            });

          }
          // never fires an event for unchecked radiobuttons
        });
          // add checked class to parent
        // break from the loop
        break;
    }
  }

});