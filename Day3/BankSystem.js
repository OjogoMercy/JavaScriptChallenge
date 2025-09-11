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
    date: new Date().toLocaleDateString()
  };
  Transactions.push(Transaction);
  return Transaction;
}
addTransaction("deposit", 5000, 1);
addTransaction("withdraw", 2000, 2);
addTransaction("deposit", 3000, 3);
addCustomer("Mercy", 100000,1);
addCustomer("John", 50000,2);
addCustomer("Alice", 75000,3);
const newCustomer = addCustomer("Muizat", 75000,4);
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
// to loop all transactions 
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
function deposit(customId, amount) {
    let customerFound = false;
  Customers.map((id) => {
    let customer = {}
    if (id.customId === customId) {
     customer.balance += amount;
     customerFound = true;
     addTransaction("deposit", amount, customId); 
     console.log(
       `Deposit of $${amount} successful for customer ${customer.name}`
     );
    }
  });
}
deposit(2, 15000);
findCustomer(2);
function withdraw(customId, amount) {
 let  customer = {};
  Customers.map((id) => {
    if (customer.customId === customId) {
      if (customer.balance >= amount) {
        customer.balance -= amount;
        customerFound = true;
        addTransaction("withdrawal", amount, customId); 
        console.log(
          `Withdrawal of $${amount} successful for customer ${customer.name}`
        );
      } else {
        console.log("Insufficient balance");
      }
    }
  });   
  if (!customerFound) {
    console.log("Customer not found");
  }
}
withdraw(1, 5000);
findCustomer(1)
// to get a customers history
function getCustomerTransactions(customId) {
  return Transactions.filter(
    (transaction) => transaction.customId === customId
  );
}

// to get a customer's balance
function getCustomerBalance(customId) {
  const customer = Customers.find((c) => c.customId === customId);
  return customer ? customer.balance : "Customer not found";
}
// to display transaction history 
function displayCustomerTransactions(customId) {
  const customer = Customers.find((c) => c.customId === customId);
  if (!customer) {
    console.log("Customer not found");
    return;
  }

  const customerTransactions = getCustomerTransactions(customId);
  customerTransactions.forEach((transaction, index) => {
    console.log(
      `${index + 1}. ${
        transaction.date
      } - ${transaction.type.toUpperCase()}: $${transaction.amount}`
    );
  });

  console.log(`Current Balance: $${customer.balance}`);
}
