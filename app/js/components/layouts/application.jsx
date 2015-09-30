import React from 'react'
import { Router } from 'react-router'

function getStateFromStores() {
  return {
    // isLoggedIn: SessionStore.isLoggedIn(),
    // email: SessionStore.getEmail()
  }
}

class CardsApp extends React.Component {

  getInitialState() {
    return getStateFromStores()
  }

  render() {
    return (
      <div className="app">
        <header>
          <h1>
            Hello World!
          </h1>
        </header>
        { this.props.children }
      </div>
    )
  }

}

export default CardsApp