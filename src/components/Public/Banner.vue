<template>
    <div class="banner">
        <swiper :options="swiperOption">
            <!-- slides -->
            
            <!-- 留的槽口，传上面的三张图片 -->
            <slot></slot>   
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
        <span>{{default_l_title}}</span>
    </div>
</template>
  

<script>
export default {
    name: 'carrousel',
    props:['lunbo_title'],//轮播的每个标题
    data() {
      return {
        default_l_title:'二次曝光最新',
        swiperOption: {
            loop : true,//循环播放
            autoplay: {
                delay: 3000,
            },
            pagination: {
                el: '.swiper-pagination',
            }
        }
      }
    },
    mounted(){
        this.$props.lunbo_title!=undefined?this.default_l_title=this.$props.lunbo_title:this.default_l_title;
    }
}
</script>
    
<style>
    .swiper-container-horizontal > .swiper-pagination-bullets{
        position: absolute;
        bottom: 0;
        background-color: rgba(0,0,0,.5);
        height: .55rem;
    }
    .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet{
        width: 0.17rem;
        height: 0.17rem;
        margin:0.19rem 0;  
        background:#fff;
        opacity: 1;
        position: absolute;    
    }
    .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet-active{
        background: #007aff;
    }
    span.swiper-pagination-bullet:nth-child(1){
        right: 0.79rem;
    }
    span.swiper-pagination-bullet:nth-child(2){
        right: 0.47rem;
    }
    span.swiper-pagination-bullet:nth-child(3){
        right: 0.15rem;
    }
    .banner{
        position: relative;
    }
    .banner>span{
        position: absolute;
        bottom: 0;
        left:0;
        line-height: 0.55rem;
        font-size: 0.24rem;
        color: #fff;
        margin-left: 0.22rem;
        z-index: 11;
    }
</style>