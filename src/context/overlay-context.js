import React from 'react';


const OverlayContext =  React.createContext( {
  showOverlay: false,
  toggleOverlay: () => {}
});

export {OverlayContext };