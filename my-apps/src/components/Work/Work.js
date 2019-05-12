import React, { Component } from 'react'
import './Work.css'
export default class Work extends Component {
    render() {
        return (
            <div className="wrapper">
                <FontEnd></FontEnd>
                <BackEnd></BackEnd>
                <Mini></Mini>
                <Server></Server>
                <Ai></Ai>
                <div className="block">美工</div>
                <div className="block1">产品经理</div>
                <div className="block3">前端，框架我最在行</div>
                <div className="block2">后端数据库我也可以</div>
                <div className="block4">tensorflow so so</div>
                <div className="block5">小程序经验足</div>
            </div>
        )
    }
}

class FontEnd extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="front-end ">
                <div className="Title">
                    前端技能
                </div>
                <ul>
                    <li>精通DIV+CSS页面布局，重构,掌握JavaScript，熟悉w3c标准，了解HTML语义化有一定的了解。</li>
                    <li>熟练掌握HTML5技术开发，熟悉响应式布局和弹性盒布局，百分比自适应布局，熟练掌握CSS3动画技术，且能熟练应用Animate.css动画库。</li>
                    <li>熟悉掌握基于HTML5的webApp开发以及各种手机移动端适配，熟悉ECMA标准，熟练掌握DOM、BOM操作，熟悉闭包原理，熟悉面向对象JS编程，理解原型链的继承机制。</li>
                    <li>熟练使用jQuery框架，掌握jQuery与DOM操作及事件处理，了解动态绑定事件的原理，掌握动画的处理。</li>
                    <li>熟练AJAX/JSON,熟悉正则表达式、JS面向对象，JSONP跨域请求。</li>
                    <li>掌握Css类库Sass技术、Less技术、Gulp构建化工具，熟悉node.js,react.js,angular.js以及MVC&MVVM设计模式与模块化开发流程。</li>
                    <li>熟练使用BootStrap框架，有bootstrap开发经历。</li>
                    <li>熟练使用Vue.js，有iview-admin上线开发经历。</li>
                    <li>熟练使用React.js,本网站即用Creat-React-app脚手架编写。</li>
                </ul>
            </div>
        );
    }
}
class BackEnd extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="back-end ">
                <div className="Title">
                    后端技能
                    </div>
                <ul>
                    <li>会使用PHP常用系统函数。</li>
                    <li>熟悉PHP CodeIgniter框架操作mysql数据库，有过上线项目经历。</li>
                    <li>了解node.js。</li>
                </ul>
            </div>
        );
    }
}
class Mini extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="mini">
                <div className="Title">
                    小程序技能
                    </div>
                <ul>
                    <li>熟悉微信小程序标签，熟悉小程序开发规范。</li>
                    <li>熟练使用PHP环境下小程序开发。</li>
                    <li>能够熟练使用小程序生命周期钩子函数。</li>
                    <li>熟悉使用云开发环境下，小程序开发，有上线项目经历。熟练掌握云函数，云存储以及非关系型云数据库mongodb。</li>
                    <li>熟悉个人小程序服务类目。</li>
                </ul>
            </div>
        );
    }
}
class Server extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="server">
                <div className="Title">
                    服务器技能
                    </div>
                <ul>
                    <li>熟悉ubuntu指令。</li>
                    <li>会使用nginx进行web代理，将项目部署到云服务器上。</li>
                </ul>
            </div>
        );
    }
}
class Ai extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="ai">
                <div className="Title">
                    物联网与人工智能
                    </div>
                <ul>
                    <li>熟悉使用树莓派。</li>
                    <li>会使用python部分库。</li>
                    <li>会使用tensorflow模型训练自己的训练集，实现物体图像识别。</li>
                    <li>将tensorflow架构在树莓派上，制作出低功耗的人脸识别机器。</li>
                    <li>能够将物联网和前端结合，从前端控制物联网器件。</li>
                </ul>
            </div>
        );
    }
}
