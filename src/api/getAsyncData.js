import { } from './data';

import { 
  products, productInventory, pledges, pledgeTarget 
} from './data';


export default function getAsyncData() {
  return (
    new Promise(resolve => {
      setTimeout(() => {
        resolve({
          data: {
            products,
            productInventory,
            pledges,
            pledgeTarget
          }
        })
      }, 500);
    }
    )
  );
}