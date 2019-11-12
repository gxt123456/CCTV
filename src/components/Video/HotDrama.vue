<template>
  <div class="hotdrama">
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <div class="div_img">
          <img :src="item.url" class="bkg" />
          <img src="/static/切图/star_play@2x.png" class="play" />
          <p class="collectionNum">{{item.collectionNum | change_state(item.state)}}</p>
          <p class="serialNum" v-text="index+1"></p>
        </div>
        <div class="title">
          <h3 v-text="item.title"></h3>
          <span v-text="item.comment"></span>
        </div>
        <div class="foot_">
          <ul class="ji" v-if="item.fut" :class="{active:index==num}">
            <li v-for="(it,ind) in item.collectionNum" :key="ind" v-text="ind+1"></li>
          </ul>
          <p class="geduo" @click.stop="more(index)" v-show="item.fut">。 。 。</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HotDrama",
  data() {
    return {
      list: [
        {
          url: "/static/自己切图/电视/tv1.png",
          collectionNum: 38,
          state: false,
          title: "北上广不相信眼泪",
          comment: 8.9,
          fut: true
        },
        {
          url: "/static/自己切图/电视/tv2.png",
          collectionNum: 38,
          state: false,
          title: "花千骨",
          comment: 8.9,
          fut: false
        },
        {
          url: "/static/自己切图/电视/tv3.png",
          collectionNum: 38,
          state: true,
          title: "爱情公寓",
          comment: 8.9,
          fut: false
        }
      ],
      num:-1
    };
  },
  filters: {
    change_state(n, s) {
      let sta = "";
      s == true ? (sta = "全" + n + "集") : (sta = "更新至" + n + "集");
      return sta;
    }
  },
  methods:{
      more(index){
          index==this.num?this.num=-1:this.num=index
      }
  }
};
</script>

<style scoped>
.hotdrama > ul > li {
  margin-bottom: 0.15rem;
  border: 0.01rem solid #999;
}
.hotdrama > ul > li > .div_img {
  position: relative;
}
.hotdrama > ul > li > .div_img > .bkg {
  width: 100%;
}
.hotdrama > ul > li > .div_img > .play {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 0.92rem;
}
.hotdrama > ul > li > .div_img > .collectionNum {
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 0.16rem;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 0.12rem 0.18rem;
  color: white;
}
.hotdrama > ul > li > .div_img > .serialNum {
  width: 0.52rem;
  height: 0.6rem;
  position: absolute;
  top: -0.03rem;
  left: -0.03rem;
  font-size: 0.22rem;
  /* text-shadow: 0 0 5px black; */
  color: white;
  font-weight: 900;
  background: url(/static/自己切图/电视/tv10.png) no-repeat;
  background-size: 100%;
  padding: 0.04rem 0 0 0.04rem;
}
.hotdrama > ul > li > .title {
  padding: 0 0.18rem 0.06rem 0.12rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 0.75rem;
}
.hotdrama > ul > li > .title > span {
  font-size: 0.2rem;
  color: orange;
}
.hotdrama > ul > li > .title > h3 {
  font-size: 0.23rem;
}
.hotdrama > ul > li > .foot_ {
    position: relative;
}
.hotdrama > ul > li > .foot_ > ul{
    height: .75rem;
    overflow:hidden;
    display: flex;
    flex-wrap: wrap;
    border-top: .01rem solid #ccc;
}
.hotdrama > ul > li > .foot_ > ul > li{
    width:20%;
    text-align: center;
    height: .75rem;
    line-height: .75rem;
    font-size: .18rem;
    border-right: .01rem solid #ccc;
    border-bottom:.01rem solid #ccc;
}
.hotdrama > ul > li > .foot_ > .geduo{
    width: 1.2rem;
    height: .7rem;
    font-size: .2rem;
    position: absolute;
    right: 0;
    bottom: .03rem;
    background-color: white;
    line-height: .6rem;
    text-align: center;
}
.hotdrama > ul > li > .foot_ > .active{
    overflow: auto;
    height: 100%;
}
</style>