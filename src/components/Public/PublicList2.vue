<template>
	<div class="publiclist2">
		<div class="top" v-if="title">
			<h1>{{title}}</h1>
			<span @click="gengduotiaozhuan">更多>></span>
		</div>
		<ul>
			<li v-for="(item,index) in list" :key='index' @click="tiaofn(item.tiaourl)">
				<div class="imgs">
					<img :src="item.url" class="bj"/>
					<img src="/static/切图/star_play.png" alt="" class="play" v-if="item.play">
					<img src="/static/切图/btn_zhuanti.png" alt="" class="zhuanti" v-if="item.zhuanti">
				</div>
				<div class="content">
					<div class="top">
						<h1 v-text="item.title"></h1>
						<p class="cont" v-text="item.cont"></p>
					</div>
					<div class="timer">
						<p v-for="(it,ind) in item.timer" :key='ind' v-text="it"></p>
					</div>
				</div>
				<p class="timer" v-text="item.cishu+'万'" v-if="item.cishu"></p>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "publiclist2",
		props: {
			title:'',
			gengduoTZurl:'',    //更多页面
			list: {
				default () {
					return [{
						url: '/static/自己切图/娱乐/entertainment1.png',     //图片路径
						title: '大牌驾到',         //标题()
						cont: '内容',   //描述
						timer: '',  //时长['00:42',0]
						cishu: 0,      //流量
						tiaourl:'',         //点击内容跳转路径
						play:false,         //播放按钮
						zhuanti:false ,      //专题标志
						videourl:''
					}]
				}
			}
		},
		methods:{
			tiaofn(val){
				// alert('tiaozhuan'+val)
				this.$router.push(val)
			},
			gengduotiaozhuan(val){
				// alert('gengduotiaozhuan'+'gengduoTZ')
				this.$router.push(this.gengduoTZurl)
			}
		}
	}
</script>

<style scoped>
	.publiclist2>ul{
		padding:.05rem 0 0 .17rem;
	}
	.publiclist2>ul>li {
		padding: .15rem .15rem .15rem 0;
		display: flex;
		align-items: stretch;
		border-bottom: .01rem solid #ccc;
	}

	.publiclist2>ul>li>.imgs {
		width: 2.1rem;
		margin-right: .18rem;
		position: relative;
	}
	.publiclist2>ul>li>.imgs>.bj{
		width: 100%;height: 100%;
	}
	.publiclist2>ul>li>.imgs>.play{
		position: absolute;
		width:.46rem;height:.46rem;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
	}
	.publiclist2>ul>li>.imgs>.zhuanti{
		position: absolute;
		left: 0;
		top: 0;
		width: .33rem;
		height: .33rem;
	}
	.publiclist2>ul>li>.content{
		width: 2.97rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.publiclist2>ul>li>.content>.top>h1{
		font-size: .24rem;     
		line-height: .3rem;    
		margin-top: .12rem;    
	}                          
	.publiclist2>ul>li>.content>.top>.cont{
		font-size: .14rem;
		line-height: .28rem;
		margin-top: .06rem;
		color: #999;
	}
	.publiclist2>ul>li>.content>.timer{
		display: flex;
		height: .3rem;
		margin-bottom: .06rem;
		align-items: center;
	}
	.publiclist2>ul>li>.content>.timer>p{
		height: .2rem;
		padding-left: .25rem;
		margin-right: .2rem;
		color: #999;
	}
	.publiclist2>ul>li>.timer{
		color: #999;
		font-size: .14rem;
		line-height: .16rem;
		padding-right: .2rem;
		align-self: flex-end;
		background:url(../../../static/自己切图/娱乐/yule_icon1.png) no-repeat center right;
		background-size: .14rem .16rem;
	}
	.publiclist2>ul>li>div>.timer>p{
		background: url(/static/自己切图/新闻/bofang_icon2.png) no-repeat 0 center;
	}
	.publiclist2>ul>li>div>.timer>p:last-of-type{
		background-image: url(/static/自己切图/新闻/bofang_icon1.png)
	}
	.publiclist2>.top{
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
		padding:0 .13rem .09rem .42rem;
		border-bottom: .01rem solid #ccc;
	}
	.publiclist2>.top::after{
		content: '';
		display:block;
		width: .06rem;
		height: .3rem;
		border-radius: .03rem;
		background-color: red;
		position:absolute;
		left: .2rem;
	}
	.publiclist2>.top>h1{
		font-size:.24rem;
		line-height: .34rem;
	}
	.publiclist2>.top>span{
		font-size: .2rem;
	}
</style>
