import React ,{Component} from 'react'
import { ComposeMail } from '../components/ComposeMail'

export class MailPage extends Component {
    render() {
        return (    
            <div className="container">
                <div className="row">
                    <div className="col">
                    I'm not here
                    </div>
                    <div className="col">
                        <ComposeMail seed={this.props.seed} />
                    </div>
                </div>
            </div>
        )
    }
}