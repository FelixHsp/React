import React,{Component} from 'react';
import { BrowserRouter as Router,Route,Link } from 'react-router-dom'
import A from './components/A'
import B from './components/B'
import Home from './components/Home'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Link to="/">跳转Home页面</Link>
          <Link to="/a">跳转A页面</Link>
          <Link to="/b">跳转B页面</Link>
          <Route path="/a" component={A}></Route>
          <Route path="/b" component={B}></Route>
          <Route exact path="/" component={Home}></Route>
        </Router>
      </div>
    );
  }
}

export default App;
