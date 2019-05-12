import React,{ Component } from 'react'

import './Experience.css'
export default class Experience extends Component {
    Test(){
        console.log(11111111111)
    }
    render() { 
        return ( 
            <div onClick={this.Test}>
                ssss
            </div>
         )
    }
}