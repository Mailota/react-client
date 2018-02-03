import React, { Component } from 'react'
import axios from 'axios'

export class MailList extends Component {
    state = {
        mails: [],
        loading: true
    }

    componentDidMount() {
        axios.get(`http://localhost:8000/mails/${this.props.seed}`)
            .then((result) => {
                this.setState({
                    mails: result.data,
                    loading: false
                })
            }).catch((err) => {
                console.log(err)
            })
    }

    renderLoading() {
        if (this.state.loading) {
            return (
                <ul className="list-group mail-list">
                    <li className="list-group-item">Loading ...</li>
                </ul>
            )
        } else {
            return (
               <div> { this.renderMails() } </div>
            )
        }
    }

    renderMails() {
        var i = 0;
        if (!this.state.mails.length) {
            return (
                <ul className="list-group mail-list">
                    <li className="list-group-item">There is no mail for you</li>
                </ul>
            )
        } else {
            var mails = this.state.mails.map((mail) => {
                i++
                console.log(mail)
                return (
                    <div key={i} className="mails">
                        <div className="list-group-item" >{mail.subject}</div>
                        <div className="list-group-item" >{mail.message}</div>
                    </div>
                )
            })
            console.log(mails)
            return (
                
                <div> 
                    {mails}
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