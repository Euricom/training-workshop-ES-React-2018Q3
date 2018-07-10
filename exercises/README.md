# Exercises

## Exercise 1 - User List (JSX)

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


## Exercise 2 - Toggle Text (Component State & Event)

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

## Exercise 3 - Alert Component (Props)

- Create alert component with [bootstrap styling](https://getbootstrap.com/docs/3.3/components/#alerts)

```
<Alert>This is an information message</Alert>
<Alert type="danger">We have a problem</Alert>
<Alert type="warning" onClosed={alertClosed}>
    <strong>Warning!</strong> Better check yourself, you are not looking too good.
</Alert>
```

## Exercise 4 - Shop Product List

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

## Exercise 5 - ErrorBoundery

- Add error bounderies to your application

## Exercise 6 - Shop Basket

- Add a shopping basket
- Allow products to put in basket (add to basket button)
- Use basket API from [euri-test-api](https://euri-test-api-xupvkdbwnb.now.sh)
- Show following fields in basket
    + Product name & price
    + Quantity
    + Total price
- On refresh page make sure the basket is filled in
- Optional: provide clear basket
