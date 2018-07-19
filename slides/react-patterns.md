
---
title: React Patterns
transition: 'fade'
verticalSeparator: "^\\*\\*\\*"
---

# React Patterns

<img src="./images/react-patterns.jpg" width="300px" /><br>

<small>
by Peter Cosemans<br>
Copyright (c) 2018 Euricom nv.
</small>

<!-- markdownlint-disable -->
<br>
<style type="text/css">
.reveal section img {
    background:none;
    border:none;
    box-shadow:none;
}
.reveal h1 {
    font-size: 3.0em;
}
.reveal h2 {
    font-size: 2.00em;
}
.reveal h3 {
    font-size: 1.00em;
}
.reveal p {
    font-size: 70%;
}
.reveal blockquote {
    font-size: 100%;
}
.reveal pre code {
    display: block;
    padding: 5px;
    overflow: auto;
    max-height: 800px;
    word-wrap: normal;
    font-size: 100%;
}
</style>

---

# Props In Depth

> Know your props

<!-- prettier-ignore -->
***

## Spread props

```jsx
class App extends Component {
  const title = 'Hello';
  const props = { firstName="peter", lastName="jansens" }
  render() {
    return <Greeting title={title} {...props} />;
  }
}
```

<!-- prettier-ignore -->
***

### Read-only Props

All Props are Read-Only

```jsx
class MyComponent extends Component {
  constructor(props) {
    super(props);
    // BAD: Error is thrown
    props.title = `-- ${props.title} --`;
  }
}
```

<!-- prettier-ignore -->
***

### Children prop

<!-- prettier-ignore -->
```jsx
function FancyButton(props) {
  return (
    <button className="FancyButton">
      {props.children}
    </button>
  );
}
```

```jsx
<FancyButton>Click Me</FancyButton>
```

<!-- prettier-ignore -->
***

### Validating

Validate props

```jsx
import PropTypes from 'prop-types';

function MyComponent(props) {
  return (
    <h3>{this.props.title}<h3>
  );
}

MyComponent.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number,
};

MyComponent.defaultProps = {
  count: 10
};
```

