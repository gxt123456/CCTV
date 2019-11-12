<template>
	<div class="home">
		<div class="top_left" :class='{active:flg}'>
			<div class="top">
				<div class="content">
					<img src="../../../static/切图/btn_leftuser@2x.png" />
					<span>请登录</span>
				</div>
			</div>
			<div class="content">
				<ul>
					<li v-for='(item,index) in wode' :key='index' @click="tiao(item.tiaoUrl)" :class="{active:index==num}">
						<img :src="'/static/切图/'+item.backUrl" />
						<span v-text="item.content"></span>
					</li>
				</ul>
			</div>
		</div>
		<div class="top_right">
			<PublictopNav @isshow='fn'></PublictopNav>
		</div>
	</div>
</template>

<script>
	import PublictopNav from '../Public/PublictopNav'
	export default {
		name: "Home",
		components: {PublictopNav},
		data() {
			return {
				flg:false,
				num:0,
				wode:[
					{
						tiaoUrl:'',
						content:'首页',
						backUrl:'btn_leftmenu_clickshouye@2x.png'
					},
					{
						tiaoUrl:'',
						content:'我的收藏',
						backUrl:'btn_leftmenu_shoucang@2x.png'
					},
					{
						tiaoUrl:'',
						content:'观看记录',
						backUrl:'btn_leftmenu_lixian@2x.png'
					},
					{
						tiaoUrl:'',
						content:'我的预约',
						backUrl:'btn_leftmenu_yuyue@2x.png'
					},
					{
						tiaoUrl:'',
						content:'意见反馈',
						backUrl:'btn_leftmenu_fankui@2x.png'
					},
					{
						tiaoUrl:'',
						content:'设置',
						backUrl:'btn_leftmenu_shezhi@2x.png'
					},
					{
						tiaoUrl:'',
						content:'退出',
						backUrl:'btn_leftmenu_tuichu@2x.png'
					}
				]
			}
		},
		methods:{
			fn(val){
				this.flg=val
			}
		}
	};
</script>

<style scoped>
.home{
	display: flex;
	width: 100%;
	overflow: hidden;
}
.top_left{
	flex-shrink: 0;
	width:3.86rem;
	background-color:#1c1d22;
	display: none;
}
.active{
	display: block;
}
.top_left>.top{
	height: 2.32rem;
	/* background: url(); */
	padding: .7rem .27rem 0;
}
.top_left>.top>.content{
	display: flex;
	align-items: center;
	border-bottom: .01rem solid white;
	padding-bottom: .41rem;
}
.top_left>.top>.content>img{
	width: 1.2rem;
	margin-right: .44rem;
}
.top_left>.top>.content>span{
	font-size: .24rem;
	color: white;
	margin-top: .16rem;
}
.top_left>.content{
	padding:.36rem 0 0 .2rem;
}
.top_left>.content>ul>li{
	height: .45rem;
	margin-bottom:.45rem;
	font-size: .3rem;;
	color: #f5f5f5;
	display: flex;
	align-items: flex-end;
	line-height:.3rem;
}
.top_left>.content>ul>li:active{
	color: #F60;
}
.top_left>.content>ul>.active{
	color: #ff6600;
}
.top_left>.content>ul>li:nth-of-type(2):active img{
	content: url(/static/切图/btn_leftmenu_clickshoucang@2x.png);
}
.top_left>.content>ul>li:nth-of-type(3):active img{
	content: url(/static/切图/btn_leftmenu_clicklixian@2x.png);
}
.top_left>.content>ul>li:nth-of-type(4):active img{
	content: url(/static/切图/btn_leftmenu_clickyuyue@2x.png);
}
.top_left>.content>ul>li:nth-of-type(5):active img{
	content: url(/static/切图/btn_leftmenu_clickfankui@2x.png);
}
.top_left>.content>ul>li:nth-of-type(6):active img{
	content: url(/static/切图/btn_leftmenu_clickshezhi@2x.png);
}
.top_left>.content>ul>li:nth-of-type(7):active img{
	content: url(/static/切图/btn_leftmenu_clicktuichu@2x.png);
}
.top_left>.content>ul>li>img{
	width: .44rem;
	margin-right: .22rem;
}
.top_right{
	flex-shrink: 0;
	width:6.4rem;
}
</style>
