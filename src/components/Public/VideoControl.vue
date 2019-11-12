<template>
  <div class="videocontrol">
    <video :src="defaulturl" ref="video" @click="play"></video>
    <img src="/static/切图/star_play@2x.png" alt class="center_play" @click.stop="play" />
    <div class="bottom">
      <div class="play">
        <img src="/static/切图/playicon.png" alt class="img_play" v-show="!playstate"/>
        <img src="/static/切图/suspenditon.png" alt class="img_suspend" v-show="playstate"/>
      </div>
      <span class="timer" v-text="timer"></span>
      <div class="barlength" ref="jindutiao">
        <div class="barcurrent" :style='"width:"+jinduwidth+"%"'></div>
      </div>
      <span class="resulttimer" v-html="resulttimer"></span>
      <img src="/static/切图/quanping.png" alt class="fullScreen" @click.stop='$refs.video.webkitRequestFullscreen()'/>
    </div>
  </div>
</template>

<script>
export default {
  name: "videoControl",
  props: ["url"] ,
  data() {
    return {
      defaulturl:'',
      jinduwidth: 0,
      timer: "00:00",
      resulttimer: "00:00",
      playstate: false,
      touchstartX: 0
    };
  },
  mounted() {
    this.videoDefult();
    let video = this.$refs.video;
    video.addEventListener("timeupdate", this.timechange);
    this.$props.url==undefined?this.defaulturl='/static/video.mp4':defaulturl=this.$props.url;
  },
  methods: {
    timechange() {
      let video = this.$refs.video;
      let house = parseInt(video.currentTime / 60);
      let minute = parseInt(video.currentTime % 60);
      String(house).length < 2 ? (house = "0" + house) : house;
      String(minute).length < 2 ? (minute = "0" + minute) : minute;
      this.timer = house + ":" + minute;
      this.jinduwidth = (video.currentTime / video.duration) * 100;
      if (video.duration == video.currentTime) video.currentTime = 0;
    },
    play() {
      if (this.playstate == false) {
        this.$refs.video.play();
        this.playstate = true;
        document.getElementsByClassName("center_play")[0].style.display =
          "none";
      } else {
        this.$refs.video.pause();
        this.playstate = false;
        document.getElementsByClassName("center_play")[0].style.display =
          "block";
      }
    },
    videoDefult() {
      let video = this.$refs.video;
      let that = this;
      let house = 0;
      let minute = 0;
      video.oncanplaythrough = function() {
        house = parseInt(video.duration / 60);
        minute = parseInt(video.duration % 60);
        String(house).length < 2 ? (house = "0" + house) : house;
        String(minute).length < 2 ? (minute = "0" + minute) : minute;
        that.resulttimer = house + ":" + minute;
      };
      this.clickjindu(video);
    },
    clickjindu(video) {
      let that = this;
      let jindutiao = this.$refs.jindutiao;
      // console.log(jindutiao);
      jindutiao.addEventListener("touchstart", function(e) {
        var e = e || window.Event;
        that.touchstartX = e.changedTouches[0].clientX;
        that.jindumouve(undefined, e);
        document.body.ontouchmove = that.jindumouve;
        return false;
      });
      document.body.addEventListener("touchend", function() {
        document.body.ontouchmove = null;
      });
    },
    jindumouve(e) {
      let jindutiao = this.$refs.jindutiao;
      let left = jindutiao.offsetLeft;
      let width = jindutiao.offsetWidth;
      let video = this.$refs.video;
      let jisuantime = 0;
      let house = 0;
      let minute = 0;
      /* console.log(
        this.touchstartX,
        e,
        jindutiao.offsetLeft,
        jindutiao.offsetWidth
      ); */
      if (e == undefined) {
        this.jinduwidth = ((this.touchstartX - left-1) / width) * 100;
        jisuantime = ((this.touchstartX - left-1) / width) * video.duration;
      } else {
        this.jinduwidth = ((e.changedTouches[0].clientX - left-1) / width) * 100;
        jisuantime = ((e.changedTouches[0].clientX - left-1) / width) * video.duration;
      }
      house = parseInt(jisuantime / 60);
      minute = parseInt(jisuantime % 60);
      String(house).length < 2 ? (house = "0" + house) : house;
      String(minute).length < 2 ? (minute = "0" + minute) : minute;
      video.currentTime = jisuantime;
      this.timer = house + ":" + minute;
      return false;
    }
  }
};
</script>

<style scoped>
.videocontrol {
  height: 3.54rem;
  position: relative;
  color: white;
  font-size: 0.12rem;
  text-shadow: 0 0 0.2rem #000;
}
.videocontrol > video {
  width: 100%;
  height: 100%;
}
.videocontrol > .bottom {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 0.34rem;
  background-color: #999;
  display: flex;
  align-items: center;
  padding: 0 0.15rem;
}
.videocontrol > .bottom > .play {
  width: 0.19rem;
  height: 0.19rem;
  margin-right: 0.15rem;
  overflow: hidden;
}
.videocontrol > .bottom > .play > img {
  /* width: 0.19rem; */
  /* max-width: none; */
  float: left;
}
.videocontrol > .bottom > .timer {
  margin-right: 0.1rem;
}
.videocontrol > .bottom > .barlength {
  height: 0.1rem;
  width: 4.65rem;
  border: 1px solid black;
  background-color: #222;
  cursor: pointer;
}
.videocontrol > .bottom > .barlength > .barcurrent {
  width: 0%;
  height: 100%;
  position: relative;
  background-color: blue;
}
.videocontrol > .bottom > .barlength > .barcurrent::after {
  content: "";
  position: absolute;
  right: -0.1rem;
  width: 0.09rem;
  height: 0.09rem;
  background-color: white;
}
.videocontrol > .bottom > .resulttimer {
  margin: 0 0.15rem 0 0.12rem;
}
.videocontrol > .bottom > .fullScreen {
  width: 0.15rem;
}
.videocontrol > img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>