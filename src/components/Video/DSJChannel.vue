<template>
  <div class="channel">
    <ul>
      <li v-for="(item,index) in arr" :key="index">
        <img :src="item.imgSrc" :alt=" item.text " />
        <span v-text="item.text"></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DSJChannel",
  data() {
    return {
      arr: [
        { imgSrc: "/static/切图/btn_pindao_zhibo@2x.png", text: "直播频道" },
        { imgSrc: "/static/切图/btn_pindao_dianshi@2x.png", text: "电视剧" },
        { imgSrc: "/static/切图/btn_pindao_dianying@2x.png", text: "电影" },
        { imgSrc: "/static/切图/btn_pindao_zongyi@2x.png", text: "综艺" },
        { imgSrc: "/static/切图/btn_pindao_tiyu@2x.png", text: "体育" },
        { imgSrc: "/static/切图/btn_pindao_xinwen@2x.png", text: "新闻" },
        { imgSrc: "/static/切图/btn_pindao_shaoer@2x.png", text: "少儿" },
        { imgSrc: "/static/切图/btn_pindao_dongman@2x.png", text: "动漫" },
        { imgSrc: "/static/切图/btn_pindao_jilup@2x.png", text: "纪录片" },
        { imgSrc: "/static/切图/btn_pindao_yinyue@2x.png", text: "音乐" },
        { imgSrc: "", text: "" }
      ]
    };
  }
};
</script>

<style scoped>
.channel {
  background-color: #efeff4;
}
.channel > ul {
  overflow: hidden;
}
.channel > ul > li {
  width: 33.33%;
  height: 1.55rem;
  float: left;
  display: flex;
  padding: 0.27rem 0.56rem 0.35rem 0.56rem;
  text-align: center;
  flex-direction: column;
  border-right: 0.01rem solid #ccc;
  border-bottom: 0.01rem solid #ccc;
  box-sizing: border-box;
}
.channel > ul > li:nth-child(3n) {
  border-right: none;
}
.channel > ul > li > img {
  width: 0.44rem;
  height: 0.44rem;
  align-self: center;
  margin-bottom: 0.23rem;
}
.channel > ul > li > span {
  font-size: 0.24rem;
}
</style>
