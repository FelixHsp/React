import React,{ Component } from 'react'
import './Home.css'
// import My from 'https://s2.ax1x.com/2019/05/13/E5J3QA.jpg'
export default class Home extends Component {
    render() { 
        return ( 
            <div className='Home'>
                <WordWrapper></WordWrapper>
                <Img></Img>
                <Foot></Foot>
            </div>
         )
    }
}
class WordWrapper  extends Component {
    render() { 
        return ( 
            <div className="Word-Wrapper">
                <div>Hey</div>
                <div>I'm Felix</div>
                <div>Welcom to here <h className="text">|</h></div>
            </div>
         );
    }
}

class Img extends Component {
    render() { 
        return ( 
            <div className='img'>
                <img src='https://s2.ax1x.com/2019/05/13/E5J3QA.jpg' alt=""/>
            </div>
         );
    }
}

class Foot extends Component{
    constructor() {
        super();
        var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        this.state = {
            date: date
        };
    }
    render(){
      return(
        <div className="Foot">
            <div>const Date = {this.state.date}</div>
            <div>const School = NEAU</div>
            <div>const Add = 哈尔滨</div>
            <div>const ...</div>
        </div>
      )
    }
  }