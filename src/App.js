import React, { Component } from 'react';

import { LoginPage } from './pages/LoginPage'
class App extends Component {
  state = {
    mailSeed: ''
  }

  componentDidMount() {
    if(localStorage.getItem('mailSeed')) {
      this.setState({
        mailSeed: localStorage.getItem('mailSeed')
      })
    }
  }

  login(seed) {
    localStorage.setItem('mailSeed', seed)
    this.setState({
      mailSeed: seed
    })
  }

  renderAppropriatePage() {
    if(this.state.mailSeed) {
      return (
        <div>I'm here</div>
      )
    } else {
      return (
        <LoginPage login={this.login.bind(this)} />
      )
    }
  }

  render() {
    return (
      <div>
        {this.renderAppropriatePage()}
      </div>
    );
  }
}

export default App;
