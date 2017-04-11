<template>
    <footer>
        <div class='address'>
            <div class='data'>
                <img :src='src' />
                <p>4001 507 507（周一至周日：7:00 - 24:00）</p>
                <p>北京市海淀区北四环西路58号理想国际大厦11层</p>
            </div>
            <div class='link'>
                <a id='github' href='https://github.com/rianran1993/ofo' target='_blank'/>
                <a id='wechat' href='javascript:;' @mouseover='show' @mouseleave='hide'/>
            </div>
        </div>
        <div class='company'>
            <p>Copyright © 2017 ofo Inc. 保留所有权利。京公网安备 11010802022978号   |   公共事务邮箱  gr@ofo.so    商务合作邮箱  bdinchina@ofo.so</p>
        </div>
    </footer>
</template>

<script>

export default {
    name: 'header',
    data () {
        return {
            src: '../../static/img/footer_logo.png'
        }
    },
    methods: {
        show () {
            this.src = '../../static/img/wx-qrcode.jpg';
        },
        hide () {
            this.src = '../../static/img/footer_logo.png';
        }
    }
}
</script>

<style>
    footer{
        //position: absolute;
        top: 1000px;
        margin-top: 10px;
        left: 0;
        width: 100%;
        height: 310px;
        background: #191919;
    }
    .address {
        height: 251px;
        font-size: 12px;
        color: #a3a3a3;
        text-align: center;
    }    
    .company {
        border-top: 1px solid #2b2b2b;
        font-size: 12px;
        color: #a3a3a3;
        text-align: center;
    }
    .address img{
        width: 75px;
        height: 72px;
    }
    .data{
        position: relative;
        top: 20%;
    }
    .link{
        font-size: 12px;
        color: #a3a3a3;
        text-align: center; 
        position: relative;
        top: 25%;        
    }
    #github {
        background: url('../../static/img/github.png');
        display: inline-block;
        width: 24px;
        height: 22px;
        margin-right: 35px;
    }    
    #wechat {
        background: url('../../static/img/social_icon.png');
        display: inline-block;
        width: 24px;
        height: 22px;
        background-position: -24px 0;
    }
</style>
