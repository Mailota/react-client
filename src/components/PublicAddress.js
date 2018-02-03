import React, { Component } from 'react'
import axios from 'axios'

export class PublicAddress extends Component {
    state = {
        loading: true,
        error: false,
        address: ''
    }

    componentDidMount() {
        axios.get(`http://localhost:8000/mails/address/${this.props.seed}`)
            .then(({data}) => {
                this.setState({
                    loading: false,
                    address: data
                })
            })
            .catch((err) => {
                this.setState({
                    loading: false,
                    error: true
                })
            })
    }


    renderLoading() {
        if(this.state.loading ) {
            return (
                <div className="alert alert-dark public-address word-break" role="alert">
                    Loading ...
                </div>
            )
        } else if (this.state.error) {
            return (
                <div className="alert alert-dark public-address word-break" role="alert">
                    There is some problem to make an address - <a href="#" >try again!</a>
                </div>
            )
        } else if (this.state.address) {
            return (
                <div className="alert alert-dark public-address word-break" role="alert">
                    Your mail address is: {this.state.address}
                </div>
            )
        }
    }


    render() {
        return (
            <div>
                {this.renderLoading()}
            </div>
        )
    }
}