[React prop-types](https://github.com/facebook/prop-types)

This syntax can also be used on class components

### Validating

Validate with static members

```jsx
import PropTypes from 'prop-types';

class MyComponent extends Component {

  static propTypes = {
    title:PropTypes.string.isRequired,
    count:PropTypes.number,
  };

  static defaultProps = {
    count: 10
  };

  render() {
    return (
       <h3>{this.props.title}<h3>
    );
  }
}
```

> static members requires babel-preset-stage-2

<!-- prettier-ignore -->
***

---

# State In Depth

> Know your state

<!-- prettier-ignore -->
***

### Calculated state fields

Don't use state for calculated fields

```jsx
export default class MyComponent extends Component {
  constructor(props) {
    this.state = {
      fullName: `${props.firstName} ${props.lastName}`,
    };
  }
  render() {
    return <p>{this.state.fullName}</p>;
  }
}
```

Better

```jsx
export default class MyComponent extends Component {
  render() {
    const fullName = `${this.props.firstName} ${this.props.lastName}`;
    return <p>{fullName}</p>;
  }
}
```

<!-- prettier-ignore -->
***

## Complex State update

```jsx
// single value
this.setState({
  counter: 1,
});

// single update, complex state
// set state will always set the complete state
this.setState({
  ...this.state    // take all other state properties
  counter: 1,      // set counter to 1
});

// better: set by callback
this.setState((state) => ({
  ...state
  counter: 1,
}));
```

<!-- prettier-ignore -->
***

### Async SetState

```js
// Issue: state is asynchronous
this.setState({
  counter: this.state + 1,
});
console.log(this.state); // State may be not updated yet

// Fix: result callback
this.setState(
    (state, props) => ({
        ...state
        counter: props.initialValue,
    }),
    (state) => {
        // now the state is changed
        consoler.log('new state: ', state)
    }
);
```

---

# Higher-Order Components

> A higher-order component is a function that takes a component and returns a new component.

<!-- prettier-ignore -->
***

## HOC Sample

```jsx
import React from 'react';

const withSecretToLife = WrappedComponent => {
  class HOC extends Component {
    render() {
      return <WrappedComponent secretToLife={42} {...this.props} />;
    }
  }

  return HOC;
};

export default withSecretToLife;
```

Wrap around App

```js
const EnhancedApp = withSecretToLife(App);
```

<!-- prettier-ignore -->
***

## Use of HOC

<!-- prettier-ignore -->
```js
import React from 'react';
import withSecretToLife from './withSecretToLife';

const App = props => (
  <div>
    The secret to life is {props.secretToLife}.
  </div>
)

export default withSecretToLife(App);
```

<!-- prettier-ignore -->
***

## Practical usecase

```js
const hasLogger = (prefix = '') => WrappedComponent => {
  const HasLogger = props => {
    console.log(`${prefix}[Props]:`, props);
    return <WrappedComponent {...props} />;
  };

  return HasLogger;
};
```

```js
import hasLogger form './hasLogger';

const MyComponent = (props) => <h1>MyComponent</h1>

export default hasLogger(MyComponent)
```

Logs props to the console on every render of the WrappedComponent.

[More Samples](https://medium.com/dailyjs/react-composing-higher-order-components-hocs-3a5288e78f55)

---

# Error<br>Boundery

> Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI

<!-- prettier-ignore -->
***

## Basic Sample

```jsx
export default class ErrorBoundery extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
    ]),
  };

  state = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  componentDidCatch(error, errorInfo) {
    this.setState({ haseError: true, error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return <div className="error">Oops, error occured</div>;
    }
    return this.props.children;
  }
}
```

<!-- prettier-ignore -->
***

## Use of ErrorBoundery

```jsx
import ErrorBoundery from './errorBoundery';

const App = () => (
  <ErrorBoundary>
    <MyForm />
  </ErrorBoundary>;
)

export default App;
```

Error Bounderies can be placed on any level

<!-- prettier-ignore -->
***

## Log your exceptions to the server

> Stop hoping your users will report errors

- [Rollbar](https://rollbar.com/)
- [sentry.io](https://sentry.io/welcome/)
- [TrackJS](https://trackjs.com/)

---

# Render Prop

> A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic.

<!-- prettier-ignore -->
***

## Basic Sample

<!-- prettier-ignore -->
```jsx
const SECRET_TO_LIFE = 42;

default export class ShareSecretToLife extends Component {
  render() {
    return <div>
        {this.props.render({ secretToLife: SECRET_TO_LIFE })}
    </div>;
  }
}
```

<!-- prettier-ignore -->
```js
const ShareSecretWithWorld = () => (
  <ShareSecretToLife render={({ secretToLife }) => (
      <h1>
        <b>{secretToLife}</b>
      </h1>
    )}
  />
);
```

[More Samples](https://levelup.gitconnected.com/understanding-react-render-props-by-example-71f2162fd0f2)

<!-- prettier-ignore -->
***

## Practical usecase

ErrorBoundery with custom rendering

<!-- prettier-ignore -->
```jsx
export default class ErrorBoundery extends Component {
  static propTypes = {
    children: PropTypes.onOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
    ]),
    render: PropTypes.func.isRequired,
  };

  // ...

  render() {
    if (this.state.hasError) {
      // allow custom rendering of the error
      return this.props.render(
        this.state.error,
        this.state.errorInfo
      );
    }
    return this.props.children;
  }
}
```

<!-- prettier-ignore -->
***

### Practical usecase

Use of ErrorBoundery

```jsx
import ErrorBoundery from './errorBoundery';

ReactDOM.render(
  <ErrorBoundery render={() => <p>Oops!</p>}>
    <App />
  </ErrorBoundery>,
  document.getElementById('root');
);
```

---

# Other Topics

- [Portals](https://reactjs.org/docs/portals.html)
- [Fragments](https://reactjs.org/docs/fragments.html)
- [Context](https://reactjs.org/docs/context.html)

---

# Resources

> Get the extra information

<!-- prettier-ignore -->
***

## Resources

Info

- [Use a Render Prop!](https://cdb.reacttraining.com/use-a-render-prop-50de598f11ce)
- [How to fetch data in React](https://www.robinwieruch.de/react-fetching-data/)
- [Never Write Another HoC](https://www.youtube.com/watch?v=BcVAq3YFiuc)

Patterns

- [React component patterns](https://medium.com/teamsubchannel/react-component-patterns-e7fb75be7bb0)
- [Reusable Code Patterns](https://benmccormick.org/2016/01/08/reusable-code-patterns/)
- [ReactJS: Code Reuse Patterns](https://www.youtube.com/watch?v=0BNgi9vofaw)
- [React Patterns in a Nutshell](https://www.youtube.com/watch?v=C6w7R501oug)
- [Simple React Patterns](https://lucasmreis.github.io/blog/simple-react-patterns/)
