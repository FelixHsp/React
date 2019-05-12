import React,{ Component } from 'react'

import './Experience.css'
export default class Experience extends Component {
    constructor(props) {
        super(props);
        this.state = {
           modal1:"modaldel"
        }
        this.delt = this.delt.bind(this)
        this.open = this.open.bind(this)
    }
    delt(name){
        this.setState({
            ['modal'+name]:"modaldel"
        })
    }
    open(name){
        this.setState({
            ['modal'+name]:["modal"+name]
        })
    }
    render() { 
        return ( 
            <div>
                <div className="lvshi" onClick={()=>{this.open(1)}}>律师</div>
                <div className={this.state.modal1}>
                    <div className="title">
                            前端技能
                    </div>
                    <div className="content">
                        <div>ssss</div><div>ssss</div><div>ssss</div><div>ssss</div><div>ssss</div><div>ssss</div><div>ssss</div><div>ssss</div><div>ssss</div><div>ssss</div><div>ssss</div><div>ssss</div><div>ssss</div><div>ssss</div><div>ssss</div><div>ssss</div><div>ssss</div><div>ssss</div><div>ssss</div><div>ssss</div><div>ssss</div><div>ssss</div><div>ssss</div><div>ssss</div><div>ssss</div><div>ssss</div><div>ssss</div><div>ssss</div><div>ssss</div><div>ssss</div><div>ssss</div><div>ssss</div><div>ssss</div><div>ssss</div><div>ssss</div><div>ssss</div><div>ssss</div><div>ssss</div><div>ssss</div><div>ssss</div><div>ssss</div><div>ssss</div><div>ssss</div><div>ssss</div>
                    </div>
                    <div className="bot">
                    </div>
                    <div className="del" onClick={()=>{this.delt(1)}}>
                    </div>
                </div>
            </div>
         )
    }
}