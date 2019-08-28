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
        beginn:'beginn',
        per:0
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
    // setTimeout(()=>{
    //   this.setState({
    //     beginn:'beginn1'
    //   })
    // },2000)
    //图片预加载
    var imgs = ['https://s2.ax1x.com/2019/08/20/mJtsld.gif','https://s2.ax1x.com/2019/05/14/EoaE5t.png','https://s2.ax1x.com/2019/05/14/EoUD9f.png','https://s2.ax1x.com/2019/05/14/EoUD9f.png','https://i.loli.net/2019/05/15/5cdbb3df2213d52243.jpg','https://s2.ax1x.com/2019/05/14/EoaE5t.png','https://i.loli.net/2019/05/15/5cdbb3df22a0387743.jpg'
  ,'https://s2.ax1x.com/2019/08/20/mJUS58.gif','https://s2.ax1x.com/2019/05/14/EoNJwn.png','https://s2.ax1x.com/2019/05/14/Eoa1Vs.png','https://s2.ax1x.com/2019/05/13/E5Jz6A.png','https://s2.ax1x.com/2019/05/13/E5hLAf.jpg','https://s2.ax1x.com/2019/05/13/E5hX4S.jpg','https://s2.ax1x.com/2019/05/13/E5hHBt.jpg',
'https://s2.ax1x.com/2019/05/13/E5hON8.jpg','https://s2.ax1x.com/2019/05/13/E5hojA.png','https://s2.ax1x.com/2019/05/13/E5h7nI.png','https://s2.ax1x.com/2019/05/13/E5hbHP.png','https://s2.ax1x.com/2019/05/13/E5Uqud.png','https://s2.ax1x.com/2019/05/14/EISFyt.jpg','https://s2.ax1x.com/2019/05/14/EISZTS.jpg','https://s2.ax1x.com/2019/05/14/EISmFg.png',
'https://s2.ax1x.com/2019/05/14/EISMSs.jpg','https://s2.ax1x.com/2019/05/14/EISuWj.jpg','https://s2.ax1x.com/2019/05/14/EIS1O0.png','https://s2.ax1x.com/2019/05/14/EISlyq.png','https://s2.ax1x.com/2019/05/13/E5w0AI.png','https://s2.ax1x.com/2019/05/14/EISBOx.jpg','https://s2.ax1x.com/2019/05/14/EISrm6.jpg','https://s2.ax1x.com/2019/05/14/EISs0K.jpg',
'https://s2.ax1x.com/2019/05/14/EIS061.jpg','https://s2.ax1x.com/2019/08/20/mJwvQg.png','https://s2.ax1x.com/2019/08/20/mJDeaR.png','https://s2.ax1x.com/2019/08/20/mJDfzT.png','https://s2.ax1x.com/2019/08/20/mJD5yF.png','https://s2.ax1x.com/2019/08/20/mJD4QU.png','https://s2.ax1x.com/2019/08/22/mwYktI.jpg','https://s2.ax1x.com/2019/08/22/mwYZ1f.png','https://s2.ax1x.com/2019/08/22/mwYP7d.png',
'https://s2.ax1x.com/2019/08/22/mwYAht.png','https://s2.ax1x.com/2019/08/22/mwYV9P.png','https://s2.ax1x.com/2019/08/22/mwYec8.png','https://s2.ax1x.com/2019/08/22/mwYmjS.png','https://s2.ax1x.com/2019/08/22/mwYung.png',
'https://s2.ax1x.com/2019/08/20/mJrKTs.png','https://s2.ax1x.com/2019/05/13/E50XQS.png','https://s2.ax1x.com/2019/05/14/EISOpj.png','https://s2.ax1x.com/2019/05/14/EISqhQ.png','https://s2.ax1x.com/2019/05/14/EIpSBV.png','https://s2.ax1x.com/2019/05/14/EIpp7T.png','https://s2.ax1x.com/2019/05/14/EIpEcR.png','https://s2.ax1x.com/2019/05/14/EISzn0.png','https://s2.ax1x.com/2019/05/14/EIpenx.png',
'https://s2.ax1x.com/2019/05/14/EIpVj1.png','https://s2.ax1x.com/2019/05/13/E5B4pV.png','https://s2.ax1x.com/2019/05/14/EIpsvn.jpg','https://s2.ax1x.com/2019/08/20/mJ6kf1.jpg','https://s2.ax1x.com/2019/05/14/EI9mxs.png','https://s2.ax1x.com/2019/05/14/EI9AIS.png','https://s2.ax1x.com/2019/05/14/EI9ka8.png','https://s2.ax1x.com/2019/05/14/EI9VPg.png','https://s2.ax1x.com/2019/05/14/EI9FVf.png',
'https://s2.ax1x.com/2019/05/14/EI9ZGQ.png','https://s2.ax1x.com/2019/05/14/EI9e2j.png','https://s2.ax1x.com/2019/05/14/EI9PqP.png','https://s2.ax1x.com/2019/05/14/EI9JG4.jpg','https://s2.ax1x.com/2019/05/13/E5BLkR.png','https://s2.ax1x.com/2019/05/14/EI9TJg.png','https://s2.ax1x.com/2019/05/14/EI9heP.png','https://s2.ax1x.com/2019/05/14/EI9oFS.png','https://s2.ax1x.com/2019/05/14/EI9WLt.png',
'https://s2.ax1x.com/2019/05/14/EI95o8.png','https://s2.ax1x.com/2019/05/14/EI94df.jpg','https://s2.ax1x.com/2019/05/15/E7wO5d.png','https://s2.ax1x.com/2019/05/15/E7wjPA.png','https://s2.ax1x.com/2019/05/15/E7wv8I.png','https://i.loli.net/2019/05/16/5cdcca126def120476.png','https://i.loli.net/2019/05/16/5cdcca126def120476.png']
    let len = imgs.length;
    var num = 0;
    for (let i = 0; i < len; i++) {
      let imgObj = new Image(); // 创建图片对象
      imgObj.src = imgs[i];
      
      imgObj.addEventListener('load', () => { 
        num ++;
        this.setState({
          per:parseInt((num / len)*100) +'%'
        })
        // console.log(i);
        // console.log(this.state.per)
        if((num / len) == 1){
          setTimeout(() => {
            this.setState({
              beginn:'beginn1'
            })
          },1500)
          setInterval(() => {
            axios({
              method: "get",
              url: "https://quan.suning.com/getSysTime.do"
            }).then(res => {
              // console.log(JSON.stringify(res.data.sysTime2));
              this.setState({
                date:res.data.sysTime2
              })
            });
          }, 1000);
        }
      }, false);
  }
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
            <div className="percentile">{this.state.per}</div>
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
