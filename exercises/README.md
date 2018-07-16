# Exercises

## Exercise 1 - Functions

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
```

## Exercise - Functional programming

Write a function that takes an argument and returns that argument.

```js
identify(3)  // 3
```

Write a function (identityf) that takes an argument and return a function that returns that argument

```js
const idf = identityf(3);
idf();  // 3
```

Write a function (addf) that adds from two invocations:

```js
addf(3)(4)  // 7
```

Write a function (applyf) that takes a function (like add or mul), and makes it callable with two invocations.

```js
function add(x, y) { return x + y }
function mul(x, y) { return x * y }

addf = applyf(add);
addf(3)(4)           // 7
applyf(mul)(5)(6)    // 30
```

Write a function (curry) that takes a function and an argument, and returns a function that can supply a second argument.

```js
add3 = curry(add, 3);
add3(4)             // 7
curry(mul, 5)(6)    // 30
```

## Exercise 2 - User List (JSX)

- Use raw JSX (no react)
- Show list of users in table (Name, Email, Phone)
- Use users list from user.js
- Styling with bootstrap
- Optional: Add City

#### Tips

```
// install bootstrap 3.x

  yarn add bootstrap@3.3.7

// import bootstrap

  import 'bootstrap/dist/css/bootstrap.css';

// doc: styling

  https://getbootstrap.com/docs/3.3/css/#tables
```


## Exercise 3 - Toggle Text (Component State & Event)

- App Component
- Toggle visibility of some text with a button
- Try to have multiple solutions

### Tip

```
<!-- toggle text solution 1 -->
<p>This is some text</p>

<!-- toggle text solution 2 -->
<p>This is some other text</p>

<button>Toggle Text</button>
```

## Exercise 4 - Alert Component (Props)

- Create alert component with [bootstrap styling](https://getbootstrap.com/docs/3.3/components/#alerts)

```
<Alert>This is an information message</Alert>
<Alert type="danger">We have a problem</Alert>
<Alert type="warning" onClose={closeAlert}>
    <strong>Warning!</strong> Better check yourself, you are not looking too good.
</Alert>
```

## Exercise 5 - Shop Product List

- Create app to show products grid
- Load products from API
  [euri-test-api](https://euri-test-api-xupvkdbwnb.now.sh)
- Show following fields
    + Image
    + Sku
    + Title
    + Stock
    + Price
    + Discount
- Style with bootstrap
- Optional: add an error message when the communication fails
- Optional: load more products when scrolling down, use [react-infinite-scroller](https://cassetterocks.github.io/react-infinite-scroller/demo/)

## Exercise 6 - ErrorBoundery

- Add error bounderies to your application

## Exercise 7 - Shop Basket

- Add a shopping basket
- Allow products to put in basket (add to basket button)
- Use basket API from [euri-test-api](https://euri-test-api-xupvkdbwnb.now.sh)
- Show following fields in basket
    + Product name & price
    + Quantity
    + Total price
- On refresh page make sure the basket is filled in
- Optional: provide clear basket
