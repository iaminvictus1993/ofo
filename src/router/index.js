import Vue from 'vue'
import Router from 'vue-router'
import header from '../components/header'
import swipe from '../components/swipe'
import swipeList from '../components/swipeList'
import footer from '../components/footer'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        components: {
            header: header,
			swipe: swipe,
            swipeList: swipeList,
            footer: footer
        },
		beforeEnter (to, from, next) {
			[].forEach.call(document.getElementsByTagName('li'),function(item) {item.className = ''});
			next();
		}
    },{
        path: '/about',
        components: {
            header: header,
            footer: footer
        }
    },{
        path: '/share',
        components: {
            header: header,
            footer: footer
        }
    },{
        path: '/job',
        components: {
            header: header,
            footer: footer
        }
    },{
        path: '/download',
        components: {
            header: header,
            footer: footer
        }
    }]
})
