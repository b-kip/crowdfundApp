export const NavbarLinks  = [
  { name: "About", location: "#about"},
  { name: "Discover", location: "#products"},
  { name: "Get Started", location: "#intro"}

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
    id: "bamboo-stand",
    name: "Bamboo Stand",
    price: 25,
    description: `You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
    you’ll be added to a special Backer member list.`
  },
  {
    id:"black-edition-stand",
    name: "Black Edition Stand",
    price: 75,
    description: `You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
    member list. Shipping is included.`
  },
  {
    id:"mahogany-special-edition",
    name: "Mahogany Special Edition",
    price: 200,
    description: `You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
    to our Backer member list. Shipping is included.`,
  },
];

// updating a list would be expensive.Looping to find, update then update list.
export const productInventory = {
  "no-reward": { quantity: 0 },
  "bamboo-stand": { quantity: 200 },
  "black-edition-stand": { quantity: 200 },
  "mahogany-special-edition": { quantity: 80 }
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
    productId: "black-edition-stand",
    amount: 100,
  },
  { 
    productId: "bamboo-stand",
    amount: 200,
  },
  { 
    productId: "no-reward",
    amount: 1000,
  },
  { 
    productId: "black-edition-stand",
    amount: 200,
  },
  { 
    productId: "mahogany-special-edition",
    amount: 250,
  },
  { 
    productId: "black-edition-stand",
    amount: 500,
  },
  { 
    productId: "bamboo-stand",
    amount: 25,
  },
  { 
    productId: "bamboo-stand",
    amount: 25,
  },
  { 
    productId: "bamboo-stand",
    amount: 250,
  },
  { 
    productId: "no-reward",
    amount: 200,
  },
  { 
    productId: "black-edition-stand",
    amount: 75,
  },
  { 
    productId: "mahogany-special-edition",
    amount: 200,
  },
  { 
    productId: "black-edition-stand",
    amount: 120,
  },
  { 
    productId: "bamboo-stand",
    amount: 200,
  },
  { 
    productId: "black-edition-stand",
    amount: 120,
  },
  { 
    productId: "bamboo-stand",
    amount: 200,
  },
  { 
    productId: "black-edition-stand",
    amount: 120,
  },
  { 
    productId: "bamboo-stand",
    amount: 200,
  },
  { 
    productId: "no-reward",
    amount: 200,
  },
  { 
    productId: "black-edition-stand",
    amount: 2000,
  },
  { 
    productId: "mahogany-special-edition",
    amount: 400,
  },
  { 
    productId: "mahogany-special-edition",
    amount: 800,
  },
  { 
    productId: "mahogany-special-edition",
    amount: 400,
  },
];

export const pledgeTarget= 100000;