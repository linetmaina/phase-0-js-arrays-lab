// Write your code here
// Step 1: Create the products array
let products = ["Laptop", "Phone", "Headphones", "Monitor"];

// Step 2: Function to log the first product
function logFirstProduct() {
  return products[0];
}

// Step 3: Function to add a new product
function addProduct(productName) {
  products.push(productName);
  return products;
}

// Step 4: Function to update a product name
function updateProductName(position, newName) {
  products[position] = newName;
  return products;
}

// Step 5: Function to remove the last product
function removeLastProduct() {
  products.pop();
  return products;
}

// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
