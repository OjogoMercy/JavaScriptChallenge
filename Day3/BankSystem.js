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
function addTransaction(type, amount, customId) {
    const Transaction = {
      type:type,
    amount: amount,
    customId: customId,
  };
  Transactions.push(Transaction);
  return Transaction;
}
addTransaction("deposit", 5000, 1);
addTransaction("withdraw", 2000, 2);
addTransaction("deposit", 3000, 3);
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
console.log("Transactions:", Transactions);
// to find transactions by customId
function findTransaction(customId) {
    let transaction = {},
        total = 0;
    Transactions.map((id) => {
        if (id.customId === customId) {
            transaction = id;
            total += id.amount;
            return console.log("Transaction Details", transaction, "Total Amount:", total);
        }
    })
}

// to loo all transactions 
    console.log("List of Transactions using a loop :");

for (let i = 0; i < Transactions.length; i++){
    let TR = Transactions[i];
    console.log(TR);
}
// function to count the number of transactions 
function countTransactions() {
    return Transactions.length;
}
    console.log("Number of Transactions : ", countTransactions());

