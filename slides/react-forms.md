---
title: React Introduction
transition: 'fade'
verticalSeparator: "^\\*\\*\\*"
---

# React Forms

<img src="./images/forms.png" width="600px" /><br>

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

# Forms

> Can you fill this in?

<!-- prettier-ignore -->
***

## Handle form input

> There is no conventional approach in React of doing this

- Uncontrolled components (with refs)
- Controlled components (with onChange & setState)
- Library (like formik, informed, redux-form or other)

<!-- prettier-ignore -->
***

Controlled

```jsx
export default class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }
  handleSubmit = e => {
    e.preventDefault();
    console.log('handleSubmit', this.state.values);
  };

  handleChange = e => {
    this.setState({
        values: {
            ...prevState.values,
            [event.target.name]: event.target.value;
        }
    })
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name="name" value={this.state.name} onChange={this.handleChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
```

Uncontrolled

```jsx
export default class MyComponent extends Component {
  constructor(props) {
    super(props);
  }
  handleSubmit = e => {
    e.preventDefault();
    console.log('handleSubmit', this.name.value);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref={input => (this.name = input)} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
```

---

# Formik

https://codesandbox.io/s/q8yRqQMp - basic
https://codesandbox.io/s/p5v4q83kq - InputFields
https://codesandbox.io/s/n4z5w983yj - advanced

https://codesandbox.io/s/xl0867zzrp - full raw code

---

# Resources

> Get the extra information

<!-- prettier-ignore -->
***

## Resources

Training

- [Building forms using React](https://www.codementor.io/blizzerand/building-forms-using-react-everything-you-need-to-know-iz3eyoq4y)

Mobx

- [Handling React Forms with Mobx Observables](https://blog.risingstack.com/handling-react-forms-with-mobx-observables/)
- [React form validation with MobX](https://medium.com/@KozhukharenkoN/react-form-validation-with-mobx-8ce00233ae27)


<!-- prettier-ignore -->
***

## Resources

Formik

- [Better React Forms with Formik](https://mead.io/formik/)
- [The Joy of Forms with React and Formik](https://keyholesoftware.com/2017/10/23/the-joy-of-forms-with-react-and-formik/)
- [formik vs informed vs react form vs react forms](http://www.npmtrends.com/formik-vs-informed-vs-react-form-vs-react-forms)
- [ReactNYC - Formik](https://www.youtube.com/watch?v=-tDy7ds0dag)

Components/libraries

- [React-Select](https://github.com/JedWatson/react-select)

---

# Get your user input
