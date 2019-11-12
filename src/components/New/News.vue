<template>
    <div class="news_index">
        <div class="top" @click="tiaobofang">
            <Banner>
                <swiper-slide><img src="/static/自己切图/轮播图/move4.png" alt=""></swiper-slide>
                <swiper-slide><img src="/static/自己切图/轮播图/move4.png" alt=""></swiper-slide>
                <swiper-slide><img src="/static/自己切图/轮播图/move4.png" alt=""></swiper-slide>
			</Banner>
        </div>
        <div class="content">
            <PublicList2 title="热播推荐" :list='list' gengduoTZurl='/Toutiao'></PublicList2>
        </div>
    </div>
</template>

<script>
import PublicList2 from '../Public/PublicList2'
import Banner from '../Public/Banner'
export default {
    props: {

    },
    data() {
        return {
            list:[
                {
                    url:'/static/自己切图/新闻/journalism2.png',
                    title:'鲁豫有约',
                    cont:'英汉冷女大战拳脚功夫英汉冷女大战拳脚功夫英汉冷女大战拳脚功夫',
                    play:true,
                    tiaourl:'/NewsBofang'
                },
                {
                    url:'/static/自己切图/新闻/journalism1.png',
                    title:'新闻今日谈',
                    cont:'英汉冷女大战拳脚功夫英汉冷女大战拳脚功夫英汉冷女大战拳脚功夫',
                    play:true,
                    tiaourl:'/NewsBofang'
                },
                {
                    url:'/static/自己切图/新闻/journalism3.png',
                    title:'全媒体大开讲',
                    cont:'英汉冷女大战拳脚功夫英汉冷女大战拳脚功夫英汉冷女大战拳脚功夫',
                    play:true,
                    tiaourl:'/NewsBofang'
                },
                {
                    url:'/static/自己切图/新闻/journalism4.png',
                    title:'军事观察室',
                    cont:'英汉冷女大战拳脚功夫英汉冷女大战拳脚功夫英汉冷女大战拳脚功夫',
                    play:true,
                    tiaourl:'/NewsBofang'
                },
                {
                    url:'/static/自己切图/新闻/journalism5.png',
                    title:'CCTV5',
                    cont:'英汉冷女大战拳脚功夫英汉冷女大战拳脚功夫英汉冷女大战拳脚功夫',
                    play:true,
                    tiaourl:'/NewsBofang'
                },
                {
                    url:'/static/自己切图/新闻/journalism1.png',
                    title:'新闻进入谈',
                    cont:'英汉冷女大战拳脚功夫英汉冷女大战拳脚功夫英汉冷女大战拳脚功夫',
                    play:true,
                    tiaourl:'/NewsBofang'
                }
            ]
        };
    },
    methods: {
        tiaobofang(){
            this.$router.push('/NewsBofang')
        }
    },
    components: {
        PublicList2,Banner
    },
};
</script>

<style scoped>
.news_index>.content{
    padding: .28rem .1rem 0;
}
</style>
<style>
.news_index>.content>div>ul{
    padding-left: 0;
}
.news_index>.content>div>ul>li{
    padding-left: .06rem;
}
.news_index>.content>div>ul>li>.content>.top>h1{
font-size: .18rem;
font-weight: 600;
margin-top: .22rem;
}
.news_index>.content>div>ul>li>.content>.top>.cont{
    line-height: .22rem;
    font-size: .16rem;
    width: 3.07rem;
}
</style>