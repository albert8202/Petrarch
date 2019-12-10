import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import MyProject from '@/components/MyProject'
import Configuration from '@/components/Configuration'
import ArticleDetail from '@/components/ArticleDetail'
import Register from '@/components/Register'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'HelloWorld',
      component: HelloWorld
    },
    //注册
    {
      path:'/register',
      name:'Register',
      component:Register,
      meta:{
        keepAlive:false
      }
    },
    //登录
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        keepAlive: false
      }

    },
    //我的项目
    {
      path: '/myProject',
      name: 'MyProject',
      component: MyProject,
      meta: {
        keepAlive: true
      }

    },
    //分析配置
    {
      path: '/configuration',
      name: 'Configuration',
      component: Configuration,
      meta: {
        keepAlive: true
      }
    },
    //详情
    {
      path:'/articleDetail',
      name:'ArticleDetail',
      component: ArticleDetail,
      meta:{
        keepAlive:true
      }
    }

  ]
})
