<template>
  <div class="bg">
    <div class="login">
      <ul>
        <li>
          <span>账号：</span>
          <input type="text" placeholder="手机号或邮箱" />
        </li>
        <li>
          <span>密码：</span>
          <input type="text" placeholder="请输入密码" />
        </li>
      </ul>
      <p class="forget">忘记密码？</p>
      <button>登录</button>
    </div>
    <div class="other">
      <div class="other_login">
        <img :src="imgUrl" @click="change" />
        <p>其他方式登录</p>
      </div>
      <div class="other_app" v-show="isShow">
        <button>
          <span class="app"></span>
          <span>微信登录</span>
        </button>
        <button>
          <span class="app"></span>
          <span>QQ登录</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      isShow: false,
      imgUrl: "/static/切图/icon_jiantou_up@2x.png"
    };
  },
  methods:{
      change(){
          this.isShow = !this.isShow;
          if(this.isShow){
              this.imgUrl = "/static/切图/icon_jiantou_down@2x.png"
          }else{
              this.imgUrl = "/static/切图/icon_jiantou_up@2x.png"
          }
      }
  }
};
</script>

<style scoped>
.bg {
  height: 100%;
  background-color: #efeff4;
}
.login {
  /* background-color: #efeff4; */
  overflow: hidden;
}
.login > ul {
  margin: 0.15rem;
  overflow: hidden;
  border-radius: 0.08rem;
  letter-spacing: 0.01rem;
  margin-bottom: 0.15rem;
}
.login > ul > li {
  background-color: #fff;
  width: 6.08rem;
  padding: 0 0.18rem;
  font-size: 0.24rem;
  height: 0.62rem;
  line-height: 0.62rem;
  display: flex;
  box-sizing: border-box;
}
.login > ul > li:first-child {
  border-bottom: 0.01rem solid #dedede;
}

.login > ul > li > input {
  font-size: 0.2rem;
  flex: 1;
  border: none;
  margin: 0.05rem;
}
.login > .forget {
  font-size: 0.2rem;
  color: #246cff;
  margin: 0 0 0.4rem 0.33rem;
}
.login > button {
  display: block;
  width: 6.08rem;
  margin: 0 auto;
  height: 0.64rem;
  font-size: 0.24rem;
  color: white;
  background-color: #246cff;
  outline: none;
  border: none;
  border-radius: 0.08rem;
}
.other {
  position: absolute;
  bottom: 0;
  width: 100%;
}
.other_login {
  width: 100%;
  height: 0.82rem;
  background: url("/static/自己切图/个人中心/login_bg.png") no-repeat center;
  background-size: cover;
}
.other_login > img {
  position: absolute;
  width: 0.24rem;
  height: 0.14rem;
  left: 50%;
  margin-left: -0.12rem;
  top: 0.09rem;
}
.other_login > p {
  font-size: 0.2rem;
  color: #666;
  padding-top: 0.47rem;
  text-align: center;
}
.other_app {
  background-color: #fff;
  padding: 0.35rem 0 0.7rem;
}
.other_app button {
  margin: 0 auto;
  letter-spacing: 0.01rem;
  width: 3.47rem;
  height: 0.67rem;
  font-size: 0.24rem;
  color: white;
  border-radius: 0.3rem;
  border: none;
  outline: none;
  line-height: 0.67rem;
  display: flex;

  justify-content: center;
  align-items: center;
}
.other_app button:first-child {
  margin: 0rem auto 0.32rem;
  background-color: #4ab218;
}

.other_app button:last-child {
  background-color: #12a7ed;
}
.other_app button:first-child > .app {
  background-image: url("/static/切图/share_weixin.png");
}
.other_app button:last-child > .app {
  background-image: url("/static/切图/share_qq.png");
}
.other_app button > .app {
  display: inline-block;

  width: 0.45rem;
  height: 0.45rem;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>