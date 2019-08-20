import React,{Component} from 'react';
import { BrowserRouter as Router,Route,NavLink,Redirect } from 'react-router-dom'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Work from './components/Work/Work'
import Home from './components/Home/Home'

import './App.css'
import axios from 'axios';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        Link1:'activ',
        Link2:'other',
        Link3:'other',
        Link4:'other',
        bg1:'',
        bg2:'',
        bg3:'',
        bg4:'',
        bg5:'',
        bg6:'',
        bg7:'',
        bg8:'',
        bg9:'',
        bg10:'',
        begin:'begin',
        beginn:'beginn'
    }
    this.click = this.click.bind(this)
}
  click(name){
    this.setState({
      Link1:'other',
      Link2:'other',
      Link3:'other',
      Link4:'other',
      ['Link'+name]:"activ",
      bg1:'bg1',
      bg2:'bg2',
      bg3:'bg3',
      bg4:'bg4',
      bg5:'bg5',
      bg6:'bg6',
      bg7:'bg7',
      bg8:'bg8',
      bg9:'bg9',
      bg10:'bg10',
      begin:'begin'
    })
    setTimeout(() => {
      this.setState({
        begin:'begin1'
      })
    }, 900);
    setTimeout(() => {
      this.setState({
        bg1:'',
        bg2:'',
        bg3:'',
        bg4:'',
        bg5:'',
        bg6:'',
        bg7:'',
        bg8:'',
        bg9:'',
        bg10:'',
        begin:'begin2'
      })
    }, 1900);
  }
  componentDidMount(){
    this.setState({
      bg1:'bg1',
      bg2:'bg2',
      bg3:'bg3',
      bg4:'bg4',
      bg5:'bg5',
      bg6:'bg6',
      bg7:'bg7',
      bg8:'bg8',
      bg9:'bg9',
      bg10:'bg10'
    })
    setTimeout(() => {
      this.setState({
        begin:'begin1'
      })
    }, 900);
    setTimeout(() => {
      this.setState({
        bg1:'',
        bg2:'',
        bg3:'',
        bg4:'',
        bg5:'',
        bg6:'',
        bg7:'',
        bg8:'',
        bg9:'',
        bg10:'',
        begin:'begin2'
      })
    }, 1900);
    setTimeout(()=>{
      this.setState({
        beginn:'beginn1'
      })
    },2000)
  }
  render() {
    return (
      <div className="App">
        <Router>
          <div className="Header">
            <div className="Logo">Felix</div>
            <div className="Header-wrapper">
              <div onClick={()=>{this.click(1)}} className={this.state.Link1}><NavLink to="/">Home</NavLink></div>
              <div onClick={()=>{this.click(2)}} className={this.state.Link2}><NavLink to="/work">Technology</NavLink></div>
              <div onClick={()=>{this.click(3)}} className={this.state.Link3}><NavLink to="/experience">Experience</NavLink></div>
              <div onClick={()=>{this.click(4)}} className={this.state.Link4}><NavLink to='/about'>About</NavLink></div>
              <Time></Time>
            </div>
          </div>
          <div className="clear"></div>
          <div className={this.state.begin}>
            <div className={this.state.bg1}></div>
            <div className={this.state.bg2}></div>
            <div className={this.state.bg3}></div>
            <div className={this.state.bg4}></div>
            <div className={this.state.bg5}></div>
            <div className={this.state.bg6}></div>
            <div className={this.state.bg7}></div>
            <div className={this.state.bg8}></div>
            <div className={this.state.bg9}></div>
            <div className={this.state.bg10}></div>
          </div>
          <div className={this.state.beginn}>
            <img src="https://s2.ax1x.com/2019/08/20/mJtsld.gif"  alt=""/>
          </div>
          <Route path="/work" component={Work}></Route>
          <Route path="/experience" component={Experience}></Route>
          <Route path="/about" component={About}></Route>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/build" render={()=>{
            return <Redirect to="/"></Redirect>
          }}></Route>
        </Router>
      </div>
    );
  }
}


class Time extends Component{
  constructor() {
    super();
    this.state = {
        date: ""
    };
  }
  componentDidMount() {
      setInterval(() => {
        axios({
          method: "get",
          url: "http://quan.suning.com/getSysTime.do"
        }).then(res => {
          // console.log(JSON.stringify(res.data.sysTime2));
          this.setState({
            date:res.data.sysTime2
          })
        });
      }, 1000);
  }
  render(){
    return(
      <div className='Time'>
        {this.state.date}
      </div>
    )
  }
}

export default App;
