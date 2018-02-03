import React ,{Component} from 'react'
import { ComposeMail } from '../components/ComposeMail'
import { MailList } from '../components/MailList'
import { PublicAddress} from '../components/PublicAddress'

export class MailPage extends Component {
    render() {
        return (    
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <PublicAddress seed={this.props.seed} />
                        <MailList seed={this.props.seed} />
                    </div>
                    <div className="col-6">
                        <ComposeMail seed={this.props.seed} />
                    </div>
                </div>
            </div>
        )
    }
}