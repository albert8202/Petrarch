<template>
  <div id="LoginPage">
    <loadingAnimate v-if="loading" class="center-fix"/>
    <div id="head-div">
      <div id="logo" >
        <img src="static/icons8_planet_on_the_dark_side_128px.png" width="80" height="80">
      </div>
      <div id="WebName" style="font-size: 30px;color: white;float: left;margin-top: 43px;margin-left: 10px">
        锐研·云质析
      </div>
    </div>
    <div class="LoginFormContainer">
      <div class="Wrapper">
        <div class="LoginText">
          <span>登录</span>
        </div>
        <div class="ErrHint alert alert-danger" v-if="errHint">
          {{ errHint }}
        </div>
        <div class="LoginInput" >
          <div class="account">
            <input size="large" type="text" v-model="email" placeholder="邮箱" @keyup.enter="loginEventHandeler"></input>
          </div>
          <div class="password">
            <input size="large" type="password" v-model="password" placeholder="密码" @keyup.enter="loginEventHandeler"></input>
          </div>
        </div>
        <div class="Submit">
          <button class="btn submit" type="button" @click="login">登录</button>
        </div>
      </div>
    </div>
    <div class="RegistHint">
      <div class="Wrapper">
        <div class="hint" style="padding-left: 165px">
          <span>还没有账号?</span>
          <router-link to="/register">赶紧注册一个叭 »</router-link>
        </div>
      </div>
    </div>
    <div id="buttom-div">
      <div id="buttom-content" style="color: white;">
        <p style="margin-left: 650px">关于我们    服务协议   隐私政策</p>
        <p style="margin-left: 600px">Copyright 2018 上海萌泰数据科技有限公司</p>
      </div>
    </div>
  </div>
</template>

<script>
 import userApi from "@/api/user";
 import authApi from "@/utils/auth";
    export default {
        name: "Login",
        data(){
          return{
            email: null,
            password: null,
            errHint: '',
            loading:false
          }
        },
        methods:{
            login(){
                userApi.login(this.email, this.password).then(response=>{
                    if (response.data.flag){
                        authApi.setUser(response.data.data.token, response.data.data.nickname);
                        location.href = '/myproject'
                    }else {
                        this.$message({
                            message: response.data.message,
                            type:  'error'
                        });
                        this.mobile= "";
                        this.password = "";
                    }
                })
            }

        },
}

</script>

<style scoped>
  #LoginPage {
    height: calc(100vh - 46px);
    /* padding-top: 10px; */
    background-color: #e6ecf0;
  }
  #head-div
  {
    top:0;
    height: 15%;
    width: 100%;
    background-color: #ff3333;
    margin-bottom: 100px;
  }
  #buttom-div
  {
    height: 15%;
    width: 100%;
    background-color: #ff3333;
    position: fixed;
    bottom: 0;
  }
  #logo
  {
    size: 20px;
    margin-top: 20px;
    margin-left: 20px;
    float: left;
  }
  #buttom-content
  {
    margin-top: 10px;
    margin-left: 40px;
    float: left;
    font-size: 17px;
    text-align: left;
  }
  .LoginFormContainer {
    max-width: 840px;
    padding: 15px;
    margin: 0 auto;
  }

  .LoginFormContainer {
    background-color: white;
  }

  .Wrapper {
    max-width: 585px;
    padding: 0 10px;
    margin: 0 auto;
  }

  .LoginText {
    font-size: 24px;
    font-weight: 600;
    margin-left: 220px;
    margin-bottom: 20px;
  }

  .LoginInput input {
    width: 97%;
    max-width: 280px;
    padding: 4px;
    border: 1px solid #e6ecf0;
    border-radius: 3px;
    outline: none;
    font-size: 14px;
    line-height: 20px;
    margin-left: 125px;
  }

  .LoginInput input:focus {
    outline: 0;
    color: #14171a;
    border-color: #ff3333;
  }

  .LoginInput .account {
    margin-bottom: 15px;
  }

  .Submit {
    margin-top: 30px;
  }

  .Submit button {
    background-color: #ff3333;
    border: 1px solid #ff3333;
    color: #fff;
    border-radius: 100px;
    box-shadow: none;
    cursor: pointer;
    font-size: 14px;
    line-height: 20px;
    padding: 6px 16px;
    position: relative;
    text-align: center;
    white-space: nowrap;
    margin-left: 210px;
  }

  .Submit button:hover {
    border-color: #ff3333;
    background-color: #ff3333;
    box-shadow: 0 0 0 2px #fff, 0 0 0 4px #ff3333;
  }

  .RegistHint {
    padding: 20px 10px;
    background-color: #f5f8fa;
    font-size: 14px;
    line-height: 20px;
    color: #657786;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    max-width: 840px;
    margin: 0 auto;
  }
  .center-fix{
    position: fixed;/*固定位置*/
    z-index:99;/*设置优先级显示，保证不会被覆盖*/
    margin:auto;
    left:0;
    right:0;
    top:0;
    bottom:0;
  }
</style>
