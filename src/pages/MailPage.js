import React ,{Component} from 'react'
import { ComposeMail } from '../components/ComposeMail'
import { MailList } from '../components/MailList'

export class MailPage extends Component {
    render() {
        return (    
            <div className="container">
                <div className="row">
                    <div className="col">
                        <MailList seed={this.props.seed} />
                    </div>
                    <div className="col">
                        <ComposeMail seed={this.props.seed} />
                    </div>
                </div>
            </div>
        )
    }
}