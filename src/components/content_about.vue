<template>
    <content>
        
    </content>
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
        position: absolute;
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
