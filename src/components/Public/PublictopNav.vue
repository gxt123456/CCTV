<template>
  <div class="publictopnav" @click="show(false)">
    <div class="top">
      <img src="/static/切图/home-icon-list@2x.png" alt @click.stop="show(true)"/>
      <span>{{navlist[num].alias}}</span>
      <img src="/static/切图/icon_search@2x.png" alt @click="tiaosearch"/>
    </div>
    <div class="xiabian"></div>
    <div class="wai">
      <ul class="nav" :class="{active:leftflg}">
        <li v-for="(item,index) in navlist" :key="index"  @click='fn(index)'>
          <router-link :to="item.url" :class="{active:index==num}">{{item.content}}</router-link>
        </li>
      </ul>
      <a href="javascript:void(0);" :style="more()" class="btn" @click='leftflg=!leftflg'></a>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "PublictopNav",
  data() {
    return {
      navlist: [
        { url: "/home", content: "首页", alias: "CCTV手机电视" },
        { url: "/News", content: "新闻", alias: "CCTV手机电视" },
        { url: "", content: "体育", alias: "CCTV手机电视" },
        { url: "/hotdrama", content: "热剧", alias: "CCTV手机电视" },
        { url: "/movie", content: "电影", alias: "CCTV手机电视" },
        { url: "", content: "娱乐", alias: "CCTV手机电视" },
        { url: "", content: "直播", alias: "CCTV手机电视" },
        { url: "", content: "G 客", alias: "CCTV手机电视" }
      ],
      num: 0,
      leftflg:false
    };
  },
  methods:{
      fn(index){
          this.num!=index?this.num=index:index
      },
      more(){
        if(this.leftflg==true){
          return 'background-image:url(/static/切图/icon_jiantou_up@2x.png)'
        }
      },
	  show(val){
		  this.$emit('isshow',val)
	  },
	  tiaosearch(){
		   this.$router.push('Search');
	  }
  }
};
</script>

<style scoped>
.publictopnav > .top {
  height: 0.78rem;
  padding: 0 0.22rem 0 0.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.28rem;
}
.publictopnav > .top > img{
	width: .35rem;
}
.publictopnav > .xiabian {
  height: 0.03rem;
  background-image: linear-gradient(to right, #ba7ace, #5f70e2);
}
.publictopnav > .wai{
    width:100%;
    height: .74rem;
    overflow: hidden;
    position: relative;
		background-color: #F5F5F5;
}
.publictopnav > .wai>.btn{
    display: block;
    width: .45rem;
    height: .74rem;
    background:url(/static/切图/icon_jiantou_down@2x.png) no-repeat center center  #F5F5F5;
    background-size: .2rem;
    position: absolute;
    right: 0;
    top: 0;
    border-bottom: .04rem solid #ccc;
}
.publictopnav > .wai>.nav {
  display: flex;
  padding-right: 0.45rem;
  position: absolute;
}
.publictopnav > .wai>.active{
  left: -.85rem;
}
.publictopnav > .wai>.nav>li{
    width: .85rem;
    flex-shrink: 0;
	text-align: center;
}
.publictopnav > .wai>.nav>li>a{
    display: block;
    line-height: .7rem;
    font-size:.22rem;
    border-bottom: .04rem solid #ccc;
    color: #333;
}
.publictopnav > .wai>.nav>li>.active{
    border-color: #5f70e2;
    color:  #5f70e2;
}
</style>