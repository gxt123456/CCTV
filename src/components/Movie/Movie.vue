<template>
    <div>
        <div class="top">
			<Banner>
			    <swiper-slide><img src="/static/自己切图/轮播图/move3.png" alt=""></swiper-slide>
			    <swiper-slide><img src="/static/自己切图/轮播图/move3.png" alt=""></swiper-slide>
			    <swiper-slide><img src="/static/自己切图/轮播图/move3.png" alt=""></swiper-slide>
			</Banner>
		</div>
        <div>
            <PublickList v-for="(item,index) in list" :key='index' :setcol='item.setcol_' :title='item.title_' :content='item.content_' :SwitchDH='item.SwitchDH_'></PublickList>
        </div>
    </div>
   
</template>

<script>
import Banner from '../Public/Banner'
import PublickList from '../Public/PublickList'
export default {
    name:'Movie',
    components:{
        Banner,PublickList
    },
    data(){
        return {
            list:[{
                setcol_:[3, 3],
                title_:'最新电影',
                content_:[{
                    url:'./static/自己切图/电影/film1.png',
                    title:"速度激情7"
                },{
                    url:'./static/自己切图/电影/film2.png',
                    title:"速度激情7"
                },{
                    url:'./static/自己切图/电影/film3.png',
                    title:"速度激情7"
                }]
            },{
                setcol_:[3, 6],
                title_:'影集',
                content_:[{
                    url:'./static/自己切图/电影/film4.png',
                    title:"速度激情7"
                },{
                    url:'./static/自己切图/电影/film5.png',
                    title:"速度激情7"
                },{
                    url:'./static/自己切图/电影/film6.png',
                    title:"速度激情7"
                },{
                    url:'./static/自己切图/电影/film7.png',
                    title:"速度激情7"
                },{
                    url:'./static/自己切图/电影/film8.png',
                    title:"速度激情7"
                },{
                    url:'./static/自己切图/电影/film9.png',
                    title:"速度激情7"
                }]
            },{
                setcol_:[2, 0],
                title_:'王牌栏目',
                content_:[{
                    url:'./static/自己切图/电影/film10.png',
                    title: "快乐大本营",
                    cont: "现场直播：月迎15岁生日，众多明星到场。。。"
                },{
                    url:'./static/自己切图/电影/film11.png',
                    title:"CCTV5",
                    cont:'现场直播：2015世界职业拳王。。。'
                },{
                    url:'./static/自己切图/电影/film12.png',
                    title:"电影频道",
                    cont:'光影星播客'
                }]
            }]
        }

    }
}
</script>

<style scoped>
	.top{
		height: 3.2rem;
		margin-bottom: .2rem;
	}
</style>
<style>
    .banner{
        margin-bottom: 0.38rem;
    }
</style>