import React, { Component } from 'react'
import './Home.css'
import axios from 'axios';
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: "",
            cid: "",
            ipid: "",
            username: "",
            con: "contentnone",
            con1: "contentnone",
            name: "",
            cit: "",
            tag: false,
            tag2: "",
            zan: "",
            list:[]
        }
        this.bindTap = this.bindTap.bind(this)
        this.open = this.open.bind(this)
    }
    componentDidMount() {
        axios({
            method: 'get',
            url: 'http://localhost:8083/felixblog/Message/getzan'
        }).then((res) => {
            // console.log(res.data.data[0].z_value)
            this.setState({
                zan: res.data.data[0].z_value
            })
        })
        window.alert = function (name) {
            var iframe = document.createElement("IFRAME");
            iframe.style.display = "none";
            iframe.setAttribute("src", 'data:text/plain,');
            document.documentElement.appendChild(iframe);
            window.frames[0].window.alert(name);
            iframe.parentNode.removeChild(iframe);
        }
        // eslint-disable-next-line
        var cip = returnCitySN["cip"]
        // eslint-disable-next-line
        var cname = returnCitySN["cname"]
        this.setState({
            city: cname,
            ipid: cip,
            modall1: "modaldell",
            modall2: "modaldell",
            modall3: "modaldell"
        })
        setTimeout(() => {
            axios({
                url: 'http://106.15.188.71/felixblog/Message/seuser',
                method: 'post',
                data: this.state,
                transformRequest: function (obj) {
                    var str = []
                    for (var p in obj) {
                        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]))
                    }
                    return str.join('&')
                }
            }).then(res => {
                console.log(res.data.data[0].u_name)
                this.setState({
                    name: res.data.data[0].u_name,
                    cit: res.data.data[0].u_city
                })
                console.log(this.state)
            }).catch(err => {
                console.log(err)
            })
        }, 500)
    }
    open(name) {
        this.setState({
            modall1: "modaldell",
            modall2: "modaldell",
            modall3: "modaldell",
            ['modall' + name]: ["modall" + name]
        })
        if (name == 3) {
            console.log(this.state)
            axios({
                url: 'http://106.15.188.71/felixblog/Message/seuser',
                method: 'post',
                data: this.state,
                transformRequest: function (obj) {
                    var str = []
                    for (var p in obj) {
                        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]))
                    }
                    return str.join('&')
                }
            }).then(res => {
                console.log(this.state.tag)
                if (res.data.data[0]) {
                    this.setState({
                        con: "contentnone",
                        con1: "",
                        name: res.data.data[0].u_name,
                        cit: res.data.data[0].u_city,
                        tag: true
                    })
                }
            }).catch(err => {
                console.log(err)
            })
            if (this.state.tag == false) {
                this.setState({
                    con: "",
                    con1: "contentnone"
                })
            }
        }
        if (name == 2) {
            if (this.state.name == "") {
                alert("请先点击右边按钮进行注册")
            } else {
                console.log(2)
                axios({
                    method: 'get',
                    url: 'http://localhost:8083/felixblog/Message/getmes'
                }).then((res) => {
                    this.setState({
                        list:res.data.data
                    })
                    console.log(this.state.list)
                })
            }
        }
        if (name == 1) {
            setTimeout(() => {
                this.setState({
                    modall1: "modall1del"
                })
            }, 3000)
            setTimeout(() => {
                this.setState({
                    zan: this.state.zan * 1 + 1
                })
                console.log(this.state)
            }, 1500)
            setTimeout(() => {
                axios({
                    url: 'http://localhost:8083/felixblog/Message/addzan',
                    method: 'post',
                    data: this.state,
                    transformRequest: function (obj) {
                        var str = []
                        for (var p in obj) {
                            str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]))
                        }
                        return str.join('&')
                    }
                }).then(res => {
                    console.log(res)
                })
            },
                2000)
        }
    }
    delt(name) {
        this.setState({
            ['modall' + name]: "modaldell"
        })
    }
    bindTap() {
        // console.log(this.refs.inp.value)
        var adduser = this.state
        adduser.username = this.refs.inp.value
        console.log(adduser)
        axios({
            url: 'http://106.15.188.71/felixblog/Message/sename',
            method: 'post',
            data: adduser,
            transformRequest: function (obj) {
                var str = []
                for (var p in obj) {
                    str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]))
                }
                return str.join('&')
            }
        }).then(res => {
            console.log(res)
            if (res.data.data[0]) {
                this.setState({
                    tag2: false
                })
            }
        }).catch(err => {
            this.setState({
                tag2: true
            })
        })
        setTimeout(() => {
            if (this.state.tag2 == true) {
                axios({
                    url: 'http://106.15.188.71/felixblog/Message/adduser',
                    method: 'post',
                    data: adduser,
                    transformRequest: function (obj) {
                        var str = []
                        for (var p in obj) {
                            str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]))
                        }
                        return str.join('&')
                    }
                }).then(res => {
                    alert('登陆成功')
                    this.setState({
                        modall3: "modaldell",
                        name: adduser.username
                    })
                    console.log(res)
                }).catch(err => {
                    console.log(err)
                })
            } else if (this.state.tag2 == false) {
                alert('该用户已存在。或是您的网络不好，请稍后再试。')
            }
        }, 2000)
    }
    render() {
        return (
            <div className='Home'>
                <WordWrapper></WordWrapper>
                <Img></Img>
                <Foot city={this.state.city}></Foot>
                <div className="message-wrap">
                    <img src="https://s2.ax1x.com/2019/05/15/E7wO5d.png" onClick={() => { this.open(1) }} alt="" />
                    <img src="https://s2.ax1x.com/2019/05/15/E7wjPA.png" onClick={() => { this.open(2) }} alt="" />
                    <img src="https://s2.ax1x.com/2019/05/15/E7wv8I.png" onClick={() => { this.open(3) }} alt="" />
                </div>
                <div className={this.state.modall1}>
                    <div className="xie">
                        谢谢！
                    </div>
                    <div className="zan">
                        当前获赞次数 {this.state.zan}
                    </div>
                </div>
                <div className={this.state.modall2}>
                    <div>
                        <div className="title">
                            留言板
                        </div>
                        <div className="content">
                                {
                                this.state.list.map(function(name){
                                    return (
                                        <ul key={name.m_id}>
                                            <li>{name.m_content}</li> 
                                            <li>{name.m_fabulous}</li>
                                        </ul>
                                    )
                                })
                                }
                        </div>
                        <div className="bot">
                        </div>
                        <div className="del" onClick={() => { this.delt(2) }}>
                        </div>
                    </div>
                </div>
                <div className={this.state.modall3}>
                    <div>
                        <div className="title">
                            用户
                        </div>
                        <div className="content">
                            <div className={this.state.con}>
                                <img src="https://i.loli.net/2019/05/16/5cdcca126def120476.png" alt="" />
                                <div className="user">起个名字吧,名字将和你的ip绑定，只能起一次哟。</div>
                                <input type="text" ref="inp" />
                                <div onClick={this.bindTap} className="butt">确定</div>
                            </div>
                            <div className={this.state.con1}>
                                <img src="https://i.loli.net/2019/05/16/5cdcca126def120476.png" alt="" />
                                <div className="user">您已注册过账户:</div>
                                <div className="use">{this.state.name}</div>
                                <div className="city">{this.state.cit}</div>
                            </div>
                        </div>
                        <div className="bot">
                        </div>
                        <div className="del" onClick={() => { this.delt(3) }}>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
class WordWrapper extends Component {
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
                <img src='https://s2.ax1x.com/2019/05/13/E5J3QA.jpg' alt="" />
            </div>
        );
    }
}

class Foot extends Component {
    constructor() {
        super();
        var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        this.state = {
            date: date
        };
    }
    render() {
        return (
            <div className="Foot">
                <div>Your Add = {this.props.city}</div>
                <div>const School = NEAU</div>
                <div>const Add = 哈尔滨</div>
                <div>const ...</div>
            </div>
        )
    }
}