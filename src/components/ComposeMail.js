import React, { Component } from 'react'
import axios from 'axios'

export class ComposeMail extends Component {
    state = {
        address: '',
        subject: '',
        message: '',
        loading: false,
        sendResult: ''
    }

    addressCh(e) {
        this.setState({
            address: e.target.value
        })
    }

    subjectCh(e) {
        this.setState({
            subject: e.target.value
        })
    }

    messageCh(e) {
        this.setState({
            message: e.target.value
        })
    }

    sendMail() {
        const body = this.state
        const postBody = {
            address: body.address,
            subject: body.subject,
            message: body.message,
            seed: this.props.seed
        }

        this.setState({
            loading: true,
            sendResult: ''
        })
        axios.post('http://localhost:8000/mail', postBody)
            .then((response) => {
                console.log(response)
                this.setState({
                    loading: false,
                    sendResult: 'Mail Successfully Sent',
                    address: '',
                    subject: '',
                    message: ''
                })
            }).catch((err) => {
                console.log(err)
                this.setState({
                    loading: false,
                    sendResult: 'Sorry! Some problem with sending!'
                })
            })
    }

    renderSendResult() {
        if (this.state.sendResult) {
            return (
                <div className="alert alert-info compose-inp">
                    {this.state.sendResult}
                </div>
            )
        }
    }

    renderLoading() {
        if (this.state.loading) {
            return (
                <p> Loading ... </p>
            )
        } else {
            return (
                <div>
                    {this.renderSendResult()}
                    <input className="form-control compose-inp" value={this.state.address} placeholder="Address" onChange={this.addressCh.bind(this)} />
                    <input className="form-control compose-inp" value={this.state.subject} placeholder="Subject" onChange={this.subjectCh.bind(this)} />
                    <textarea className="form-control compose-inp" value={this.state.message} placeholder="Message" onChange={this.messageCh.bind(this)} ></textarea>
                    <button className="btn btn-block btn-success compose-inp" onClick={this.sendMail.bind(this)}>Send Message</button>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="compose-box">
                {this.renderLoading()}
            </div>
        )
    }
}