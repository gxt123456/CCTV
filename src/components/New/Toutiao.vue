<template>
    <div class="toutiao">
        <PublicTop><span slot='title'>新闻头条</span></PublicTop>
        <div class="content">
            <PublicList2 :list='list'></PublicList2>
        </div>
    </div>
</template>

<script>
import PublicTop from '../Public/PublicTop'
import PublicList2 from '../Public/PublicList2'
export default {
    props: {

    },
    data() {
        return {
            list:[
                {
                    url:'/static/自己切图/新闻/journalism1.png',
                    title:'北京 “首虎” 北京市委副书记吕锡文被查' ,
                    cont:'系现任中央后补委员系现任中央后补委员系现任中央后补委员系现任中央后补委员系现任中央后补委员'
                },
                {
                    url:'/static/自己切图/新闻/journalism2.png',
                    title:'东盟博览会' ,
                    cont:'系现任中央后补委员系现任中央后补委员系现任中央后补委员系现任中央后补委员系现任中央后补委员'
                },
                {
                    url:'/static/自己切图/新闻/journalism3.png',
                    title:'双十一电商大战' ,
                    cont:'系现任中央后补委员系现任中央后补委员系现任中央后补委员系现任中央后补委员系现任中央后补委员'
                },
                {
                    url:'/static/自己切图/新闻/journalism4.png',
                    title:'田径大爆炸事件' ,
                    cont:'系现任中央后补委员系现任中央后补委员系现任中央后补委员系现任中央后补委员系现任中央后补委员'
                },
                {
                    url:'/static/自己切图/新闻/journalism1.png',
                    title:'北京 “首虎” 北京市委副书记吕锡文被查' ,
                    cont:'系现任中央后补委员系现任中央后补委员系现任中央后补委员系现任中央后补委员系现任中央后补委员'
                },
                {
                    url:'/static/自己切图/新闻/journalism2.png',
                    title:'东盟博览会' ,
                    cont:'系现任中央后补委员系现任中央后补委员系现任中央后补委员系现任中央后补委员系现任中央后补委员'
                },
                {
                    url:'/static/自己切图/新闻/journalism3.png',
                    title:'双十一电商大战' ,
                    cont:'系现任中央后补委员系现任中央后补委员系现任中央后补委员系现任中央后补委员系现任中央后补委员'
                },
                {
                    url:'/static/自己切图/新闻/journalism4.png',
                    title:'田径大爆炸事件' ,
                    cont:'系现任中央后补委员系现任中央后补委员系现任中央后补委员系现任中央后补委员系现任中央后补委员'
                }
            ]
        };
    },
    methods: {

    },
    components: {
        PublicTop,PublicList2
    },
};
</script>

<style scoped>

</style>
<style>
.toutiao>.content>div>ul>li>.content{
    width: 3.53rem;
}
.toutiao>.content>div>ul>li>.content>.top>h1{
font-size: .18rem;
font-weight: 600;
}
.toutiao>.content>div>ul>li>.content>.top>.cont{
    line-height: .2rem;
}
</style>
