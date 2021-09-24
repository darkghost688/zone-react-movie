# Vue阶段综合演练

[TOC]

# 一、项目概要

## 1、效果前瞻

仿照网站：卖座网

http://m.maizuo.com

![效果预览](https://storage.lynnn.cn/assets/markdown/91147/pictures/2020/10/cbf14ac0b60d10ba7cac70cd93f87af85d26a06b.png?sign=3d94c060b86cc17a523f2f153bfc4485&t=5f7c13a9)

说明：

- 可能会有一些偏差
- 课上由于时间关系，并不会花太多时间写样式



## 2、开发流程（重点）

熟悉一个项目从0-1流程？

- 产品**立项** (需求分析、技术选型、项目人员确定)，产出立项报告
  - 项目立项报告（百度文库搜）【产品经理，PM】
    - 当前背景
    - 项目需求
    - 人员安排
    - 功能介绍
    - 市场需求
    - 项目风险
- 产品原型 (设计产品**原型图**)【产品经理】
  - 产品原型图（通过简单的黑白线条勾勒出项目的初始界面效果）
  - 进行ui设计（效果图）
  - 依据用户的视觉体验给界面加上了颜色
- 项目开发 (前端 与 后端)【周期最长的一步】   周期最长的 
  - 设计（UI）：设计图和切图【UI人员】
  - 前端：出一版静态页（模板）
    - 以前：html+css+js+其他库文件
    - 现在：
      - v
      - r
      - a
  - 后端：服务器端
    - 写接口
    - 搭服务器
    - 写业务逻辑
  - 前后端整合
    - 耦合式开发（也还算行，模版引擎）
    - **前后端分离式（幸福，只需要看前端代码即可）**
  - 产出v1.0的代码
- 项目测试
  - 测试部门：QA人员（质量保障）
  - 测试
    - 内测
    - 公测（大公司的产品）
- 项目上线
  - 运维&后端&前端



面试会问的问题：之前的团队的人员配置。

答：这个回答需要取决公司的规模，比方说，以美团为例，研发岗170个人。前端：40个，后端：50个，运维：30个，设计：30个，产品经理：10个，测试：10。

如果是小规模，则例如20个人总共，前端可以为5个，后端5个人，运维2，测试2个，产品2-3个人，UI：3-4人。



## 3、开发环境

- 开发工具：vs code并安装vue开发插件：Vetur

- 开发环境：windows / mac  (mac重度患者优先考虑)

- 项目运行环境：node v10+

- Vue脚手架： vue-cli 4+

- 代码版本工具：**Git**/Svn（乌龟SVN），**Gitee**/GitLab/Github，乌龟Git（基于可视化界面的git工具）



# 二、初始化及必要知识点

## 1、初始化远程仓库

> 以Github为例：https://github.com/

- 创建一个新项目

![创建项目](https://storage.lynnn.cn/assets/markdown/91147/pictures/2020/10/306929e959182a95bde37358ccab47ce0842b100.png?sign=1a495fc0bde2637359bee1e4d0c92f50&t=5f7d46b9)



- 仓库配置

仓库名称自行决定。

![仓库配置](https://storage.lynnn.cn/assets/markdown/91147/pictures/2020/10/f4d0bdf4868f9e4391a08e500c3b41fa265bde96.png?sign=d4e36722cdba0f62c2ec2c0c352b57a5&t=5f7d4765)



> 以gitee为例：https://gitee.com

- 在主页的右上角选择“+”号，展开后，选择“新建仓库”

![](https://storage.lynnn.cn/assets/markdown/91147/pictures/2021/05/05d25b3019fb3294f5889687359454d287d69f9d.png?sign=d180ff0a2c0196203f44048710f04823&t=6093a0b4)

- 填写仓库基本的信息，只需要填写仓库名称即可

![](https://storage.lynnn.cn/assets/markdown/91147/pictures/2021/05/b2ad1a75584e3c31f16ef9db0506f770f4291660.png?sign=22a688e30d88217b0e0802289a3296e3&t=6093a1a4)



- 创建好的仓库界面

![](https://storage.lynnn.cn/assets/markdown/91147/pictures/2021/05/50886fd8d6286dd7efa67ac935fb3df2068be8e3.png?sign=aea47bf3d46520461308dfdc1bcf2f10&t=6093a202)



## 2、创建项目

- 使用`vue-cli`脚手架创建项目

~~~shell
vue create i-moive
~~~

> 项目名称`i-moive`可以根据自己的情况进行替换



- 脚手架创建项目询问式选择回答如下

![](https://storage.lynnn.cn/assets/markdown/91147/pictures/2021/04/ec36518639ae7694c5ec5b60756a8360aace19bc.png?sign=66a52052e9a6e73635ae1833c113b1fa&t=6065456c)

![](https://storage.lynnn.cn/assets/markdown/91147/pictures/2021/04/0b23bb6c4321a823c2e101db83838b0753c19f56.png?sign=79ae440abeb051fc90f5025dd77a34db&t=606545b8)

![](https://storage.lynnn.cn/assets/markdown/91147/pictures/2021/04/696828a88d1d25c2e25b33931f8ba09b0723308b.png?sign=d00a3e63f95783b0777cbb7320918ba6&t=606545e8)

![](https://storage.lynnn.cn/assets/markdown/91147/pictures/2021/04/b66f81459654972a8a1c85e49e64532b5119d358.png?sign=1af8db20cd700f2311537fb6ccff9bab&t=6065460a)

> 使用历史路由模式，在上线部署的时候需要做服务端的重写配置，否则项目不支持刷新，一刷新就404。

![](https://storage.lynnn.cn/assets/markdown/91147/pictures/2021/04/997c871df05b0cf46a7d654c82475b3ee153ee15.png?sign=12c41f8be26ab41a498941f8ac0ea8aa&t=6065463c)

![](https://storage.lynnn.cn/assets/markdown/91147/pictures/2021/04/e39f4222e65e502329a9e151b51d3315eefcd00d.png?sign=ec0c061f8dd169d350c77423a7745663&t=60654654)

其实vue也支持界面化的方式管理项目（与`vue create`命令二选一）：

~~~shell
vue ui
~~~

![](https://storage.lynnn.cn/assets/markdown/91147/pictures/2021/05/52cbe29c964ae11c1acec5123c34e70b19cfce8d.png?sign=33c9b2bd039c51936f9558b22b483711&t=6093a720)



- 项目创建完毕

![](https://storage.lynnn.cn/assets/markdown/91147/pictures/2021/04/d68f92025a93ea9f43eac9cbdca2f0572ad4903d.png?sign=1136006de9c9f74a4e33167e3ffdbb3b&t=6065473b)



- 同步初始化项目到远程仓库

~~~shell
# i-moive，根据自己的项目名称进行替换
cd i-moive
git remote add origin 远程仓库地址
# 将本地当前的分支代码上传到远程的master分支中
git push -u origin master
~~~



- 创建开发分支`dev`（用于做测试的分支，等测试代码没问题之后再往主分支上合并）

> 以后实际工作是master分支为最终稳定运行的版本的代码，而在开发期间提交的代码一般会提交给开发分支，待后期测试没问题，再与master分支进行合并（pull request）。

~~~shell
git branch dev
git checkout dev
git push -u origin dev
~~~

> 后续操作开发就在dev分支上开发，等全部代码编写完毕，再与master分支合并。



- （==可选操作==）为当前项目设置记住密码/**SSH免密登录**

> 如果每次提交都提示输入帐号密码，则可以做此步骤。
>
> 修改当前项目中的`.git/config`文件

将配置：

~~~config
[remote "origin"]
	url = https://github.com/......
~~~

修改为：

~~~config
[remote "origin"]
	url = https://用户名:密码@github.com/......
~~~

**后续每天工作使用Git指令是什么？？**

~~~shell
# 将远程仓库的代码拉取到本地
git pull

# 写代码的环节

# 写好代码
git add .
git commit -m "注释"

# 下班
git push
# 打卡下班
~~~



## 3、路由规划

在后续开始之前先对项目进行一个清理，删除不需要的东西：

- 删除`src/assets/logo.png`文件
- 删除`src/components/HelloWorld.vue`文件
- 删除`src/views/Home.vue`和`src/views/About.vue`文件
- 修改`src/router/index.js`，删除对`Home.vue`和`About.vue`的引用
  - 删除`Home.vue`de 的引入
  - 删除根路由规则
  - 删除`/about`路由规则
- 修改`src/App.vue`文件
  - 删除`id="nav"`的div元素
  - div的`id="app"`这个属性也可以删除
  - 清除`style`标签之间的所有的样式
- 增加环境变量的配置文件
  - .env
    - 在文件中新增网站名称的配置：VUE_APP_APPNAME
    - 在`public/index.html`将网站的标题设置成上一步的名称
      - <%= process.env.VUE_APP_APPNAME %>
  - .env.development
  - .env.production

最终清理完毕的标志：页面是白的，控制台没有任何报错和警告。

————————————————————————————————————————————

如果项目中所有的路由都写在入口文件中，那么将不便于编写项目和后期维护。因此路由需要进行模块化处理。

可以**先行**添加以下几个空的路由模块：

- 电影模块
  - 正在热映
  - 即将上映
- 影院模块
- 个人中心模块

> 如果后续还有其他模块，届时再进行增加即可。

**创建各个模块对应的视图组件文件**

> - 在`src/views`目录下创建对应的文件夹与文件，同时，可以删除自带的`Home.vue`与`About.vue`文件
>
> - 创建每个视图组件后在其中书写好基本内容
>
>   - ~~~html
>     <template>
>         <div>
>             <h1>XXXX</h1>
>         </div>
>     </template>
>     ~~~

~~~text
src/views             
    ├─Center		（个人中心）         
    │      └─Index.vue 
    │                
    ├─Cinemas 		（电影院）        
    │      └─Index.vue 
    │ 
    ├─News 		（资讯）        
    │      └─Index.vue 
    │ 
    └─Films          （电影）
           │ Index.vue
           │ NowPlaying.vue
           └─ComingSoon.vue
~~~

**创建模块化的目录及路由文件**

> 在每个路由模块文件中注册好对应的路由及各自所使用的视图组件

~~~text
src/router
    ├─index.js
    │
    └─modules
    	 │ center.js
         │ cinemas.js
         │ news.js
         └─films.js
~~~

**在剔除`router/index.js`中无用代码后，示例代码如下**

~~~javascript
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// 导入模块化后的路由模块文件
import filmRoutes from "./modules/films";
import cinemasRoutes from "./modules/cinemas";
import newsRoutes from "./modules/news";
import centerRoutes from "./modules/center";

const routes = [
    // 路由重定向
    {
        path: "/",
        redirect: "/films/nowPlaying",
    },
    // 电影模块的路由
    ...filmRoutes,
    // 电影院模块路由
    ...cinemasRoutes,
    // 资讯模块路由
    ...newsRoutes,
    // 我的模块路由
    ...centerRoutes,
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
~~~

请注意，在写路由组件导入的时候，如果使用了路由懒加载，在后续组件中获取路由信息将获取的是存在差异的，为了保障路由信息的准确获取，在需使用$route属性的组件对应的路由规则中，请不要使用懒加载。



## 4、反向代理配置

为什么需要配置：接口有很多都是存在跨域问题的，但是cors、jsonp的方式都是依赖后端去解决支持问题，所以只能考虑代理操作。

配置vue的代理操作需要注意以下几点：

- 后续使用的配置是基于node的，不是vue的 
- 代理只在本地的开发环境下生效，打包上线后就没了
  - 上线时可能需要更改实际请求的地址（cors）
- 针对vue项目的代理配置需要在项目的根目录下创建文件“vue.config.js”，**切勿写错名字**
- 以下配置不要去背（webpack的配置），认识即可
- 这个文件修改之后需要重启项目才能生效（对于vue根目录下的其他配置文件也适用）

~~~json
module.exports = {
    // 开发服务器设置
    devServer: {
        open: true,
        // 设置 npm run serve 启动后的端口号
        port: 3000,
        // 如果你开始了eslint,不要让eslint在页面中遮罩，它错误会在console.log控制台打印
        overlay: false,
        // vue项目代理请求
        proxy: {
            // 规则
            // axios中相对地址开头的字符串  匹配请求uri中的前几位
            "/api": {
                // 把相对地址中的域名 映射到 目标地址中
                // localhost:3000 => https://api.iynn.cn/film/api/v1/
                target: "https://api.iynn.cn/film/api/v1",
                // 修改host请求的域名为目标域名
                // changeOrigin: false,
                changeOrigin: true,
                // 请求uri和目标uri有一个对应关系
                // 请求/api/login ==> 目标 /v1/api/login
                pathRewrite: {
                    "^/api": "",
                },
            },
        },
    },
};
~~~



## 5、网络请求封装

**在封装前请先安装axios**

~~~shell
npm i -S axios
~~~

**步骤：**

- 在`.env.development`和`.env.production`文件中配置俩个接口的请求前缀，以便复用

~~~js
// .env.development
VUE_APP_API_PREFIX="/api/"

// .env.production
VUE_APP_API_PREFIX="https://api.iynn.cn/film/api/v1/"
~~~

- 请求地址文件配置

  - 路径：config/uri.js
  - 好处：后期接口地址如果发生了变化，我们可以统一去管理和修改

  ~~~javascript
  // 纯粹是为了模块化
  // 该文件定义了项目中所有外部接口请求的地址信息
  
  // 获取前缀
  let prefix = process.env.VUE_APP_API_PREFIX;
  
  // 定义地址映射
  let uri = {
      // 获取城市信息
      citiesInfo: prefix + "getCitiesInfo",
      // 获取正在热映列表
      nowPlaying: prefix + "getNowPlayingFilmList",
      // 获取即将上映列表
      comingSoon: prefix + "getComingSoonFilmList",
      // 其它的后续用到再加....
  };
  
  // 导出
  export default uri;
  
  ~~~

- 封装请求文件

  - 路径：http/request.js

  ~~~javascript
  // 作用：封装axios
  
  // 导入axios
  import axios from "axios";
  
  // 加工axios的环节
  // 拦截器：对请求或响应进行拦截处理
  // 分类：
  //      请求拦截器（上高速的收费站）
  axios.interceptors.request.use((cfg) => {
      // 在请求发出去之前拦下，加工一下请求配置信息
      // 场景：接口安全中要求加token到头信息中的时候
      // if(localStorage.getItem("token")){
      //     cfg.defaults.headers.token = localStorage.getItem('token')
      // }
      return cfg;
  });
  //      响应拦截器（下高速的收费站）
  axios.interceptors.response.use((res) => {
      // 在获取到响应的时候拦截，加工下响应的数据
      // 场景：更新jwt的时候使用 && 简化操作
      // if (res.data.token) {
      //     localStorage.setItem("token", res.data.token);
      // }
      // 之前获取axios的返回结果都是从res.data中获取的，比较麻烦，我希望res就是返回结果
      return res && res.data;
  });
  
  // 导出axios
  export default axios;
  ~~~

- 注册axios到vue实例上

  - 好处：后续操作简单，因为每个组件中都有vue实例`this`，注册到实例上后续可以直接通过this调用，而不再需要每次都import`http.js`
  - 修改文件：main.js

  ~~~javascript
  import Vue from "vue";
  import App from "./App.vue";
  import router from "./router";
  import store from "./store";
  // 导入axios
  import axios from "./http/request";
  // 将axios注册到vue实例上（原型上）
  Vue.prototype.$http = axios;
  Vue.config.productionTip = false;
  
  new Vue({
      router,
      store,
      render: (h) => h(App),
  }).$mount("#app");
  ~~~

- 测试可用性

  - 随便找一个组件测试，测试代码测试完毕之后需**要删除**

  ~~~vue
  <script>
  import uri from "@/config/uri";
  export default {
      async created() {
          let ret = await this.$http.get(uri.getCity);
          console.log(ret);
      },
  };
  </script>
  ~~~

  

## 6、vant组件配置

官网：https://vant-contrib.gitee.io/vant/#/zh-CN/

Vant 是有赞前端团队开源的**移动端**组件库（Vue的pc端一般采用element UI），于 2017 年开源，已持续维护 4 年时间。Vant 对内承载了有赞所有核心业务，对外服务十多万开发者，是业界主流的移动端组件库之一。

**配置使用步骤**

- 安装

  ~~~shell
  npm i -S vant
  ~~~

- 引入组件

  ~~~shell
  npm i -D babel-plugin-import
  ~~~

  ~~~javascript
  // 对于使用 babel7 的用户，可以在 /babel.config.js 中配置
  // 需要在粘贴的时候合并配置（修改保存完毕务必记得重启！！！）
  module.exports = {
      presets: ["@vue/cli-plugin-babel/preset"],
    	plugins: [
      	['import', {
        		libraryName: 'vant',
        		libraryDirectory: 'es',
        		style: true
      	}, 'vant']
    	]
  };
  ~~~

- 导入&使用UI组件

  - import ... from ...
  - Vue.use( ... )
  - <xxx></xxx>



# 三、功能开发（一）

## 1、导航实现

### 1.1、底部导航

vant组件：https://vant-contrib.gitee.io/vant/#/zh-CN/tabbar

组件文件名：src/components/nav/GlobalNav.vue

a. 需要创建上述组件，将对应的组件在合适的位置做引入并使用

> 底部菜单在大部分时候都是需要展示的，因此建议将底部导航组件GlobalTabBar放到全局组件App.vue中。

~~~vue
<template>
    <div>
        <router-view />
        <!-- 使用全局导航组件 -->
        <GlobalTabBar/>
    </div>
</template>

<script>
// 导入全局的底部菜单组件
import GlobalTabBar from "@/components/Nav/GlobalTabBar"
export default {
    // 注册组件
    components: {
        GlobalTabBar
    }
}
</script>

<style lang="scss"></style>
~~~

b. 完善底部菜单的实现

~~~vue
<template>
    <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000">
        <van-tabbar-item icon="home-o">电影</van-tabbar-item>
        <van-tabbar-item icon="search">影院</van-tabbar-item>
        <van-tabbar-item icon="friends-o">资讯</van-tabbar-item>
        <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
</template>

<script>
// 导入需要的vant组件并注册
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";
Vue.use(Tabbar);
Vue.use(TabbarItem);
export default {
    data(){
        return {
            // 默认选中第一个选项卡
            active: 0
        }
    }
};
</script>

<style scoped></style>
~~~

c. 解决问题：

- 图标问题
  - 思路：使用阿里矢量图

- 点击之后页面显示没变化的问题
  - 解决地址不变的问题
  - 解决地址变后刷新页面索引归零的问题

最终实现代码如下：

~~~vue
<template>
    <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000" @change="changeTab">
        <van-tabbar-item>
            <!-- 使用具名插槽填坑 -->
            <van-icon class="iconfont icon-dianying" slot="icon" size="1.3rem"></van-icon>
            <span>电影</span>
        </van-tabbar-item>
        <van-tabbar-item>
            <van-icon class="iconfont icon-yingyuan" slot="icon" size="1.3rem"></van-icon>
            <span>影院</span>
        </van-tabbar-item>
        <van-tabbar-item>
            <van-icon class="iconfont icon-zixun" slot="icon" size="1.3rem"></van-icon>
            <span>资讯</span> </van-tabbar-item
        ><van-tabbar-item>
            <van-icon class="iconfont icon-wode" slot="icon" size="1.3rem"></van-icon>
            <span>我的</span>
        </van-tabbar-item>
    </van-tabbar>
</template>

<script>
// 导入阿里巴巴图标样式
import "@/assets/fonts/iconfont.css";
// 导入需要的vant组件并注册
import Vue from "vue";
import { Tabbar, TabbarItem, Icon } from "vant";
Vue.use(Tabbar);
Vue.use(TabbarItem);
// 使用icon组件自定义图标
Vue.use(Icon);
export default {
    data() {
        return {
            // 默认选中第一个选项卡
            active: 0,
            // 定义一个地址数组
            url: ["/films/nowPlaying", "/cinemas", "/infomations", "/center"],
        };
    },
    // created周期解决刷新导致的active归零的情况
    created() {
        // 获取路由信息
        let path = this.$route.path;
        let index = this.url.indexOf(path);
        this.active = index > -1 ? index : 0;
    },
    methods: {
        /**
         * index: 对应菜单的下标
         */
        changeTab(index) {
            this.$router.push(this.url[index]);
        },
    },
};
</script>

<style scoped></style>
~~~



### 1.2、电影模块顶部导航

vant组件是：https://vant-contrib.gitee.io/vant/#/zh-CN/tab

项目组件文件名：src/components/Nav/FilmsHeader.vue

a. 在上述的位置新建组件，然后在合适的位置导入该组件

> 合适的位置：src/views/Films/Index.vue

~~~vue
<template>
    <div>
        <FilmsNav/>
        <router-view></router-view>
    </div>
</template>

<script>
// 导入电影模块顶部的选项菜单
import FilmsNav from "@/components/nav/FilmsNav.vue"
export default {
    // 注册组件
    components: {
        FilmsNav
    }
};
</script>

<style scoped></style>

~~~

b. 设置FilmsNav.vue组件的内容，实现基本的展示没问题

~~~vue
<template>
    <div>
        <div class="header">
            <div class="side">北京</div>
            <div class="title">电影</div>
            <div class="side"></div>
        </div>
        <van-tabs v-model="active" @click="onClick" title-active-color="#ff5f16" line-width="60px" line-height="1.5px">
            <van-tab title="正在热映"></van-tab>
            <van-tab title="即将上映"></van-tab>
        </van-tabs>
    </div>
</template>

<script>
import Vue from "vue";
import { Tab, Tabs } from "vant";

Vue.use(Tab);
Vue.use(Tabs);
export default {
    data() {
        return {
            urls: ["/films/nowPlaying", "/films/comingSoon"],
            active: 0,
        };
    },
    methods: {
        /**
         * name：选项卡的索引或者名称
         * title：van-tab组件的title的值
         */
        onClick(name, title) {
            let url = this.urls[name];
            this.$router.push(url);
        },
    },
};
</script>

<style scoped>
.header {
    height: 44px;
    width: 100%;
    display: flex;
    text-align: center;
    line-height: 44px;
}
.side {
    width: 15%;
    font-size: 13px;
}
.title {
    width: 70%;
    font-size: 17px;
}
</style>

~~~

c. 解决功能实现后的bug

- 点击tab菜单后，页面内容和地址没有发生变化
- 页面刷新后位置会归零

~~~vue
<template>
    <div>
        <div class="header">
            <div class="side">北京</div>
            <div class="title">电影</div>
            <div class="side"></div>
        </div>
        <van-tabs v-model="active" @click="onClick" title-active-color="#ff5f16" line-width="60px" line-height="1.5px">
            <van-tab title="正在热映"></van-tab>
            <van-tab title="即将上映"></van-tab>
        </van-tabs>
    </div>
</template>

<script>
import Vue from "vue";
import { Tab, Tabs } from "vant";

Vue.use(Tab);
Vue.use(Tabs);
export default {
    data() {
        return {
            urls: ["/films/nowPlaying", "/films/comingSoon"],
            active: 0,
        };
    },
    methods: {
        /**
         * name：选项卡的索引或者名称
         * title：van-tab组件的title的值
         */
        onClick(name, title) {
            let url = this.urls[name];
            this.$router.push(url);
        },
    },
    // 获取当前的地址，来纠正索引归零的问题
    created() {
        let path = this.$route.path;
        let index = this.urls.indexOf(path);
        this.active = index;
    },
};
</script>

<style scoped>
.header {
    height: 44px;
    width: 100%;
    display: flex;
    text-align: center;
    line-height: 44px;
}
.side {
    width: 15%;
    font-size: 13px;
}
.title {
    width: 70%;
    font-size: 17px;
}
</style>

~~~

实现效果：

![](https://storage.lynnn.cn/assets/markdown/91147/pictures/2021/09/891d5a359dd9f1742cf4f02ebb97dff99c8293bc.png?sign=6a53db62e236054a76352a0f2474886f&t=61318c4d)



## 2、电影模块

### 2.1、实现正在热映列表

思路：

- 调用接口去获取后端提供的列表的数据
- 使用获取到的数据展示出来基本的效果
  - 挑选合适的组件来展示
    - 卡片组件：https://vant-contrib.gitee.io/vant/#/zh-CN/card
  - 循环遍历数据，将数据展示在组件上
  - 样式问题
- 上滑加载更多的效果实现



在.env文件中添加对于默认城市的配置：

~~~js
VUE_APP_DEFAULT_CITY=110100
~~~

注意点：

电影列表在展示的时候需要使用到vant的卡片组件，卡片组件需要使用第三个自定义组件展示，其中使用到了类似于如下的写法：

~~~vue
<van-card num="2" price="2.00" desc="描述信息" title="商品标题" thumb="https://img01.yzcdn.cn/vant/ipad.jpeg">
    <template #tags>
        <van-tag plain type="danger">标签</van-tag>
        <van-tag plain type="danger">标签</van-tag>
    </template>
</van-card>
~~~

其中，其`template #tags`写法实质上就是具名插槽的写法（slot="tags"），在card组件中，其所有的展示内容用的属性都支持改写成插槽形式。例如，价格属性`price`可以写成以下形式放到card组件标签之间：

~~~vue
<template #price>
	<div class="price">
        <van-tag plain type="danger">1999元</van-tag>
    </div>
</template>
~~~

之所以会有这种写法是因为如果要展示的内容在属性里的话，则给其制定样式非常不灵活；而我们把属性的内容做成插槽形式，则可以写很多标签，进而可以灵活的写样式。

a. 电影模块顶部导航吸顶的效果

修改组件文件：src/components/Nav/FilmsNav.vue

书写固定定位的样式：

~~~css
.sticky {
    position: fixed;
    z-index: 999;
    width: 100%;
}
~~~

设置吸顶默认值为false，即不吸顶，并在div上应用：

![](https://storage.lynnn.cn/assets/markdown/91147/pictures/2021/07/17fac0f6c7f446d2342302268a3273e94ea10c5b.png?sign=3c6f819aff7f247abcc5e8b1f4341a05&t=60deda82)

获取滚动条的高度来决定是否应用吸顶效果：

~~~js
// 挂载完毕后获取滚动条的高度
mounted() {
    // 监听滚动事件以实时获取滚动条高度
    addEventListener("scroll", () => {
        let scrollTop = document.documentElement.scrollTop;
        if (scrollTop >= 200) {
            // 固定顶部导航
            this.isSticky = true;
        } else {
            // 不固定顶部导航
            this.isSticky = false;
        }
    });
},
~~~

b. 实现基本的电影列表数据展示（不带分页的实现）

~~~vue
<template>
    <div class="main">
        <!-- .one为每一条记录，需要循环 -->
        <div class="one" v-for="item in list" :key="item.filmId">
            <van-card class="card">
                <!-- 插槽：具名插槽，template标签形式，允许使用#号替代name属性，其后面的名字即插槽的名字。用插槽可以让我们在这里自定义样式，如果有样式需求，这里就得用插槽形式 -->
                <template #desc>
                    <div class="desc">
                        <div>
                            观众评分 <span class="grade">{{ item.grade }}</span>
                        </div>
                        <div>主演：{{ item.actors | parseActors }}</div>
                        <div>{{item.nation}} | {{item.runtime}}分钟</div>
                    </div>
                </template>
                <template #title>
                    <div class="title">
                        {{ item.name }} <span class="filmType">{{ item.filmType.name }}</span>
                    </div>
                </template>
                <template #thumb>
                    <img class="thumb" :src="item.poster" />
                </template>
            </van-card>
            <!-- 购票按钮 -->
            <div class="right">
                <van-tag plain class="buyBtn" type="danger" size="large" color="#ff5f16">购票</van-tag>
            </div>
        </div>
    </div>
</template>

<script>
// 导入外部的模块
import Vue from "vue";
import { Card, Tag } from "vant";
import uri from "@/config/uri";
Vue.use(Card);
Vue.use(Tag);
export default {
    created() {
        let url = uri.nowPlaying + `?cityId=${this.cityId}&pageNum=${this.pageNum}&pageSize=${this.pageSize}`;
        this.$http.get(url).then((res) => {
            // 判断
            if (res.status === 0) {
                // 成功
                this.list = res.data.films;
            }
        });
    },
    data() {
        return {
            // 城市id
            cityId: localStorage.getItem("cityId") ? localStorage.getItem("cityId") : process.env.VUE_APP_DEFAULT_CITY,
            // 每次获取电影的数量
            pageSize: 10,
            // 显示的起始页码
            pageNum: 1,
            // 电影列表的数据变量
            list: [],
        };
    },
    methods: {},
    filters: {
        // 处理主演
        parseActors(actors) {
            // 卖座的数据，动画片是没有主演的（null）
            if (actors) {
                let str = "";
                actors.forEach((el) => {
                    str += el.name + " ";
                });
                // 通过字符串截取
                return str.length > 16 ? str.substr(0, 16) + "..." : str;
            } else {
                return "暂无主演";
            }
        },
    },
};
</script>

<style scoped>
.main {
    margin-top: 10px;
    margin-bottom: 50px;
}
.one {
    background: #fff;
    display: flex;
    border-bottom: 1px solid rgb(248, 245, 245);
}
.card {
    width: 80%;
    background: #fff;
}
.right {
    width: 20%;
    text-align: center;
}
.buyBtn {
    margin: 50% auto;
}
.title {
    font-size: 16px;
    color: #191a1b;
}
.filmType {
    color: #fff;
    background: #d2d6dc;
    font-size: 9px;
    padding: 1px 4px;
}
.grade {
    color: #ffb232;
    font-size: 14px;
}
.thumb {
    width: 66px;
    height: 100%;
    border-radius: 0;
}
/* 重新定义vant的卡片组件缩略图的宽度 */
.van-card__thumb {
    width: 70px;
}
.desc {
    color: #797d82;
    font-size: 13px;
    margin-top: 5px;
}
</style>

~~~

c. 实现加载更多（带分页）

加载更多的实现也需要使用vant组件：https://vant-contrib.gitee.io/vant/#/zh-CN/list

> 注意：使用list组件的时候只需要复制list组件的代码即可，其里面的内容即列表内容，我们已经有card组件了，所以不要多复制。换句话来讲，我们需要通过van-list包裹van-card，而不是全盘复制文档的代码，需要选择性复制。

List 组件通过 `loading` 和 `finished` 两个变量控制加载状态，当组件滚动到底部时，会触发 `load` 事件并将 `loading` 设置成 `true`。此时可以发起异步操作并更新数据，数据更新完毕后，将 `loading` 设置成 `false` 即可。若数据已全部加载完毕，则直接将 `finished` 设置成 `true` 即可。

~~~vue
<template>
    <div class="main">
        <!-- 使用list组件包裹div.one -->
        <van-list v-model="loading" :finished="finished" finished-text="我是有底线的" @load="onLoad">
            <!-- .one为每一条记录，需要循环 -->
            <div class="one" v-for="item in list" :key="item.filmId">
                <van-card class="card">
                    <!-- 插槽：具名插槽，template标签形式，允许使用#号替代name属性，其后面的名字即插槽的名字。用插槽可以让我们在这里自定义样式，如果有样式需求，这里就得用插槽形式 -->
                    <template #desc>
                        <div class="desc">
                            <div>
                                观众评分 <span class="grade">{{ item.grade }}</span>
                            </div>
                            <div>主演：{{ item.actors | parseActors }}</div>
                            <div>{{ item.nation }} | {{ item.runtime }}分钟</div>
                        </div>
                    </template>
                    <template #title>
                        <div class="title">
                            {{ item.name }} <span class="filmType">{{ item.filmType.name }}</span>
                        </div>
                    </template>
                    <template #thumb>
                        <img class="thumb" :src="item.poster" />
                    </template>
                </van-card>
                <!-- 购票按钮 -->
                <div class="right">
                    <van-tag plain class="buyBtn" type="danger" size="large" color="#ff5f16">购票</van-tag>
                </div>
            </div>
        </van-list>
    </div>
</template>

<script>
// 导入外部的模块
import Vue from "vue";
import { Card, Tag, List } from "vant";
import uri from "@/config/uri";
Vue.use(Card);
Vue.use(Tag);
Vue.use(List);
export default {
    data() {
        return {
            // 城市id
            cityId: localStorage.getItem("cityId") ? localStorage.getItem("cityId") : process.env.VUE_APP_DEFAULT_CITY,
            // 每次获取电影的数量
            pageSize: 10,
            // 显示的起始页码
            pageNum: 1,
            // 电影列表的数据变量
            list: [],
            // 加载状态，false表示未开始加载，true表示加载中
            loading: false,
            // 结束状态，falsee表示没有全部加载完，true表示已经全部加载完
            finished: false,
        };
    },
    methods: {
        onLoad() {
            // 通过官网的代码，可以判断，这里应该写获取数据的方法
            let url = uri.nowPlaying + `?cityId=${this.cityId}&pageNum=${this.pageNum}&pageSize=${this.pageSize}`;
            this.$http.get(url).then((res) => {
                // 判断
                if (res.status === 0) {
                    // 成功
                    this.list = [...this.list, ...res.data.films];
                    // 此次请求已经结束，将加载状态改为否
                    this.loading = false;
                    // 判断是否还有剩余的数据
                    if (this.pageNum < Math.ceil(res.data.total / this.pageSize)) {
                        // 页码++
                        this.pageNum++;
                    } else {
                        // 标记已经全部加载结束
                        this.finished = true;
                    }
                }
            });
        },
    },
    filters: {
        // 处理主演
        parseActors(actors) {
            // 卖座的数据，动画片是没有主演的（null）
            if (actors) {
                let str = "";
                actors.forEach((el) => {
                    str += el.name + " ";
                });
                // 通过字符串截取
                return str.length > 16 ? str.substr(0, 16) + "..." : str;
            } else {
                return "暂无主演";
            }
        },
    },
};
</script>

<style scoped>
.main {
    /* margin-top: 10px; */
    margin-bottom: 50px;
}
.one {
    background: #fff;
    display: flex;
    border-bottom: 1px solid rgb(248, 245, 245);
}
.card {
    width: 80%;
    background: #fff;
}
.right {
    width: 20%;
    text-align: center;
}
.buyBtn {
    margin: 50% auto;
}
.title {
    font-size: 16px;
    color: #191a1b;
}
.filmType {
    color: #fff;
    background: #d2d6dc;
    font-size: 9px;
    padding: 1px 4px;
}
.grade {
    color: #ffb232;
    font-size: 14px;
}
.thumb {
    width: 66px;
    height: 100%;
    border-radius: 0;
}
/* 重新定义vant的卡片组件缩略图的宽度 */
.van-card__thumb {
    width: 70px;
}
.desc {
    color: #797d82;
    font-size: 13px;
    margin-top: 5px;
}
</style>

~~~



### 2.2、实现即将上映列表

- 作业
- 注意点：
  - 按钮上的文案变化为“预购”
  - 电影描述的地方有一个`上映时间`字段，该字段对应接口响应中的`premiereAt`字段，该字段格式是时间戳，单位秒，记得转化



### 2.3、电影详情的实现

思路：

- 产生电影详情的组件和路由规则

- 赋予每个电影内容一个点击事件，允许其被点击，并且在点击事件中要有一个编程式路由且携带电影的id号（动态路由参数的形式传递电影的id号）
- 进入详情组件之后获取电影的id号，依据id号获取电影详情内容
- 再使用插值/循环等模板语法进行对内容的输出



a. 创建空白组件及路由规则

组件位置：src/views/Films/Detail.vue

~~~js
// src/router/modules/films.js
// 电影详情
{
    path: "/film/:filmID",
    component: Detail
}
~~~

b. 给卡片添加点击事件，点击之后跳转到详情页面去

~~~vue
<van-card v-for="item in film_list" :key="item.filmId" @click="show_detail(item.filmId)">
~~~

 对应的事件处理程序：

~~~js
// 去详情
show_detail(filmID) {
    this.$router.push("/film/" + filmID);
},
~~~

c. 在详情组件中获取id号，并依据id号获取电影详情

先在地址配置文件src/config/uri.js中配置详情的地址：

~~~js
// 获取电影详情信息
getDetail: prefix + "getFilmInfo",
~~~

d. 使用模板语法输出基本的数据

在做基础数据展示的时候要考虑上映时间格式处理，先安装moment包（npm i -S moment），然后创建过滤器对时间进行处理：

~~~js
// 导入moment包
import moment from "moment"

// 过滤器
filters: {
    // 处理时间戳
    parseTime(timestamps) {
        // 语法：moment(时间戳).format(格式化)
        return moment(timestamps * 1000).format("YYYY-MM-DD");
    },
},
~~~

演职人员（包括后面的剧照）使用的时候一种可以滑动的效果，对于这种滑动/轮播的效果，一般前端采用swiper来实现（swiper一般分为两类，主流前端组件库自带的和独立于组件库的swiper）当前组件库vant中的swipe组件只能实现全屏的滚动效果，不能实现演职人员需求效果，因此本功能的实现是需要借助于独立于vant组件库的第三方组件：swiper，地址：https://www.swiper.com.cn/

采用ES6模块化规范使用swiper

1. 安装swiper：npm i -S swiper@6.8.1
2. 注意点：在我们使用真实的数据去结合swiper使用的时候，会出现只看到第一张图片的情况，后续图片虽然有，但是无法滑动，即便滑动了释放鼠标又回去了。原因是之前实现demo的时候数据是死的，因此swiper知道有多少个元素，给多大的宽度；但是现在数据真实了，数据是通过异步获取再赋值、再循环产生的，这个过程的执行远远比new swiper来的慢一些，swiper实例就在产生的时候是无法得知有多少个子元素需要展示，也就无法计算出应该给大的div多大宽度，因此显示异常。
3. 虽然使用定时器可以解决上述的问题，但是代码不够优雅，第二个原因是时间设置成多少我们无法准确获知，因此不建议使用。请使用vue里提供的异步渲染方法：this.$nextTick。语法如下：

~~~js
this.$nextTick(() => {
    // 等待异步结束之后再去执行里面的代码
})
~~~

具体实现：

~~~js
created() {
    // 获取电影id号
    let filmID = this.$route.params.filmID;
    this.$http.get(uri.getDetail + "?filmId=" + filmID).then((res) => {
        this.filmInfo = res.data.film;
        // 演职人员信息只有在接口获取到数据之后才有
        // 定时器可以解决异步渲染的问题（但是不推荐）
        // setTimeout(() => {
        //     new Swiper(".swiper-container", {
        //         // 每页显示4个
        //         slidesPerView: 4,
        //         // 每个之间的间距
        //         spaceBetween: 30,
        //     });
        // }, 1000);
        // vue中nextTick
        this.$nextTick(() => {
            new Swiper(".swiper-container", {
                // 每页显示4个
                slidesPerView: 4,
                // 每个之间的间距
                spaceBetween: 30,
            });
        })
    });
},
~~~

 4. 图片在加载的时候可能因为网络及图片的大小导致图片的加载时候过长，然后突然一下蹦跶出来了，对于用户体验不是很好，此处可以进行优化：使用图片懒加载（在网络图片加载时，先用一个体积小、样式统一、带有公司/项目标识的图片替代，等待网络图片请求完毕后，再做替换）。

    1. 安装一个三方包：vue-lazyload（npm i -S vue-lazyload）

    2. 需要找一张用于替代显示的图片（真实项目中一般设计会提供，带有企业logo或者项目logo的图片）

    3. 在项目入口文件main.js中做出如下代码操作（指定图片）

       ~~~js
       // 导入懒加载
       import VueLazyload from "vue-lazyload";
       // 使用懒加载指定图片
       Vue.use(VueLazyload, {
           loading: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.lgpc.com.cn%2F1%2Fimg%2Ftime.gif&refer=http%3A%2F%2Fwww.lgpc.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1627874508&t=e726a0c4aeab3d62e454a2f98ce9fb33",
       });
       ~~~

    4. 只需要在需要懒加载的图片位置，将原本的src属性名，改成`v-lazy`指令即可，例如电影详情中的海报的展示：

       ~~~html
       <!-- 海报 -->
       <div class="poster">
           <img v-lazy="filmInfo.poster" width="100%" alt="" />
       </div>
       ~~~

       



# 四、Vuex

## 1、vuex是什么？

vuex是一种项目中数据共享的方式。

![vuex](https://storage.lynnn.cn/assets/markdown/91147/pictures/2020/08/1f5b60f8db5ab9b0306394aa7411e2354f240fce.jpeg?sign=95117e4a25b3517dcfc95186e3a75ce1&t=5f43b9a3)

其具有以下优势：

- 能够在vuex中**集中管理**共享的数据，便于开发和后期进行维护
- 能够高效的实现组件之间的数据共享，提高开发效率（**代码量**）
- 存储在vuex中的数据是**响应式**的，当数据发生改变时，页面中的数据也会同步更新

**什么样的数据适合存储在Vuex中？**

一般情况下，只有组件之间共享的数据才有必要存储到vuex中，对于组件中私有的数据依旧存储在组件自身的data中即可。

注意事项：由于vue项目一刷新就会重新编译，因此每次刷新都会重新初始化vuex中的数据，会导致之前的数据丢失，因此vuex中一般不保存非常重要的数据。（jwt的数据不要往vuex中放）



## 2、vuex的安装及配置

vuex不是脚手架在安装项目的时候自带的，是一个选配的功能，默认是不被安装的（需要自己根据需要选择）。因此其安装和配置存在两种情况：

**情况1：在通过vue脚手架`vue create xxxx`的命令的时候，手动选择安装vuex【极力推荐】**。好处在于不需要自己手动创建`store`目录及目录下的`index.js`文件。

情况2：在通过vue脚手架`vue create xxxx`的命令的时候，可能没有选择安装vuex，则这个时候我们有两种选择：

- 删了重来，再建立项目的时候选择安装vuex
- 当然也可以通过命令来补救安装，但是通过命令后续安装的vuex，需要自己创建`store`目录和其下的`index.js`文件
  - npm i -S vuex



## 3、vuex核心

- state：提供唯一公共数据源，所有的共享数据都要统一放到state中进行存储

~~~javascript
// 在组件中访问state数据的第一种方式（单个）
this.$store.state.全局数据名称
~~~

~~~javascript
// 在组件中访问state数据的第二种方式（批量）
// 按需导入mapState函数
import {mapState} from 'vuex'
// 将全局函数映射为当前组件的计算属性
computed: {
    ...mapState(['count'])
}
~~~

> **第二种方式映射过来的情况，其数据的使用方式如同在当前组件中使用自身的data数据一样（下同）**。
>
> - 在视图中，就直接插值表达式
> - 在js中就`this.xxxx`

- mutation(s)：用于变更store中的数据（修改）
  - 在Vuex中**只能**通过mutation变更store中的数据，不可以直接操作store中的数据
  - 通过这种方式操作起来稍微繁琐一些，但是可以集中监控所有数据的变化

~~~javascript
// 定义mutations
const sotre = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        add(state[,arg]){
            // 变更状态
            state.count++
        }
    }
})
~~~

~~~javascript
// 组件中触发mutation的第一种方式
methods:{
    handle(){
        this.$store.commit('add'[,arg])
    }
}
~~~

~~~javascript
// 组件中触发mutation的第二种方式
import {mapMutations} from 'vuex'
methods:{
    ...mapMutations(['add','reduce']),
    handle1(){
        this.add()
    },
    handle2(){
        this.reduce([arg])
    }
}
~~~

> **==不要在mutation中写异步的代码==**
>
> 在mutation中混合异步调用会导致你的程序很难调试。每个mutation执行完成后都会对应到一个新的状态变更，这样devtools就可以打个快照存下来，然后就可以实现 time-travel 了。如果mutation支持异步操作，就没有办法知道状态是何时更新的，无法很好的进行状态的追踪，**给调试带来困难**。

- action(s)：用于处理==异步==操作任务

~~~javascript
// 声明action
const store = new Vuex.Store({
    // 省略其他代码
    mutations: {
        add(state){
            state.count++
        }
    },
    actions: {
        addAsync(context[,arg]){
            setTimeout(() => {
                context.commit('add'[,arg])
            },1000)
        }
    }
})
~~~

~~~javascript
// 组件中触发action
methods: {
    handle(){
        this.$store.dispach('addAsync'[,arg])
    }
}
~~~

> action也是支持如同state、mutation一样的按需导入mapActions方式进行触发。

- getter(s)：对store中已有的数据加工处理形成新的数据
  - 对已有的数据进行加工除了，类似于Vue的计算属性
  - store数据发生变化，则getter中的数据也会跟着变化

~~~javascript
// 定义getter
....
getters: {
    showNum: state => {
        return '当前最新的数量是【' + state.count + '】'
    }
}
~~~

~~~javascript
// 在组件中访问getters数据的第一种方式
this.$store.getters.全局数据名称
~~~

~~~javascript
// 在组件中访问getters数据的第二种方式
// 按需导入mapGetters函数
import {mapGetters} from 'vuex'
// 将全局函数映射为当前组件的计算属性
computed: {
    ...mapGetters(['showNum'])
}
~~~

Vuex工作流程图：

![](https://storage.lynnn.cn/assets/markdown/91147/pictures/2021/09/2c7a75bfb43ba2413589db43bcd29f4e46e85139.png?sign=0470cbe1879537c29e40296aec3104c4&t=61317d8e)



## 4、模块化

- 为什么有状态的模块化？
  - 主要是因为项目是多人协作开发的，如果都去修改一个文件，则经常会出现代码冲突，而解决冲突比较费事费力。

- 使用步骤
  - 建立src/store/modules文件夹（名称随意）
  - 在modules文件夹中建立需要的模块文件（命名以功能为导向，记得导出一下）
- 注意点1（了解）：
  - 在模块的时候，因为多人合作，不能的开发者之前并不清楚其他怎么给方法和数据源进行命名，这样的话就有一个问题：万一名称重名怎么办？如果冲突了，会执行以下合并策略：
    - state数据源肯定不会冲突，它以模块进行保存
    - mutations、actions的方法不会以模块为单位进行保存，如果出现同名则可能会冲突。vuex会先将这些同名的方法，整合到一起，**都去执行**。会先执行index.js中的，再去执行其他的。
    - getters如果出现冲突，不给解决，直接报错。
  - 因为多人合作可能出现命名的冲突，特别针对getters，vuex模块化的时候支持使用`命名空间`
    - 默认是没有给模块开启命名空间的
    - 如果需要请自己开启，通过模块对象的属性“namespaced”，将其值设置为true
    - 命名空间的名称，是模块的名字（模块里面属性的名字）
- 注意点2：由于模块使用了命名空间，所以之前没有模块化的使用方式（this、map系列）在模块化之后都要发生对应的变化
  - state
    - this形式：this.$store.state.**空间名**.xxxx
    - map系列：...mapSate(**空间名**,[xxxx,yyyy,zzzz...])
  - mutations
    - this形式：this.$store.commit("**空间名**/方法名", "参数");
    - map系列：...mapMutations("**空间名**",["方法名",...]),
  - actions
    - this形式：this.$store.dispatch("**空间名**/方法名", "参数");
    - map系列：...mapActions("**空间名**",["方法名",...]),
  - getters
    - this形式：this.$store.getters["**空间名**/属性名"]
    - map形式：...mapActions("**空间名**", ["属性名",....]),



## 5、案例：适时隐藏底部菜单

需求：例如卖座，在首页的时候默认显示底部的菜单栏，但是**当进入到**电影详情、登录、城市选择页面的时候，菜单会自动隐藏，但是**一旦离开**上述页面的时候菜单又会显示处理。

思路：通过上述描述，不难看出本案例需要使用到**生命周期、组件通信以及逻辑控制指令**。

a. 先创建一个vuex模块，供是否显示底部菜单使用。

模块文件：src/store/modules/common.js

~~~js
// 定义基本的内容
const common = {
    namespaced: true,
    state: {
        // 设置默认是否显示底部菜单
        isShow: true,
    },
    mutations: {
        // 设置默认是否显示底部菜单
        setIsShow(state, param) {
            state.isShow = param;
        },
    },
    actions: {
        setIsShowAsync(context, param) {
            setTimeout(() => {
                context.commit("setIsShow", param);
            }, 500);
        },
    },
    getters: {
        getIsShow(state) {
            return state.isShow ? "显示" : "隐藏";
        },
    },
};

export default common;
~~~

b. 在vuex主入口文件中导入模块化好的文件

~~~js
import common from "./modules/common"
~~~

c. 在对应的位置上应用刚才写好的模块

~~~js
modules: {
    users,          // users: users,
    goods,          // goods: goods,
    common,         // common: common
},
~~~

d. 在根组件中设置底部是否显示

~~~vue
<!-- 使用全局导航组件 -->
<GlobalTabBar v-show="$store.state.common.isShow"/>
~~~

e. 需要在进入详情的时候隐藏底部菜单（进入详情的时候[created周期]需要设置vuex，将isShow设置为false）

~~~js
this.$store.commit("common/setIsShow", false);
~~~

f. 在离开详情组件的时候设置底部菜单显示（离开的时候就是销毁的时候）

~~~js
// 导入映射函数
import { mapMutations } from "vuex";

// 在方法中映射修改状态的函数
methods: {
	...mapMutations("common", ["setIsShow"]),
},
// 将要离开时显示底部菜单
beforeDestroy() {
    this.setIsShow(true);
},
~~~



# 五、功能开发（二）

# 1、城市列表

步骤：

- 展示视图
  - 创建空白组件
  - 创建路由
- 请求数据
- 按照vant组件的需要处理数据，最终展示完毕



