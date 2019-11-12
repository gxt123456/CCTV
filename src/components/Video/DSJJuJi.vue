<template>
  <div class="juji">
    <div class="title">
      <p>剧集</p>
      <p>
        <span>每周一周二凌晨1点更新2集/更新至<span v-text="play_num"></span>集</span>
        <span></span>
      </p>
    </div>
    <div class="play">
        <ul>
          <li v-for="(item,index) in play_num" :key="index" > {{ item | change_ }}</li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "DSJJuJi",
  filters:{
    change_(v){
      v<10?v='0'+v:v=v;
      return v;
    }
  },
  data(){
    return {
      play_num:34
    }
  }
};
</script>

<style scoped>
.title{
    padding:0 .17rem;
    color: #333;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:0 0 .27rem .05rem;
    border-bottom: .01rem solid #dedede; 
    letter-spacing: .01rem;
}
.title>p:first-child{
    font-size: .24rem;
}
.title>p:last-child{
    font-size: .16rem;
    display: flex;
    color: #adadad;
}
.title>p:last-child>span:last-child{
    display: inline-block;
    width: 0.14rem;
    height: 0.22rem;
    background: url("/static/切图/arrow_go01@2x.png") no-repeat center;
    background-size: 100%;
    /* line-height: .22rem; */
    margin-left: .1rem;
}
.play{
  width: 100%;
  overflow: auto;
  margin-bottom: .55rem;
}
.play>ul{
  display: flex;
  padding-left: .17rem;
}
.play>ul>li{
  width: .73rem;
  height: 0.73rem;
  border: solid .01rem #dedede;
  flex-shrink:0;
  font-size: .24rem;
  margin-right: .13rem;
  text-align: center;
  line-height: .73rem;
  color: #333333;
  background-color: #f5f9fc;
  
}
</style>

