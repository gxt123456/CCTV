<template>
	<div class="home">
		<!-- 需要引入ui框架 -->
		<div class="top">
			<Banner>
			    <swiper-slide><img src="/static/自己切图/轮播图/move1.png" alt=""></swiper-slide>
			   <swiper-slide><img src="/static/自己切图/轮播图/move1.png" alt=""></swiper-slide>
			    <swiper-slide><img src="/static/自己切图/轮播图/move1.png" alt=""></swiper-slide>
			</Banner>
		</div>
		<ul class="content">
			<li><PublickList title='热播推荐' :content='tuijianlist' :setcol='[2]' :play='true'></PublickList></li>
			<li><PublickList title='综艺趴' :content='zylist'></PublickList></li>
			<li><PublickList title='热剧连连看' :content='hotju' :setcol='[2]'></PublickList></li>
			<li><PublickList title='体育竞技' :content='tiyulist' :setcol='[2]'></PublickList></li>
		</ul>
	</div>
</template>

<script>
	import Banner from '../Public/Banner'
	import PublickList from '../Public/PublickList'
	export default {
		name: "Home",
		components: {
			Banner,
			PublickList
		},
		data() {
			return {
				tuijianlist:[
					{
						url: "./static/自己切图/首页/index10.png",
						title: "CCTV5",
						cont: "现场直播：2015世界职业拳手。。。",
						ranking:1,
						hotflow:82.0
					},
					{
						url: "./static/自己切图/首页/index11.png",
						title: "电影频道",
						cont: "光影星博客",
						ranking:2,
						hotflow:11.0
					},
					{
						url: "./static/自己切图/首页/index12.png",
						title: "CCTV5",
						cont: "现场直播：2015世界职业拳手。。。",
						ranking:3,
						hotflow:82.0
					},
					{
						url: "./static/自己切图/首页/index13.png",
						title: "电影频道",
						cont: "光影星博客",
						ranking:4,
						hotflow:11.0
					},
					{
						url: "./static/自己切图/首页/index14.png",
						title: "CCTV5",
						cont: "现场直播：2015世界职业拳手。。。",
						hotflow:82.0
					},
					{
						url: "./static/自己切图/首页/index15.png",
						title: "电影频道",
						cont: "光影星博客",
						hotflow:11.0
					},
				],
				tiyulist:[
					{
					  url: "./static/自己切图/体育/sports1.png",
					  title: "快乐大本营",
					  cont: "现场直播：月迎15岁生日，众多明星到场。。。"
					},
					{
					  url: "./static/自己切图/体育/sports2.png",
					  title: "快乐大本营",
					  cont: "现场直播：月迎15岁生日，众多明星到场。。。"
					},
					{
					  url: "./static/自己切图/体育/sports4.png",
					  title: "快乐大本营",
					  cont: "现场直播：月迎15岁生日，众多明星到场。。。"
					},
					{
					  url: "./static/自己切图/体育/sports5.png",
					  title: "快乐大本营",
					  cont: "现场直播：月迎15岁生日，众多明星到场。。。"
					}
				],
				hotju: [{
						url: './static/自己切图/首页/index10.png',
						title: "北上广不相信眼泪",
						cont: "朱亚文浪漫告白马伊琍"
					},
					{
						url: './static/自己切图/首页/index11.png',
						title: "幸福归来",
						cont: "朱亚文浪漫告白马伊琍"
					},
					{
						url: './static/自己切图/首页/index12.png',
						title: "幸福归来",
						cont: "朱亚文浪漫告白马伊琍"
					},
					{
						url: './static/自己切图/首页/index13.png',
						title: "幸福归来",
						cont: "朱亚文浪漫告白马伊琍"
					}
				],
				zylist: [{
						url: './static/自己切图/电影/film10.png',
						title: "快乐大本营",
						cont: "现场直播：月迎15岁生日，众多明星到场。。。"
					},
					{
						url: './static/自己切图/电影/film11.png',
						title: "CCTV5",
						cont: "现场直播：2015世界职业拳王。。。"
					},
					{
						url: './static/自己切图/电影/film12.png',
						title: "电影频道",
						cont: "光影新博客。。。",
					}
				]
			}
		}
	};
</script>

<style scoped>

.content>li{
	padding-bottom: .08rem;
}
.top{
	height: 3.2rem;
	margin-bottom:.2rem;
}
</style>
