import Vue from 'vue'
import Router from 'vue-router'
import header from '../components/header'
import swipe from '../components/content'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        components: {
            header: header,
			swipe:swipe
        },
		beforeEnter (to, from, next) {
			[].forEach.call(document.getElementsByTagName('li'),function(item) {item.className = ''});
			next();
		}
    },{
        path: '/about',
        components: {
            header: header
        }
    },{
        path: '/share',
        components: {
            header: header
        }
    },{
        path: '/job',
        components: {
            header: header
        }
    },{
        path: '/download',
        components: {
            header: header
        }
    }]
})
