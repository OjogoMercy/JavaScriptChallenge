let BankName = "Mercy Trust Bank";

const Customers = [];
const Transactions = [];

// functions
function addCustomer(name, balance,customId) {
  const Customer = {
    name: name,
    id: Math.random(),
      balance: balance,
    customId:customId
  };
  Customers.push(Customer);
  return Customer;
}

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
addCustomer("Mercy", 100000,1);
addCustomer("John", 50000,2);
addCustomer("Alice", 75000,3);
const newCustomer = addCustomer("Muizat", 75000,4);

add(5, 10);
subtract(10, 5);
function greetCustomer(name) {
  return `Welcome to ${BankName}, ${name}!`;
}



console.log(BankName);
console.log('Bank Database:')
console.log(Customers);
// to list te customer names 
console.log(greetCustomer(newCustomer.name));
const listNames = Customers.map((Customer) => Customer.name);
console.log(listNames);
function findCustomer(customId) {
  let customer = {};
  Customers.map((id) => {
    if (id.customId === customId) {
      customer = id;
      return console.log("Customer Details", customer);
    }
  });
}
findCustomer(2);
