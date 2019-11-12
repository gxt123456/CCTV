<template>
  <div class="live">
      <div class="left">
          <ul>
              <li v-for='(item,index) in listLeft' :key='index'>
                  <router-link :to='item.url'>{{item.list_}}</router-link>
              </li>
          </ul>
      </div>
      <div class="right">
          <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {
    name:'derict',
    data(){
        return {
            listLeft:[{
                list_:'央视频道',
                url:'/yangshi'
                },{
                list_:'地方卫视',
                url:'/difang'
                },{
                list_:'特色频道',
                url:'/yangshi'
                },{
                list_:'熊猫频道',
                url:'/difang'
            }],
            listRight:[{
                imgUrl:'./static/图片规格/直播-频道.jpg',
                title:'CCTV1',
                cont:'第一动画乐园：熊出没'
            },{
                imgUrl:'./static/图片规格/直播-频道.jpg',
                title:'CCTV1',
                cont:'第一动画乐园：熊出没'
            }]
        }
    }
}
</script>

<style scoped>
    body,body>div{
        height: 100%;
    }
    .live{
        display: flex;
        
        border-top: 1px solid #dedede;
    }
    .left{
        width: 1.28rem;
        height: 100%;
        background: #f3f3f3;
        border-right: 0.01rem solid #dedede;
    }
    .left>ul>li{
        line-height: 0.76rem;           
    }
    .left>ul>li>a{
        font-size:0.2rem; 
        color:#666; 
    }
    .right{
        flex:1;
    /* }
    .router-link-active{
        color: #246cff;
    } */
</style>