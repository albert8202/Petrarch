import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import MyProject from '@/components/MyProject'
import Configuration from '@/components/Configuration'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/home',
      name:'HelloWorld',
      component:HelloWorld
    },
    //登录
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      meta:{
        keepAlive:true
      }

    },
    //我的项目
    {
      path:'/MyProject',
      name:'MyProject',
      component:MyProject,
      meta:{
        keepAlive:true
      }

    },
    //分析配置
    {
      path:'/Configuration',
      name:'Configuration',
      component:Configuration,
      meta:{
        keepAlive:true
      }

    }
  ]
})
