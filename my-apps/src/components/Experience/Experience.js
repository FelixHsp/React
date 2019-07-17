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
            modal6: "modaldel",
            modal7: "modaldel"
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
            modal7: "modaldel",
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
                <div className="experience-iot">
                    IOT项目
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
                        <img src="https://s2.ax1x.com/2019/05/13/E5hLAf.jpg" className="ima" alt=""/>
                        <img src="https://s2.ax1x.com/2019/05/13/E5hX4S.jpg" className="imb" alt=""/>
                        <img src="https://s2.ax1x.com/2019/05/13/E5hHBt.jpg" className="ima" alt=""/>
                        <img src="https://s2.ax1x.com/2019/05/13/E5hON8.jpg" className="imb"  alt=""/>
                        <div className="content-con">
                            该小程序的页面均是从json获取到数据渲染出来的
                        </div>
                        <img src="https://s2.ax1x.com/2019/05/13/E5hojA.png" className="imc" alt=""/>
                        <img src="https://s2.ax1x.com/2019/05/13/E5h7nI.png" className="imc" alt=""/>
                        <div className="content-con">
                            利用外部js,制作canvas图表
                        </div>
                        <img src="https://s2.ax1x.com/2019/05/13/E5hbHP.png" className="imc" alt=""/>
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
                        <div className="content-title">
                        <text>></text>
                            一周年纪念日H5页面
                        </div>
                        <div className="content-con">
                            利用css3等做特效,定时器做时钟表。
                        </div>
                        <img src="https://s2.ax1x.com/2019/05/14/EISFyt.jpg" className="ima" alt=""/>
                        <img src="https://s2.ax1x.com/2019/05/14/EISZTS.jpg" className="imb" alt=""/>
                        <img src="https://s2.ax1x.com/2019/05/14/EISmFg.png" className="imc" alt=""/>
                        <div className="content-con">
                            canvas做图形特效,hover伪类元素做动画。
                        </div>
                        <img src="https://s2.ax1x.com/2019/05/14/EISMSs.jpg" className="ima" alt=""/>
                        <img src="https://s2.ax1x.com/2019/05/14/EISuWj.jpg" className="imb" alt=""/>
                        <img src="https://s2.ax1x.com/2019/05/14/EIS1O0.png" className="imc" alt=""/>
                        <img src="https://s2.ax1x.com/2019/05/14/EISlyq.png" className="imc" alt=""/>
                        <div className="content-con">
                            可以点下方链接预览:
                        </div>
                        <div className="yulan">
                            <a href="http://www.grx.xn--6qq986b3xl/" target="_blank" className="go">www.grx.我爱你(手机)</a>
                        </div>
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
                        <div className="content-title">
                        <text>></text>
                            bootstrap移动端响应式H5页面
                        </div>
                        <img src="https://s2.ax1x.com/2019/05/14/EISBOx.jpg" className="ima" alt=""/>
                        <img src="https://s2.ax1x.com/2019/05/14/EISrm6.jpg" className="imb" alt=""/>
                        <img src="https://s2.ax1x.com/2019/05/14/EISs0K.jpg" className="ima" alt=""/>
                        <img src="https://s2.ax1x.com/2019/05/14/EIS061.jpg" className="imb" alt=""/>
                        <div className="content-con">
                            可以点下方链接预览:
                        </div>
                        <div className="yulan">
                            <a href="https://felixhsp.github.io/bootstrap-test/" target="_blank" className="go">https://felixhsp.github.io/bootstrap-test/(手机)</a>
                        </div>
                    </div>
                    <div className="bot">
                    </div>
                    <div className="del" onClick={() => { this.delt(3) }}>
                    </div>
                </div>

                <div className="iotcar" onClick={() => { this.open(7) }}>
                    <img src="https://i.loli.net/2019/07/06/5d20377632d9f32987.png" alt="" />
                    <div className="xing">*</div>
                    <p>智能巡视车</p>
                </div>
                <div className={this.state.modal7}>
                    <div className="title">
                        智能巡视车
                    </div>
                    <div className="content">
                    <div className="content-title">
                            <text>></text>
                            基于华为云iot平台的智能巡视车(可无限距离超远程实时遥控)
                        </div>
                        <div className="content-con">
                            使用的开发板：树莓派3b+、小熊派、Arduino   
                        </div>
                        <div className="content-con">
                            项目简介：</div>
                        <div className="content-con">
                            (1)使用小程序接入华为云iot平台的北向API，定时获取到园区内环境数据，并在小程序端展示出来。
                        </div>
                        <div className="content-con">
                            (2)使用微信小程序接入华为云ECS服务器，获取到树莓派上传的人员数据，实时展示出来。
                        </div>
                        <div className="content-con">
                            (3)使用微信小程序，将树莓派获取到的实时视频在小程序端展示，人工远程操作小车移动。
                        </div>
                        <img src="https://i.loli.net/2019/07/06/5d203e0a1516c27087.jpg" className="imc "></img>
                        <div className="content-con">
                            Arduino控制小车电机
                        </div>
                        <img src="https://i.loli.net/2019/07/06/5d203b7eb853054214.png" className="imc" alt=""/>
                        <div className="content-con">
                            搭载tensorflow的树莓派实现人脸识别
                        </div>
                        <img src="https://i.loli.net/2019/07/06/5d203b7eddbcd79081.png" className="imc" alt=""/>
                        <img src="https://i.loli.net/2019/07/06/5d203b7ef2f9412957.png" className="imc" alt=""/>
                        <div className="content-con">
                            华为云iot平台开发
                        </div>
                        <img src="https://i.loli.net/2019/07/06/5d203b7e7be8b79536.png" className="imc" alt=""/>
                        <img src="https://i.loli.net/2019/07/06/5d203b7e8476c91433.png" className="imc" alt=""/>
                        <div className="content-con">
                            对接华云云iot平台的北向API开发（PHP）
                        </div>
                        <img src="https://i.loli.net/2019/07/06/5d203b7ea9ba839733.png" className="imc" alt=""/>
                        <div className="content-con">
                            智慧园区小程序（环境数据查看，遥控巡视车）
                        </div>
                        <img src="https://i.loli.net/2019/07/06/5d203b7e9517290232.png" className="imc" alt=""/>
                        <div className="content-con">
                            预览视频地址：
                        </div>
                        <div className="yulan">
                            <a href="http://123.207.216.106/iotcar.mp4" target="_blank" className="go">http://123.207.216.106/iotcar.mp4</a>
                        </div>
                        <div className="content-con">
                            bilibili地址：(上述地址不可用时可点击此链接)
                        </div>
                        <div className="yulan">
                            <a href="https://www.bilibili.com/video/av58061881/" target="_blank" className="go">https://www.bilibili.com/video/av58061881/</a>
                        </div>
                    </div>
                    <div className="bot">
                    </div>
                    <div className="del" onClick={() => { this.delt(7) }}>
                    </div>
                </div>

                <div className="mr" onClick={() => { this.open(4) }}>
                    <img src="https://s2.ax1x.com/2019/05/13/E50XQS.png" alt="" />
                    <div className="xing">*</div>
                    <p>铭仁中医门诊项目</p>
                </div>
                <div className={this.state.modal4}>
                    <div className="title">
                        铭仁中医门诊项目
                    </div>
                    <div className="content">
                        <div className="content-title">
                            <text>></text>
                            中医门诊（团队项目）
                        </div>
                        <div className="content-con">
                            本人负责后台管理系统的部分前端和整体后端的制作，以及数据库的建立。
                        </div>
                        <div className="content-con">
                            项目简介：病人可以通过小程序端进行预约挂号，查看之前的病例，以及向医生寻诊等。医生可以通过后台管理系统管理余号，查看挂号列表，向病人发布病例等。其中我负责的后台管理系统，整体使用iview-admin框架实现前端部署，PHP ci框架实现后端与数据库的构建。
                        </div>
                        <div className="content-con">
                            原型设计:
                        </div>
                        <img src="https://s2.ax1x.com/2019/05/14/EISOpj.png" className="imc" alt=""/>
                        <img src="https://s2.ax1x.com/2019/05/14/EISqhQ.png" className="imc" alt=""/>
                        <div className="content-con">
                            base64实现图片上传
                        </div>
                        <img src="https://s2.ax1x.com/2019/05/14/EIpSBV.png" className="imc" alt=""/>
                        <div className="content-con">
                            病种列表
                        </div>
                        <img src="https://s2.ax1x.com/2019/05/14/EIpp7T.png" className="imc" alt=""/>
                        <img src="https://s2.ax1x.com/2019/05/14/EIpEcR.png" className="imc" alt=""/>
                        <div className="content-con">
                            markdown实现富文本编辑器
                        </div>
                        <img src="https://s2.ax1x.com/2019/05/14/EISzn0.png" className="imc" alt=""/>
                        <div className="content-con">
                            数据库:
                        </div>
                        <img src="https://s2.ax1x.com/2019/05/14/EIpenx.png" className="imc" alt=""/>
                        <img src="" alt=""/>
                        <div className="content-con">
                            部分CI控制器:
                        </div>
                        <img src="https://s2.ax1x.com/2019/05/14/EIpVj1.png" className="imc" alt=""/>
                    </div>
                    <div className="bot">
                    </div>
                    <div className="del" onClick={() => { this.delt(4) }}>
                    </div>
                </div>

                <div className="flower" onClick={() => { this.open(5) }}>
                    <img src="https://s2.ax1x.com/2019/05/13/E5B4pV.png" alt="" />
                    <div className="xing">*</div>
                    <p>花由习生</p>
                </div>
                <div className={this.state.modal5}>
                    <div className="title">
                        花由习生
                    </div>
                    <div className="content">
                        <div className="content-title">
                            <text>></text>
                            担任项目负责人,负责UI设计、部分前端页面、整体后端与数据库。（2019微信高校小程序大赛 东北赛区第二 晋级全国总决赛）
                        </div>
                        <div className="content-con">
                            名字灵感：我们以“花”代表当代大学生对未来美好生活的向往，以“习”代表艰苦学习的精神。“花由习生”寓意着：美好的未来生活，只能通过现在的艰苦学习和努力奋斗来换得。
                        </div>
                        <div className="content-con">
                            logo:
                        </div>
                        <img src="https://s2.ax1x.com/2019/05/14/EIpsvn.jpg" className="imd" alt=""/>
                        <div className="content-con">
                            项目简介：“花由习生”小程序主要通过“养花”给予用户一定奖励，让用户在日常生活中放下手机，帮助用户提升学习效率或办公效率。
                        </div>
                        <div className="content-con">
                            原型设计：
                        </div>
                        <img src="https://s2.ax1x.com/2019/05/14/EI9mxs.png" className="imc" alt=""/>
                        <div className="content-con">
                            部分页面：
                        </div>
                        <img src="https://s2.ax1x.com/2019/05/14/EI9AIS.png" className="ima" alt=""/>
                        <img src="https://s2.ax1x.com/2019/05/14/EI9ka8.png" className="imb" alt=""/>
                        <img src="https://s2.ax1x.com/2019/05/14/EI9VPg.png" className="ima" alt=""/>
                        <img src="https://s2.ax1x.com/2019/05/14/EI9FVf.png" className="imb" alt=""/>
                        <img src="https://s2.ax1x.com/2019/05/14/EI9ZGQ.png" className="ima" alt=""/>
                        <img src="https://s2.ax1x.com/2019/05/14/EI9e2j.png" className="imb" alt=""/>
                        <div className="content-con">
                            数据库：
                        </div>
                        <img src="https://s2.ax1x.com/2019/05/14/EI9PqP.png" className="imc" alt=""/>
                        <div className="content-con">
                            GitHub：
                        </div>
                        <div className="yulan">
                            <a href="https://github.com/FelixHsp/Learning-from-life" target="_blank" className="go">https://github.com/FelixHsp/Learning-from-life</a>
                        </div>
                        <div className="content-con">
                            扫一扫体验小程序
                        </div>
                        <img src="https://s2.ax1x.com/2019/05/14/EI9JG4.jpg" className="imd" alt=""/>
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
                        <div className="content-title">
                            <text>></text>
                            UI设计，部分前端页面，整体后台与数据库。（小程序云开发）
                        </div>
                        <div className="content-con">
                            项目简介：通过添加每日账单，并具有自动计算整月支出总和功能，方便用户进行每日金钱的花销控制。                        
                        </div>
                        <div className="content-con">
                            部分页面：
                        </div>
                        <img src="https://s2.ax1x.com/2019/05/14/EI9TJg.png" className="ima" alt=""/>
                        <img src="https://s2.ax1x.com/2019/05/14/EI9heP.png" className="imb" alt=""/>
                        <img src="https://s2.ax1x.com/2019/05/14/EI9oFS.png" className="ima" alt=""/>
                        <img src="https://s2.ax1x.com/2019/05/14/EI9WLt.png" className="imb" alt=""/>
                        <div className="content-con">
                            数据库：
                        </div>
                        <img src="https://s2.ax1x.com/2019/05/14/EI95o8.png" className="imc" alt=""/>
                        <div className="content-con">
                            GitHub：
                        </div>
                        <div className="yulan">
                            <a href="https://github.com/FelixHsp/pengpeng" target="_blank" className="go">https://github.com/FelixHsp/pengpeng</a>
                        </div>
                        <div className="content-con">
                            扫一扫体验小程序
                        </div>
                        <img src="https://s2.ax1x.com/2019/05/14/EI94df.jpg" className="imd" alt=""/>
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