<template>
	<div class="publictop">
		<div class="top">
			<img src="../../../static/切图/arrow-back@2x.png" class="fanh" @click="fanh"/>
			<span><slot name="title">观看记录</slot></span>
			<img src="../../../static/切图/icon_search@2x.png" class="search" @click='tiaosearch'/>
		</div>
		<div class="feng"></div>
	</div>
</template>

<script>
	export default{
		name:'publictop',
		data(){
			return {}
		},
		methods:{
			tiaosearch(){
				this.$router.push('/Search');
			},
			fanh(){
				//路径应该是个人中心
				this.$router.push('/Homew');
			}
		}
	}
</script>

<style scoped>
	.top{
		display: flex;
		justify-content: space-between;
		padding: .42rem .27rem .2rem .16rem;
		align-items: center;
	}
	.top>.fanh{
		height: .3rem;
	}
	.top>.search{
		width: .4rem;
	}
	.top>span{
		font-size:.27rem;
		line-height: .27rem;
	}
	.feng{
		height: .03rem;
		background-image: linear-gradient(to right,#d87ef3,#5274ff);
	}
</style>
