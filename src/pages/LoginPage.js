import React, { Component } from 'react'
import SeedGenerator from 'iota-generate-seed'

export class LoginPage extends Component {
    state = {
        seed: ''
    }

    login() {
        this.props.login(this.state.seed)
    }

    seedChanged(event) {
        this.setState({seed: event.target.value})
    }

    generateSeed() {
        this.setState({
            seed: SeedGenerator()
        })
    }

    renderSeed() {
        if(this.state.seed) {
            return(
                <p className="seed-box">
                    Your seed is:
                    <br />
                    {this.state.seed}
                    <br />
                    Save it securily
                </p>
            )
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-md-center login-box">
                    <div className="col-md-5 ">
                        <h1>Login to your mail</h1>
                        <p>For using Mailota you need an iota seed. you can use your old seed or generating a new seed.</p>
                        <p>Your seeds are your account, so don't loose it and save it securily.</p>
                        {this.renderSeed()}
                        <input className="form-control" value={this.state.seed} onChange={this.seedChanged.bind(this)} />
                        <br/>
                        <button className="btn btn-success btn-block" onClick={this.login.bind(this)}>Login</button>
                        <br />
                        <button className="btn btn-warning btn-block" onClick={this.generateSeed.bind(this)}  >Generate a seed</button>
                    </div>
                </div>
            </div>
        )
    }
}