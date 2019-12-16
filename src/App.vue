<template>
  <div id="app">
    <section v-if="$route.meta.keepAlive">
      <nav class="navBar" style="z-index: 1;">

        <Menu  mode="horizontal" :theme="theme1" avtive-name="1" @on-select="onSelect">
          <template>
            <img src="../static/img/logo.png" />
          </template>
          <Submenu name="1" style="float: right">
            <template slot="title">
              <el-icon class="el-icon-s-custom"/>
              萌泰科技
            </template>
            <MenuItem name="Personal" >个人账户</MenuItem>
            <MenuItem name="LogOut">退出</MenuItem>

          </Submenu>
          <MenuItem name="AnalysisMenu"  style="float: right" >
            <el-icon class="el-icon-set-up"></el-icon>
            分析配置
          </MenuItem>
          <MenuItem name="MyProject" style="float: right" >
            <el-icon class="el-icon-s-custom"/>
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
