<template>
  <div class="PublicDetail">
    <ul>
      <li v-for="(item,index) in arr" :key="index">
        <div class="top">
          <div class="top_left">
            <img :src="item.url" alt />
            <span v-text="item.name"></span>
          </div>
          <p class="top_right" v-text="item.time"></p>
        </div>
        <p class="content" v-text="item.content"></p>
      </li>
    </ul>
    <div class="banner_img">
      <img src="/static/切图/queen.png" alt />
    </div>
    <div class="give_like">
      <span class="like_img" @click="add"></span>
      <div class="user">
        <span v-for="(item,index) in like_data.userName" :key="index" v-html="item"></span>
        &nbsp;等{{ like_data.num }} 个赞
      </div>
    </div>
    <div class="comment">
      <ul>
        <li v-for="(item,index) in comment_data" :key="index" @click="comment(index)">
          <span>{{item.name}}</span>：
          <span>{{item.content}}</span>
        </li>
      </ul>
    </div>
    <div class="reply" v-show="com_show">
      <input type="text" class="ipt" :placeholder="defalut_com" />
      <span></span>
    </div>
    <div class="other" v-show="!com_show"></div>
  </div>
</template>

<script>
export default {
  name: "PublicDetail",
  methods: {
    add() {
      if (this.like_data.flag) {
        let name = this.arr[0].name;
        this.like_data.userName.push(name);
        this.like_data.num++;
        this.like_data.flag = false;
      }
    },
    comment(i) {
      let name = this.comment_data[i].name;
      console.log(name);
      this.defalut_com = "回复" + name + "：";
      console.log(this.comment_data[i].name);
      this.com_show = true;
    }
  },
  data() {
    return {
      arr: [
        {
          url: "/static/切图/btn_pinglun_touxiang@2x.png",
          name: "我就是阿翔",
          time: "2015-09-14",
          content:
            "今天是胜利日，看了阅兵，感觉到了各种正能量。事后想想，我是通过什么途径感受到的呢？媒介！这是一个时时刻刻都在我们身边，却容易被我们忽略的东西... ...新华社和人们日..",
          Reply: "查看全部20条回复"
        }
      ],
      like_data: {
        userName: [
          "浅唱",
          "聆听_。",
          "微蓝",
          "桃子",
          " ",
          "梅梅",
          "幸福式微笑",
          "看xx+薇simishi88888",
          "大傻",
          "1.个卜懂低调昀傻世久",
          "xx片+qq3310217090"
        ],
        num: 24845,
        flag: true
      },
      comment_data: [
        { name: "锋", content: "看见换头像怪就烦" },
        { name: "", content: "说得好" },
        { name: "王国建", content: "听说在郑州那边一分钟是60秒" },
        { name: "路人甲", content: "楼上是傻子吧!" }
      ],
      com_show: false,
      defalut_com: "回复"
    };
  }
};
</script>

<style scoped>
.PublicDetail {
  width: 100%;
}
.PublicDetail > ul > li {
  padding-top: 0.3rem;
}
.PublicDetail > ul > li > .top {
  display: flex;
  justify-content: space-between;
  padding: 0 0.22rem 0 0.18rem;
  align-items: center;
  margin-bottom: 0.1rem;
}
.PublicDetail > ul > li > .top > .top_left {
  display: flex;
  align-items: center;
  font-size: 0.16rem;
  color: blue;
}
.PublicDetail > ul > li > .top > .top_left > img {
  width: 0.5rem;
  margin-right: 0.1rem;
}
.PublicDetail > ul > li > .top > .top_right {
  font-size: 0.12rem;
  color: #999;
}
.PublicDetail > ul > li > .content {
  font-size: 0.16rem;
  line-height: 0.25rem;
  color: #666;
  padding: 0 0.18rem 0 0.25rem;
  text-align: justify;
}
.banner_img {
  text-align: center;
  margin-top: 0.2rem;
  margin-bottom: 0.3rem;
}
.banner_img > img {
  width: 6.08rem;
  height: 3.2rem;
}
.give_like {
  padding: 0 0.22rem 0.1rem 0.18rem;
  display: flex;
  font-size: 0.18rem;
}
.give_like > .like_img {
  /* display: inline-block; */
  width: 0.8rem;
  height: 0.44rem;
  background-image: url("/static/切图/icon_zan_button@2x.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.give_like > .user {
  flex: 1;
}
.give_like > .user > span {
  display: inline-block;
  height: 0.4rem;
  line-height: 0.44rem;
  letter-spacing: 0.01rem;
  color: #5289bd;
}
.give_like > .user > span::after {
  content: "、";
}
.give_like > .user > span:last-child:after {
  content: "";
}
.comment {
  padding: 0 0.22rem 0 0.18rem;
  font-size: 0.18rem;
}
.comment > ul > li {
  margin-bottom: 0.2rem;
}
.comment > ul > li > span:first-child {
  color: #5289bd;
  line-height: 0.2rem;
}
/* 空白 */
.reply {
  height: 5.3rem;
  padding: 0.1rem;
  box-sizing: border-box;
  display: flex;
}
.reply > .ipt {
  width: 5.4rem;
  height: 0.4rem;
  line-height: 0.18rem;
  font-size: 0.18rem;
  /* text-align: center; */
  margin-top: 0.01rem;
  background-color: #f5f7f9;
  border: none;
  border-radius: 0.05rem;
}
.reply > span {
  /* margin-top: 0.01rem; */
  /* display: inline-block; */
  width: 0.7rem;
  height: 0.44rem;
  background-image: url("/static/切图/icon_zan_button@2x.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.other {
  height: 5.3rem;
}
</style>