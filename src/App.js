import './App.css';
import React, { Component } from 'react'
import { NavBar } from './Header'
import { Footer } from './Footer'
import Products from './Components/Products/Products'
import { Provider } from 'react-redux';
// import store from './Redux/Store/Index';
import {createStore} from 'redux'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Cart from './Cart'
import ProductDetail from './ProductDetail'
import reducers from './Reducers'

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {
  render() {

    return (
      <Router>
      <Provider store={store}>
      <NavBar/>
      <Switch>
      <Route  path="/" exact component={Products}/>
      <Route  path="/cart" exact component={Cart}/>
      <Route path='/products/:id' component={ProductDetail} />
      </Switch>
      <Footer/>
      </Provider>
      </Router>
    );
  }
}

export default App;

// Use the React/Redux structure to implement a data store in your application. (20 pts)

// Use actions to dispatch data to reducers
// Use reducers to manipulate the store data
// Use getters to retrieve data from your store
// Use both stateless and stateful components. (10 pts)

// Use a form input to filter products. (10 pts)

// At a minimum build 5 components, should be more, remember to simply your components. (20 pts)

// Use a router component to navigate within your application (React Router?). 
//  2.  Use routes to change pages (Router, Route, Link)
//  3.  Use route params to pass props to a component (15 pts)

// Absolutely no critical bugs and minimal console warnings, 
//preferably none since they are easy to identify. (20 pts)

// Commit and PUSH your work using git DAILY (5 pts)

//This store should have:
//products page
//product details page
//cart page
//header or menu with navigation 
//footer

//BONUS: 
//Include a mock login page that takes a username and password. 
//Store the username in the store and use it in the app 
//somewhere: header, cart page, or anywhere you might need it.
//Account page? 