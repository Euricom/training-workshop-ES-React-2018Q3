---
title: React Introduction
transition: 'fade'
verticalSeparator: "^\\*\\*\\*"
---

# React

## Introduction

<img src="./images/react.png" width="300px" style: "{border: none}"/><br>

<small>
by Peter Cosemans<br>
Copyright (c) 2018 Euricom nv.
</small>

<!-- markdownlint-disable -->
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

## ErrorBoundery & Render Prop

```jsx
export default class ErrorBoundery extends Component {
  static propTypes = {
    children: PropTypes.onOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
    ]),
    render: PropTypes.func.isRequired,
  };

  state = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  componentDidCatch(error, errorInfo) {
    this.setState({
      haseError: true,
      error,
      errorInfo,
    });

    // if (windows.BugSnag) {
    //   windows.BugSnag.notify(error);
    // }
  }

  render() {
    if (this.state.hasError) {
      // return <div className="error">Oops, error occured</div>;
      return this.props.render(this.state.error, this.state.errorInfo);
    }
    return this.props.children;
  }
}
```

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

## Resources

- Portals
- Higher-Order Components
- Fragments
- Context
- Error Boundaries
- Render Props

- [React.js cheatsheet](https://devhints.io/react)

- higher order example
  https://www.robinwieruch.de/react-fetching-data/
