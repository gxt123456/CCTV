import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Content from '@/components/Home/Content'
import Search from '@/components/Home/Search'
import Movie from '@/components/Movie/Movie'
import HotDrama from '@/components/Video/HotDrama'
import PublicTop from '@/components/Public/PublicTop'
import PublicList2 from '@/components/Public/PublicList2'
import DSJChannel from '@/components/Video/DSJChannel'
import DSJDetail from '@/components/Video/DSJDetail'
import News from '@/components/New/News'
import Toutiao from '@/components/New/Toutiao'
import NewsBofang from '@/components/New/NewsBofang'



const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

Vue.use(Router)
let arr1 = [{
		path: '/',
		name: 'Content',
		component: Content
	}, {
		path: '/home',
		name: 'Content',
		component: Content
},
{
		path: '/movie',
		name: 'Movie',
		component: Movie
},
{
		path: '/hotdrama',
		name: 'HotDrama',
		component: HotDrama
},
{
		path: '/News',
		name: 'News',
		component: News
}]
export default new Router({
	routes: [{
			path: '/',
			name: 'Home',
			component: Home,
			children:arr1
		},
		{
			path: '/Homew',
			name: 'Home',
			component: Home,
			children: arr1
		},
		{
			path: '/Search',
			name: 'Search',
			component: Search
		},
		{
			path: '/Toutiao',
			name: 'Toutiao',
			component: Toutiao
		},
		{
			path: '/NewsBofang',
			name: 'NewsBofang',
			component: NewsBofang
		}
	]
})
