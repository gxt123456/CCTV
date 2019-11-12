<template>
  <div class="newsbofanag">
    <PublicTop>
      <span slot="title">新闻</span>
    </PublicTop>
    <div class="play">
      <VideoControl></VideoControl>
    </div>
    <div class="miaoshu">
      <p>
        今天是胜利日，看了阅兵，感受到了各种正能量。事后想想，我是通过什么途
        径感受到的呢？媒介！这是一个时时刻刻都在我们身边，却容易被我们忽略的
        东西……新华社和人民日..
      </p>
      <p>
            今天是胜利日，看了阅兵，感受到了各种正能量。事后想想，我是通过什么途
            径感受到的呢？媒介！这是一个时时刻刻都在我们身边，却容易被我们忽略的
            东西……新华社和人民日..
        </p>
    </div>
    <div class="list">
      <PublicList2 title="热播推荐" :list="list"></PublicList2>
    </div>
    <div class="pinglun">
      <PublicComment></PublicComment>
    </div>
  </div>
</template>

<script>
import PublicTop from "../Public/PublicTop";
import VideoControl from "../Public/VideoControl";
import PublicList2 from "../Public/PublicList2";
import PublicComment from "../Public/PublicComment";
export default {
  props: {},
  data() {
    return {
      list: [
        {
          url: "/static/自己切图/新闻/journalism1.png",
          title: "北京 “首虎” 北京市委书记吕锡文被查",
          cont:
            "英汉冷女人大展拳脚功夫英汉冷女人大展拳脚功夫英汉冷女人大展拳脚功夫英汉冷女人大展拳脚功夫"
        },
        {
          url: "/static/自己切图/新闻/journalism2.png",
          title: "北京 “首虎” 北京市委书记吕锡文被查",
          cont:
            "英汉冷女人大展拳脚功夫英汉冷女人大展拳脚功夫英汉冷女人大展拳脚功夫英汉冷女人大展拳脚功夫"
        },
        {
          url: "/static/自己切图/新闻/journalism1.png",
          title: "北京 “首虎” 北京市委书记吕锡文被查",
          cont:
            "英汉冷女人大展拳脚功夫英汉冷女人大展拳脚功夫英汉冷女人大展拳脚功夫英汉冷女人大展拳脚功夫"
        },
        {
          url: "/static/自己切图/新闻/journalism2.png",
          title: "北京 “首虎” 北京市委书记吕锡文被查",
          cont:
            "英汉冷女人大展拳脚功夫英汉冷女人大展拳脚功夫英汉冷女人大展拳脚功夫英汉冷女人大展拳脚功夫"
        }
      ]
    };
  },
  methods: {},
  components: {
    PublicTop,
    VideoControl,
    PublicList2,
    PublicComment
  }
};
</script>

<style scoped>
.pinglun {
  margin-top: 0.28rem;
}
</style>
<style>
.newsbofanag > .list > div > ul > li:last-of-type {
  border: none;
}
.miaoshu{
    font-size: .16rem;
    line-height: .24rem;
    padding: .22rem .2rem .24rem .24rem;
}
.miaoshu>p{
    margin-bottom: .1rem;
    color: #666;
}
</style>
