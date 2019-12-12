<template>
  <div id="app">
    <section v-if="$route.meta.keepAlive">
      <nav class="navBar" style="z-index: 1;">

        <Menu  mode="horizontal" :theme="theme1" avtive-name="1" @on-select="onSelect">
          <div router-link="{path: '/'}" style="float: left">这是萌泰科技的图标</div>
          <Submenu name="1" style="float: right">
            <template slot="title">
              <Icon type="ios-people"/>
              萌泰科技
            </template>
            <MenuItem name="Personal" >个人账户</MenuItem>
            <MenuItem name="LogOut">退出</MenuItem>

          </Submenu>
          <MenuItem name="AnalysisMenu"  style="float: right" >
            <Icon type="md-analytics"/>
            分析配置
          </MenuItem>
          <MenuItem name="MyProject" style="float: right" >
            <Icon type="ios-paper"/>
            我的项目
          </MenuItem>


        </Menu>
      </nav>
    </section>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        theme1: 'light'
      }
    },
    methods:{
      onSelect(d) {
        this.$router.push({ path: "/" + d });
      }
    }
  }
</script>
<style scoped>
  .ivu-menu {
     background-color: #e6e6e6;

  }
  .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item:hover, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu:hover {
    color: white;
    background-color: #ff3333;
    border-bottom: 2px solid #ff3333;
  }


</style>
<style>

</style>
