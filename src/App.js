import React, { Component } from 'react'
import Header from './components/Header/Header'
// import Dash from './components/Dashboard/Dashboard'
// import Form from './components/Form/Form'
import './App.css'
// import axios from 'axios';
import routes from './routes'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        {routes}
      </div>
    );
  }
}

export default App