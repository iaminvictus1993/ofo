<template>
    <header>
        <div id="nav" class="col">
            <router-link class="logo" to='/' tag='div'>
                <img src="../../static/img/logo.png"/>
            </router-link>
            <div class="nav-item">
                <ul>
                    <li v-for="item in navItems" @click="toHome(item.link,$event)" :class={selected:isSelected}>
                        {{item.text}}
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
const navItems = [{
    text: '首页',
    link: '/'
},{
    text: '关于我们',
    link: '/about'
},{
    text: '大共享',
    link: '/share'
},{
    text: '下载APP',
    link: '/download'
},{
    text: '加入我们',
    link: '/job'
}];
import router from '../router';
export default {
    name: 'header',
    data () {
        return {
            isSelected: false,
            navItems: navItems
        }
    },
    methods: {
        toHome (link,$event) {
            [].forEach.call(document.getElementsByTagName('li'),function(item) {item.className = ''});
            $event.target.className = 'selected';
            router.push(link || '/');
        }
    }
}
</script>

<style>
    header {
        width: 100%;
        height: 100px;
        background: rgba(0, 0, 0, 0.6);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9;
        margin: 0;
        padding: 0;
    }
    #nav {
        position: relative;
        margin: 0 auto;
        top: 50%;
    }
    .logo {
        width: 54px;
        height: 54px;
        position: absolute;
        left: 0;
        margin: -27px auto 0;
        cursor: pointer;
    }
    img {
        height: 100%;
        width: 100%;
        left: 10px;
        position: relative;
    }
    .nav-item ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    li {
        width: auto;
        height: 26px;
        line-height: 26px;
        position: relative;
        display: inline-block;
        margin-left: 44px;
        color: white;
        cursor: pointer;
    }
    .selected {
        color: yellow;
    }
</style>
