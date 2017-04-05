import Vue from 'vue'
import Router from 'vue-router'
import header from '../components/header'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        components: {
            header: header
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
