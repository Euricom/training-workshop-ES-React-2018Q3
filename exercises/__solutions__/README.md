# Exercises With Solutions

## Exercise 1 - functions

Write the following code with an arrow function

```js
const filteredCustomers = customers.find(customer, customerFilter)
function customerFilter(customer) {
    if (customer.active) {
        return true;
    } else {
        return false;
    }
}








// Solution
const filteredCustomers = customers.find(customer => customer.active);
```

Use array functions to simplify the following code. Use arrow function where possible.

```js
const users = []
if (data.length > 0) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].active) {
            const user = {
                id: data.id,
                name: users[i].firstName + ' ' + users.lastName,
            }
            userNames.push(user)
        }
    }
}








// Solution
const users = data
    .filter(item => item.active)
    .map({ id, firstName, lastName } => ({
        id,
        name: `${firstName$} ${lastName$}`,
    })
```

## Exercise 2 - Functional programming

Write a function that takes an argument and returns that argument.

```js
identify(3)  // 3










// solution
function identity(x) {
    return x;
}

// or solution
var identity = function(x) {
    return x;
}
```

Write a function (identityf) that takes an argument and return a function that returns that argument

```js
const idf = identityf(3);
idf();  // 3








// solution
function identityf(arg) {
    return function() {
        return arg;
    }
}
```

Write a function (addf) that adds from two invocations:

```js
addf(3)(4)  // 7









// solution
function addf(x) {
    return function(y) {
        return x + 7;
    }
}
```

Write a function (applyf) that takes a function (like add or mul), and makes it callable with two invocations.

```js
function add(x, y) { return x + y }
function mul(x, y) { return x * y }

addf = applyf(add);
addf(3)(4)           // 7
applyf(mul)(5)(6)    // 30








// solution
function applyf(fn) {
    return function(x) {
        return function(y) {
            return fn(x, y);
        }
    }
}
```

Write a function (curry) that takes a function and an argument, and returns a function that can supply a second argument.

```js
add3 = curry(add, 3);
add3(4)             // 7
curry(mul, 5)(6)    // 30









// solution
function curry(fn, x) {
    return function(y) {
        return fn(x, y);
    }
}
```

## Exercise 3 - Immutability

Write a pure function to change the name of the customer

```js
let customer = { id: 1, name: 'euricom', location: 'Mechelen'};

customer = updateCustomerName(customer, 'Euricom nv.');
console.log(customer)









// solution
function updateCustomerName(customer, newName) {
    return {
        ...customer,
        name: newName
    }
}
```

Write a pure function to add a customer

```js
let customers = { id: 1, name: 'euricom', location: 'Mechelen'};

const newCustomer = { id: 2, name: 'consonto'};
customers = addCustomer(customers, newCustomer);
console.log(customer)







// solution
function addCustomer(customers, newCustomer) {
    return [
        ...customers,
        newCustomer
    ]
}
```

Write a pure function to change the name of 'euricom'

```js
let customers = [{ id: 1, name: 'euricom'}, { id: 2, name: 'consonto'}];

customer = updateCustomerName(customers, 1, 'Euricom nv.');
console.log(customers)







// solution
function updateCustomerName(customers, id, newName) {
    return customers.map(customer => {
        if (customer.id !== id) {
            return customer;
        }
        else {
            return {
                ...customer,
                name: newName
            }
        }
    })
}
```
