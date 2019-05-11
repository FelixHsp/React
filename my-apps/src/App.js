import React,{Component} from 'react';
import { BrowserRouter as Router,Route,Link } from 'react-router-dom'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Work from './components/Work/Work'
import Home from './components/Home/Home'
import './App.css'
// import axios from 'axios';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        Link1:'activ',
        Link2:'',
        Link3:'',
        Link4:''
    }
    this.click = this.click.bind(this)
}
  click(name){
    this.setState({
      Link1:'',
      Link2:'',
      Link3:'',
      Link4:'',
      ['Link'+name]:"activ"
    })
  }
  render() {
    return (
      <div className="App">
        <Router>
          <div className="Header">
            <div className="Logo">Felix</div>
            <div className="Header-wrapper">
              <div onClick={()=>{this.click(1)}} className={this.state.Link1}><Link to="/">Home</Link></div>
              <div onClick={()=>{this.click(2)}} className={this.state.Link2}><Link to="/work">Work</Link></div>
              <div onClick={()=>{this.click(3)}} className={this.state.Link3}><Link to="/experience">Experience</Link></div>
              <div onClick={()=>{this.click(4)}} className={this.state.Link4}><Link to='/about'>About</Link></div>
              <Time></Time>
            </div>
          </div>
          <div className="clear"></div>
          <Route path="/work" component={Work}></Route>
          <Route path="/experience" component={Experience}></Route>
          <Route path="/about" component={About}></Route>
          <Route exact path="/" component={Home}></Route>
        </Router>
      </div>
    );
  }
}
class Time extends Component{
  constructor() {
    super();
    this.state = {
        date: new Date()
    };
  }
  componentDidMount() {
      this.timer = setInterval(()=>this.tick(),1000)
  }
  tick() {
      this.setState({
          date : new Date()
      })
  }
  render(){
    return(
      <div className='Time'>
        {this.state.date.toLocaleTimeString()}
      </div>
    )
  }
}

export default App;
