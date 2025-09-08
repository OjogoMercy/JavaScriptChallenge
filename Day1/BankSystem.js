const BankName = "Mercy Trust Bank";

const Customers = [];
const Transactions = [];

// functions
function addCustomer(name, balance) {
    const Customer = {
        name: name,
        id: Math.random(),
        balance: balance
        
    }
    Customers.push(Customer)
    return Customer
}

function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a - b;
}
 const newCustomer = addCustomer("Mercy", 100000);
 addCustomer("John", 50000);

add(5, 10);
subtract(10, 5);
function greetCustomer(name) {
  return `Welcome to ${BankName}, ${name}!`;
}
console.log(BankName);
console.log(Customers);

    console.log(greetCustomer(newCustomer.name));