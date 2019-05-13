import React, { Component } from 'react'
import './Experience.css'
export default class Experience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal1: "modaldel",
            modal2: "modaldel",
            modal3: "modaldel",
            modal4: "modaldel",
            modal5: "modaldel",
            modal6: "modaldel"
        }
        this.delt = this.delt.bind(this)
        this.open = this.open.bind(this)
    }
    componentDidMount() {
        /* const _this=this;    //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
        axios.get('http://106.15.188.71/zyy/Doctor/getdoc')
        .then(function (res) {
        //   console.log(res)
        })
        .catch(function (error) {
          console.log(error);
          _this.setState({
            isLoaded:false,
            error:error
          })
        }) */
    }
    delt(name) {
        this.setState({
            ['modal' + name]: "modaldel"
        })
    }
    open(name) {
        this.setState({
            modal1: "modaldel",
            modal2: "modaldel",
            modal3: "modaldel",
            modal4: "modaldel",
            modal5: "modaldel",
            modal6: "modaldel",
            ['modal' + name]: ["modal" + name]
        })
    }
    render() {
        return (
            <div>
                <div className="experience">
                    我的项目经验
                </div>
                <div className="experience-font">
                    前端项目
                </div>
                <div className="lvshi" onClick={() => { this.open(1) }}>
                    <img src="https://s2.ax1x.com/2019/05/13/E5Jz6A.png" alt="" />
                    <p>律师事务所项目</p>
                </div>
                <div className="experience-back">
                    全栈项目
                </div>
                <div className={this.state.modal1}>
                    <div className="title">
                        律师事务所小程序
                        </div>
                    <div className="content">
                        <div className="content-title">
                        <text>></text>
                        使用json数组渲染页面的小程序</div>
                        <div className="content-con">
                            我的第一个真正意义上的团队项目
                        </div>
                        <img src="https://s2.ax1x.com/2019/05/13/E5hLAf.jpg" className="ima"></img>
                        <img src="https://s2.ax1x.com/2019/05/13/E5hX4S.jpg" className="imb" ></img>
                        <img src="https://s2.ax1x.com/2019/05/13/E5hHBt.jpg" className="ima"></img>
                        <img src="https://s2.ax1x.com/2019/05/13/E5hON8.jpg" className="imb" ></img>
                        <div className="content-con">
                            该小程序的页面均是从json获取到数据渲染出来的
                        </div>
                        <img src="https://s2.ax1x.com/2019/05/13/E5hojA.png" className="imc"></img>
                        <img src="https://s2.ax1x.com/2019/05/13/E5h7nI.png" className="imc"></img>
                        <div className="content-con">
                            利用外部js,制作canvas图表
                        </div>
                        <img src="https://s2.ax1x.com/2019/05/13/E5hbHP.png" className="imc"></img>
                    </div>
                    <div className="bot">
                    </div>
                    <div className="del" onClick={() => { this.delt(1) }}>
                    </div>
                </div>
                <div className="gg" onClick={() => { this.open(2) }}>
                    <img src="https://s2.ax1x.com/2019/05/13/E5Uqud.png" alt="" />
                    <p>纪念日H5页面</p>
                </div>
                <div className={this.state.modal2}>
                    <div className="title">
                        纪念日H5页面
                    </div>
                    <div className="content">
                    </div>
                    <div className="bot">
                    </div>
                    <div className="del" onClick={() => { this.delt(2) }}>
                    </div>
                </div>
                <div className="nine" onClick={() => { this.open(3) }}>
                    <img src="https://s2.ax1x.com/2019/05/13/E5w0AI.png" alt="" />
                    <p>十九大H5页面</p>
                </div>
                <div className={this.state.modal3}>
                    <div className="title">
                        十九大H5页面
                    </div>
                    <div className="content">
                    </div>
                    <div className="bot">
                    </div>
                    <div className="del" onClick={() => { this.delt(3) }}>
                    </div>
                </div>
                <div className="mr" onClick={() => { this.open(4) }}>
                    <img src="https://s2.ax1x.com/2019/05/13/E50XQS.png" alt="" />
                    <p>铭仁中医门诊项目</p>
                </div>
                <div className={this.state.modal4}>
                    <div className="title">
                        铭仁中医门诊项目
                    </div>
                    <div className="content">
                    </div>
                    <div className="bot">
                    </div>
                    <div className="del" onClick={() => { this.delt(4) }}>
                    </div>
                </div>

                <div className="flower" onClick={() => { this.open(5) }}>
                    <img src="https://s2.ax1x.com/2019/05/13/E5B4pV.png" alt="" />
                    <p>花由习生</p>
                </div>
                <div className={this.state.modal5}>
                    <div className="title">
                        花由习生
                    </div>
                    <div className="content">
                    </div>
                    <div className="bot">
                    </div>
                    <div className="del" onClick={() => { this.delt(5) }}>
                    </div>
                </div>

                <div className="pengpeng" onClick={() => { this.open(6) }}>
                    <img src="https://s2.ax1x.com/2019/05/13/E5BLkR.png" alt="" />
                    <p>砰砰记账</p>
                </div>
                <div className={this.state.modal6}>
                    <div className="title">
                        砰砰记账
                    </div>
                    <div className="content">
                    </div>
                    <div className="bot">
                    </div>
                    <div className="del" onClick={() => { this.delt(6) }}>
                    </div>
                </div>
            </div>
        )
    }
}