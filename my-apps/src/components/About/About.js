import React,{ Component } from 'react'
import './About.css'
import axios from 'axios'
export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wechat:"https://s2.ax1x.com/2019/05/14/EoaE5t.png",
            qq:"https://s2.ax1x.com/2019/05/14/EoUD9f.png"
        }
        this.cwechate = this.cwechate.bind(this);
        this.cqq = this.cqq.bind(this)
    }
    cwechate(){
        this.setState({
            qq:"https://s2.ax1x.com/2019/05/14/EoUD9f.png",
            wechat:"https://i.loli.net/2019/05/15/5cdbb3df2213d52243.jpg"
        })        
    }
    cqq(){
        this.setState({
            wechat:"https://s2.ax1x.com/2019/05/14/EoaE5t.png",
            qq:"https://i.loli.net/2019/05/15/5cdbb3df22a0387743.jpg"
        })        
    }
    render() { 

        return ( 
            <div className="about">
                <img src="https://s2.ax1x.com/2019/05/14/Eotgxg.gif" className="gif" alt=""/>
                <a href="https://github.com/FelixHsp" target="_blank"><img src="https://s2.ax1x.com/2019/05/14/EoNJwn.png" className="git" alt=""/></a>
                <img src={this.state.wechat} className="wechat" alt="" onClick={this.cwechate}/>
                <img src={this.state.qq} className="qq" alt="" onClick={this.cqq}/>
                <a href="https://blog.csdn.net/FelixHsp" target="_blank"><img src="https://s2.ax1x.com/2019/05/14/Eoa1Vs.png" className="csdn" alt=""/></a>
            </div>
         )
    }
}