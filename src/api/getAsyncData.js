import { } from './data';

import { 
  products, productInventory, pledges, pledgeTarget 
} from './data';


export default function getAsyncData() {
  return (
    new Promise(resolve => {
        resolve({
          data: {
            products,
            productInventory,
            pledges,
            pledgeTarget
          }
        })
    })
  );
}