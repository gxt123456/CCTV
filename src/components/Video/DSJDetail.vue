<template>
  <div>
    <VideoControl></VideoControl>
    <div class="play_detail">
      <h1>大汉情缘之云中歌</h1>
      <p>
        <span>8.5分。</span>
        <span>爱情。</span>
        <span>全集45级</span>
        <span>8.7亿次播放</span>
      </p>
      <p>
        剧情描述剧情描述剧情描述剧情描述剧情描述剧情描述
        剧情描述剧情描述剧情描述剧情描述
      </p>
    </div>
    <DSJJuJi></DSJJuJi>
    <ul class="list">
      <li>
        <PublickList :SwitchDH="2" :content="content1" :title="title1"></PublickList>
      </li>
      <li>
        <PublickList :SwitchDH="2" :content="content2" :title="title2"></PublickList>
      </li>
    </ul>
    <PublicComment></PublicComment>
  </div>
</template>

<script>
import PublicComment from "../Public/PublicComment";
import VideoControl from "../Public/VideoControl";
import DSJJuJi from "./DSJJuJi";
import PublickList from "../Public/PublickList";
export default {
  name: "DSJDetail",
  components: { DSJJuJi, VideoControl, PublicComment, PublickList },
  data() {
    return {
      title1: "《大汉情缘之云中歌》精彩视频大集合",
      title2: "推荐",
      content1: [
        {
          url: "./static/自己切图/电视/tv5.png",
          // title: "快乐大本营",
          title: "云中歌全员便当加速中在挂。。。",
          dataCollection: "2015-11-9"
        },
        {
          url: "./static/自己切图/电视/tv6.png",
          // title: "快乐大本营",
          title: "云中歌全员便当加速中在挂。。。",
          dataCollection: "2015-11-9"
        },
        {
          url: "./static/自己切图/电视/tv7.png",
          // title: "快乐大本营",
          title: "云中歌全员便当加速中在挂。。。",
          dataCollection: "2015-11-9"
        },
        {
          url: "./static/自己切图/电视/tv5.png",
          // title: "快乐大本营",
          title: "云中歌全员便当加速中在挂。。。",
          dataCollection: "2015-11-9"
        },
        {
          url: "./static/自己切图/电视/tv6.png",
          // title: "快乐大本营",
          title: "云中歌全员便当加速中在挂。。。",
          dataCollection: "2015-11-9"
        },
        {
          url: "./static/自己切图/电视/tv7.png",
          // title: "快乐大本营",
          title: "云中歌全员便当加速中在挂。。。",
          dataCollection: "2015-11-9"
        },
        {
          url: "./static/自己切图/电视/tv5.png",
          // title: "快乐大本营",
          title: "云中歌全员便当加速中在挂。。。",
          dataCollection: "2015-11-9"
        },
        {
          url: "./static/自己切图/电视/tv6.png",
          // title: "快乐大本营",
          title: "云中歌全员便当加速中在挂。。。",
          dataCollection: "2015-11-9"
        },
        {
          url: "./static/自己切图/电视/tv7.png",
          // title: "快乐大本营",
          title: "云中歌全员便当加速中在挂。。。",
          dataCollection: "2015-11-9"
        },
        {
          url: "./static/自己切图/电视/tv5.png",
          // title: "快乐大本营",
          title: "云中歌全员便当加速中在挂。。。",
          dataCollection: "2015-11-9"
        }
      ],
      content2: [
        {
          url: "./static/自己切图/电视/tv8.png",
          // title: "快乐大本营",
          title: "北上广不相信眼泪",
          dataCollection: "全集42集"
        },
        {
          url: "./static/自己切图/电视/tv9.png",
          // title: "快乐大本营",
          title: "琅琊榜",
          dataCollection: "全集42集"
        },
        {
          url: "./static/自己切图/电视/tv8.png",
          // title: "快乐大本营",
          title: "北上广不相信眼泪",
          dataCollection: "全集42集"
        },
        {
          url: "./static/自己切图/电视/tv9.png",
          // title: "快乐大本营",
          title: "琅琊榜",
          dataCollection: "全集42集"
        },{
          url: "./static/自己切图/电视/tv8.png",
          // title: "快乐大本营",
          title: "北上广不相信眼泪",
          dataCollection: "全集42集"
        },
        {
          url: "./static/自己切图/电视/tv9.png",
          // title: "快乐大本营",
          title: "琅琊榜",
          dataCollection: "全集42集"
        },
        {
          url: "./static/自己切图/电视/tv8.png",
          // title: "快乐大本营",
          title: "北上广不相信眼泪",
          dataCollection: "全集42集"
        },
        {
          url: "./static/自己切图/电视/tv9.png",
          // title: "快乐大本营",
          title: "琅琊榜",
          dataCollection: "全集42集"
        },{
          url: "./static/自己切图/电视/tv8.png",
          // title: "快乐大本营",
          title: "北上广不相信眼泪",
          dataCollection: "全集42集"
        },
        {
          url: "./static/自己切图/电视/tv9.png",
          // title: "快乐大本营",
          title: "琅琊榜",
          dataCollection: "全集42集"
        }
      ]
    };
  }
};
</script>

<style scoped>
.play_detail {
  padding: 0.15rem 0.15rem 0.25rem 0.15rem;
  box-sizing: border-box;
}
.play_detail > h1 {
  font-size: 0.24rem;
  /* line-height: .82rem; */
  line-height: 0.24rem;
  margin-bottom: 0.2rem;
}
.play_detail > p {
  font-size: 0.18rem;
  color: #adadad;
  margin-bottom: 0.15rem;
}
.play_detail > p:nth-child(2) {
  line-height: 0.18rem;
}
.play_detail > p:nth-child(3) {
  line-height: 0.3rem;
}
</style>
<style>
.list .publickList > div > .content > li > .title {
  line-height: 0.24rem !important;
  margin-top: 0.05rem;
}
 .list .publickList > div > .content > li>.imgs>.dataCollection{
   font-size: .14rem!important;
   background-color: rgba(0,0,0,.6)!important;
   padding: .05rem .11rem .05rem .1rem!important;
   letter-spacing: .01rem
 }
.list li {
  margin-bottom: 0.32rem;
}
</style>