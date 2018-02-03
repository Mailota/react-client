import React, { Component } from 'react';

import { LoginPage } from './pages/LoginPage'
import { MailPage } from './pages/MailPage'
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
        <MailPage seed={this.state.mailSeed} />
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
