import React, { Component } from 'react';

import { LoginPage } from './pages/LoginPage'
import { MailPage } from './pages/MailPage'
class App extends Component {
  state = {
    mailSeed: ''
  }

  componentDidMount() {
    if (localStorage.getItem('mailSeed')) {
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
    if (this.state.mailSeed) {
      return (
        <MailPage seed={this.state.mailSeed} />
      )
    } else {
      return (
        <LoginPage login={this.login.bind(this)} />
      )
    }
  }

  renderLogout() {
    if(this.state.mailSeed) {
      return (
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#" onClick={(e) => {
              e.preventDefault()
              this.setState({
                mailSeed: ''
              })
              localStorage.setItem('mailSeed', '')
            }}>Logout</a>
          </li>
        </ul>
      )
    }
  }

  renderNav() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" style={{color: 'black'}} >Mailota-α</a>
        {this.renderLogout()}
      </nav>
    )
  }

  render() {
    return (
      <div>
        {this.renderNav()}
        {this.renderAppropriatePage()}
      </div>
    );
  }
}

export default App;
