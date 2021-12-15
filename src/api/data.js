export const NavbarLinks  = [
  { name: "About", location: "#about"},
  { name: "Discover", location: "#products"},
  { name: "Get Started", location: "#main-modal"}

];

export const products = [
  {
    id: "no-reward",
    name: "Pledge with no reward",
    price: 0,
    description: `Choose to support us without a reward if you simply believe in our project. As a backer,
    you will be signed up to receive product updates via email.`
  },
  {
    id: "Bamboo Stand",
    name: "Bamboo Stand",
    price: 25,
    description: `You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
    you’ll be added to a special Backer member list.`
  },
  {
    id:"Black Edition Stand",
    name: "Black Edition Stand",
    price: 75,
    description: `You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
    member list. Shipping is included.`
  },
  {
    id:"Mahogany Special Edition",
    name: "Mahogany Special Edition",
    price: 200,
    description: `You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
    to our Backer member list. Shipping is included.`,
  },
];

// updating a list would be expensive.Looping to find, update then update list.
export const productInventory = {
  "no-reward": { quantity: 0 },
  "Bamboo Stand": { quantity: 200 },
  "Black Edition Stand": { quantity: 200 },
  "Mahogany Special Edition": { quantity: 80 }
};

export const pledges = [
  { 
    productId: "no-reward",
    amount: 200,
  },
  { 
    productId: "no-reward",
    amount: 200,
  },
  { 
    productId: "no-reward",
    amount: 200,
  },
  { 
    productId: "Black Edition Stand",
    amount: 100,
  },
  { 
    productId: "Bamboo Stand",
    amount: 200,
  },
  { 
    productId: "no-reward",
    amount: 1,
  },
  { 
    productId: "Black Edition Stand",
    amount: 200,
  },
  { 
    productId: "Mahogany Special Edition",
    amount: 250,
  },
  { 
    productId: "Black Edition Stand",
    amount: 200,
  },
  { 
    productId: "Bamboo Stand",
    amount: 25,
  },
  { 
    productId: "no-reward",
    amount: 200,
  },
  { 
    productId: "Black Edition Stand",
    amount: 75,
  },
  { 
    productId: "Mahogany Special Edition",
    amount: 200,
  },
  { 
    productId: "Black Edition Stand",
    amount: 120,
  },
  { 
    productId: "Bamboo Stand",
    amount: 200,
  },
  { 
    productId: "no-reward",
    amount: 200,
  },
  { 
    productId: "Black Edition Stand",
    amount: 2000,
  },
  { 
    productId: "Mahogany Special Edition",
    amount: 200,
  },
];

export const pledgeTarget= 100000;