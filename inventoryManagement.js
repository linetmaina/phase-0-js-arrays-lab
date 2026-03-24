// Write your code here
//! Step 1: Create the products array
let products = ["Laptop", "Phone", "Headphones", "Monitor"];

//! Step 2: Function to log the first product
function logFirstProduct() {
  console.log(products[0]);
}

//! Step 3: Function to add a new product
function addProduct(productName) {
  products.push(productName);
}

//! Step 4: Function to update a product name
function updateProductName(position, newName) {
  products[position] = newName;
}

//! Step 5: Function to remove the last product
function removeLastProduct() {
  products.pop();
}


//! Test my functions
logFirstProduct(); // Laptop

addProduct("Mouse");
console.log(products);

updateProductName(1, "Iphone");
console.log(products);

removeLastProduct();
console.log(products);


// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
