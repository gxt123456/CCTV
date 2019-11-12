<template>
	<div class="search">
		<div class="top">
			<div>
				<img src="/static/自己切图/首页/mysearch.png" />
				<input type="text" placeholder="请输入关键字"/>
			</div>
			<span @click="tiaohome">取消</span>
		</div>
		<div class="feng"></div>
		<div class="content">
			<h1>热门搜索</h1>
			<ul>
				<li v-for='(item,index) in list' :key='index' @click="fn(item.url)">
					<span class="hao" v-text="index+1" :class="{hot:item.hot}"></span>
					<span class="content" v-text="item.cont"></span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Search",
		data() {
			return {
				list: [
					{
						url:'',
						cont:'奔跑吧兄弟',
						hot:true
					},
					{
						url:'',
						cont:'琅琊榜',
						hot:true
					},
					{
						url:'',
						cont:'花千骨',
						hot:true
					},
					{
						url:'',
						cont:'天天向上',
						hot:true
					},
					{
						url:'',
						cont:'非诚勿扰'
					},
					{
						url:'',
						cont:'快乐大本营'
					},
					{
						url:'',
						cont:'北上广不相信眼泪'
					},
				]
			}
		},
		methods:{
			fn(val){
				console.log('跳转至',val);
			},
			tiaohome(){
				// this.$router.push('Home')
				window.history.go(-1);
			}
		}
	}
</script>

<style scoped>
	.search{
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	.content{
		flex: 1;
		background-color: #efeff4;
		font-size: .24rem;
		color: rgb(102,102,102);
	}
	.content>h1{
		padding:.33rem .1rem .2rem .28rem;
		font-size: .24rem;
		line-height: .24rem;
	}
	.content>ul{
		padding-left: .14rem;
	}
	.content>ul>li{
		padding:.18rem .1rem .14rem .27rem;
		border-bottom: .01rem solid #ccc;
		display: flex;
		align-items: center;
	}
	.content>ul>li>.hao{
		display: block;
		width: .35rem;
		height: .35rem;
		background-color: #ccc;
		margin-right: .15rem;
		line-height: .35rem;
		text-align: center;
	}
	.content>ul>li>.hot{
		background-color: #f70;
		color: white;
	}
	.top{
		padding:.23rem .3rem .1rem;
		display: flex;
		align-items: center;
		flex: 0;
	}
	.feng{
		height: .03rem;
		flex-shrink: 0;
		background-image: linear-gradient(to right,#d874f2,#5274ff);
	}
	.top>span{
		font-size: .3rem;
		margin:.06rem 0 0 .28rem;
		color: #999;
	}
	.top>div{
		flex: 1;
		border: .01rem solid #ccc;
		border-radius: .06rem;
		display: flex;
		align-items: flex-end;
		padding: .15rem .1rem .17rem .12rem;
	}
	.top>div>img{
		width: .25rem;
		margin-right: .1rem;
	}
	.top>div>input{
		height: .2rem;
		flex: 1;
		border: none;
		outline: none;
		font-size: .2rem;
	}
</style>
