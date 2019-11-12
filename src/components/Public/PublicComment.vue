<template>
  <div class="publicComment">
    <p>
      <span>网友评论</span>
      <span>3.0万条</span>
    </p>
    <ul>
      <li v-for="(item,index) in arr" :key="index">
        <div class="top">
          <div class="top_left">
            <img :src="item.url" alt />
            <span v-text="item.name"></span>
          </div>
          <p class="top_right" v-text='item.time'></p>
        </div>
        <p class="content" v-text='item.content'></p>
        <div class="btm">
          <span v-text='item.Reply'></span>
          <div>
            <button><img src="/static/切图/icon_pinglun_button@2x.png" alt=""></button>
            <button><img src="/static/切图/icon_zan_button@2x.png" alt=""></button>
          </div>
        </div>
      </li>
    </ul>
    <div class="bottom">
      <input type="text" placeholder="写评论">
      <img src="/static/切图/icon_detail_share@2x.png" alt="">
      <img src="/static/切图/icon_detail_xiazai@2x.png" alt="">
      <img src="/static/切图/icon_detail_jiaru@2x.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "PublicComment",
  data() {
    return {
      arr: [
        {
          url: "/static/切图/btn_pinglun_touxiang@2x.png",
          name: "我就是阿翔",
          time: "2015-09-14",
          content: "今天是胜利日，看了阅兵，感觉到了各种正能量。事后想想，我是通过什么途径感受到的呢？媒介！这是一个时时刻刻都在我们身边，却容易被我们忽略的东西... ...新华社和人们日..",
          Reply: "查看全部20条回复"
        },
        {
          url: "/static/切图/btn_pinglun_touxiang@2x.png",
          name: "我就是阿翔",
          time: "2015-09-14",
          content: "今天是胜利日，看了阅兵，感觉到了各种正能量。事后想想，我是通过什么途径感受到的呢？媒介！这是一个时时刻刻都在我们身边，却容易被我们忽略的东西... ...新华社和人们日..",
          Reply: "查看全部20条回复"
        }
      ]
    };
  }
};
</script>

<style scoped>
.publicComment{
  width:100%;
}
.publicComment>P{
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding:0 .2rem .1rem .35rem;
  margin-left: .05rem;
  position:relative;
  border-bottom:.01rem solid #ccc;
}
.publicComment>P::before{
  content: '';
  width:.06rem;
  height:.3rem;
  background-color:red;
  border-radius: .04rem;
  position:absolute;
  left:.15rem;
  top: 0;
}
.publicComment>P>span:first-of-type{
  font-size:.23rem;
}
.publicComment>P>span:last-of-type{
  font-size:.18rem;
  color:#999;
}
.publicComment>ul>li{
  padding-top:.3rem;
}
.publicComment>ul>li>.top{
  display:flex;
  justify-content: space-between;
  padding: 0 .22rem 0 .18rem;
  align-items: center;
  margin-bottom: .1rem;
}
.publicComment>ul>li>.top>.top_left{
  display: flex;
  align-items: center;
  font-size: .16rem;
  color: blue;
}
.publicComment>ul>li>.top>.top_left>img{
  width:.5rem;
  margin-right: .1rem;
}
.publicComment>ul>li>.top>.top_right{
  font-size:.12rem;
  color: #999;
}
.publicComment>ul>li>.content{
  font-size:.16rem;
  line-height:.25rem;
  color:#666;
  padding: 0 .18rem 0 .25rem;
  text-align: justify;
}
.publicComment>ul>li>.btm{
  padding: .1rem 0 .05rem;
  margin:0 .2rem 0 .25rem;
  border-bottom:.01rem solid #ccc;
  display:flex;
  justify-content: space-between;
  align-items: center;
  color: #999;
  font-size:.14rem;
}
.publicComment>ul>li:last-of-type>.btm{
  border: none;
}
.publicComment>ul>li>.btm>div>button{
  width: .8rem;
  height: .44rem;
  border: none;
  outline: none;
  padding:0;
  background-color: transparent;
}
.publicComment>ul>li>.btm>div>button>img{
  width: 100%;
}
.publicComment>.bottom{
  margin-top:.55rem;
  background-color: #eee;
  padding:.2rem 0;
  display: flex;
}
.publicComment>.bottom>input{
  width:3.93rem;
  height:.45rem;
  border: .01rem solid #ccc;
  border-radius: .23rem;
  padding:0 .25rem 0 .55rem;
  background: url(/static/切图/icon_write_pinglun@2x.png) .15rem center no-repeat white;
  background-size: .36rem;
  margin:0 .3rem 0 .15rem;
}
.publicComment>.bottom>img{
  width: .46rem;
}
.publicComment>.bottom>img:nth-of-type(2){
  margin:0 .14rem 0 .19rem;
}
</style>