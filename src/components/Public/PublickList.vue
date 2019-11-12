<template>
	<div class="publickList">
		<div class="listtop">
			<h3 v-text="defaulttitle"></h3>
			<p>{{more}}</p>
		</div>
		<div :class="{danhang:defaultSwitchDH}">
			<ul class="content">
				<li v-for="(item,index) in defaultcontent" :key="index" :style="{ width: widUpdat(index)}">
					<div class="imgs">
						<p class="ranking" v-text="item.ranking" v-if="item.ranking"></p>
						<img class="play" v-if="defaultPlay" src="../../../static/切图/star_play@2x.png" />
						<img :src="item.url" alt />
						<p v-if='item.dataCollection' class="dataCollection">{{item.dataCollection}}</p>
					</div>
					<div class="title">
						<span v-text="item.title"></span>
						<p v-if="item.hotflow" v-text="item.hotflow.toFixed(1)+'万人'"></p>
					</div>
					<p class="cont" v-text="item.cont" v-if="item.cont"></p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: "PublickList",
		//setcol为数组[列数，第几个宽度100%]，，title为标题，content是一个数组[图片的url,小标题，小内容]
		//SwitchDH默认为false传值为宽度    //play控制中间的播放按钮
		props: ["setcol", "title", "content", "SwitchDH", 'play'],
		data() {
			return {
				defaultcol: [2, 0],
				defaulttitle: "今日热点-11月9日",
				defaultcontent: [{
						url: "./static/自己切图/电影/film10.png",
						title: "快乐大本营",
						cont: "现场直播：月迎15岁生日，众多明星到场。。。"
						//   ,dataCollection:"2015-11-9",
						//hotflow:true      //观看次数，单位：万,
						//ranking:num       //排位
					},
					{
						url: "./static/自己切图/电影/film10.png",
						title: "快乐大本营",
						cont: "现场直播：月迎15岁生日，众多明星到场。。。"
					},
					{
						url: "./static/自己切图/电影/film10.png",
						title: "快乐大本营",
						cont: "现场直播：月迎15岁生日，众多明星到场。。。"
					}
				],
				defaultSwitchDH: false,
				more: '更多>>',
				defaultPlay: false
			};
		},
		mounted() {
			this.$props.setcol != undefined ?
				(this.defaultcol = this.$props.setcol) :
				this.defaultcol;
			this.$props.title != undefined ?
				(this.defaulttitle = this.$props.title) :
				this.defaulttitle;
			this.$props.content != undefined ?
				(this.defaultcontent = this.$props.content) :
				this.defaultcontent;
			this.$props.SwitchDH != undefined ?
				(this.defaultSwitchDH = this.$props.SwitchDH) :
				this.defaultSwitchDH;
			this.$props.play != undefined ?
				(this.defaultPlay = this.$props.play) :
				this.defaultPlay;
		},
		methods: {
			widUpdat(v) {
				let str = "";
				if (this.defaultSwitchDH) {
					str = this.defaultSwitchDH + "rem";
					this.more = this.defaultcontent.length + " >";
				} else {
					this.defaultcol[1] != v ?
						(str = (100 / this.defaultcol[0]).toFixed(2) + "%") :
						(str = "100%");
				}
				return str;
			}
		}
	};
</script>

<style scoped>
	.publickList>.listtop {
		height: 0.35rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 0.01rem solid #ccc;
		font-weight: 900;
		padding: 0 0 0.15rem 0.15rem;
	}

	.publickList>.listtop>h3 {
		font-size: 0.24rem;
		line-height: 0.35rem;
		padding-left: 0.28rem;
		position: relative;
		font-weight: 900;
	}

	.publickList>.listtop>h3::before {
		content: "";
		width: 0.06rem;
		height: 0.3rem;
		background: #ff6300;
		border-radius: 0.04rem;
		position: absolute;
		left: 0.05rem;
		top: 0;
	}

	.publickList>.listtop>p {
		font-size: 0.18rem;
		padding-right: 0.24rem;
	}

	.publickList>div>.content {
		padding: 0.15rem 0 0 0.15rem;
		display: flex;
		text-align: left;
		flex-wrap: wrap;
	}

	.publickList>div>.content>li {
		padding: 0 0.15rem 0.25rem 0;
	}

	.publickList>div>.content>li>.imgs {
		position: relative;
	}

	.publickList>div>.content>li>.imgs>.ranking {
		width: .52rem;
		height: .6rem;
		position: absolute;
		left: -.02rem;
		top: -.02rem;
		color: white;
		font-size: .2rem;
		line-height: .2rem;
		padding: .1rem 0 0 .09rem;
		background: url(../../../static/自己切图/电视/tv10.png);
	}

	.publickList>div>.content>li>.imgs>.dataCollection {
		position: absolute;
		font-size: .12rem;
		color: white;
		background-color: rgba(0, 0, 0, .3);
		padding: .08rem;
		right: 0;
		bottom: 0;
	}

	.publickList>div>.content>li>.imgs>img {
		width: 100%;
	}

	.publickList>div>.content>li>.imgs>.play {
		width: .46rem;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.publickList>div>.content>li>.title {
		font-size: 0.2rem;
		line-height: 0.36rem;
		display: flex;
		justify-content: space-between;
	}

	.publickList>div>.content>li>.title>p {
		height: 100%;
		background: url(../../../static/切图/icon_hot@2x.png) no-repeat 0 .06rem;
		padding-left: .27rem;
		background-size: .2rem;
		font-size: .14rem;
		color: #999;
	}

	.publickList>div>.content>li>.cont {
		font-size: 0.16rem;
		color: #999;
		line-height: 0.22rem;
	}

	.publickList>.danhang {
		overflow: auto;
	}

	.publickList>.danhang>.content {
		flex-wrap: nowrap;
	}

	.publickList>.danhang>.content>li {
		flex-shrink: 0;
	}
</style>
