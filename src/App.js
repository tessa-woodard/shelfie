import React, { Component } from 'react'
import './App.css'
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import axios from 'axios'

class App extends Component {
  constructor() {
    super();

    this.state = {
      inventory: [],
      currentSelectedProduct: {}
    }


    this.getInventory = this.getInventory.bind(this)
  }

  componentDidMount() {
    this.getInventory()
  }

  getInventory() {
    axios.get('/api/inventory').then(response => {
      console.log(response)
      this.setState({ inventory: response.data })
    }).catch(error => alert(error, "Didn't get a inventory back."))
  }

  updateProduct = (product) => {
    this.setState({ currentSelectedProduct: product })
  }

  render() {
    console.log(this.state.inventory)
    return (
      <div className="App">
        <Header />
        <Dashboard
          inventory={this.state.inventory}
          getInventory={this.getInventory}
          updateProduct={this.updateProduct}
        />
        <Form
          getInventory={this.getInventory}
          currentSelectedProduct={this.state.currentSelectedProduct}
        />
      </div>
    )
  }
}

export default App