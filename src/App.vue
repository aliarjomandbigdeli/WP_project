<template>
    <div id="app">
        <div id="nav-bar-div">
            <div class="nav-bar-items"><a href="login.html#login_sec">ورود</a></div>
            <div class="nav-bar-items" id="separator">|</div>
            <div class="nav-bar-items"><a href="login.html#register_sec">عضویت</a></div>
            <div class="nav-bar-items">&nbsp;&nbsp;&nbsp;</div>
            <div class="nav-bar-items"><a href="">راهنما</a></div>
        </div>
        <div id="nav-border-div"></div>


    </div>

    <!--  <div id="app">-->
    <!--    <img alt="Vue logo" src="./assets/logo.png">-->
    <!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <!--  </div>-->
</template>

<script>
    // import HelloWorld from './components/HelloWorld.vue'

    export default {
        name: 'app',
        components: {
            // HelloWorld
        }
    }
</script>

<style>

    @font-face {
        font-family: Shabnam;
        src: url("https://dist.reyhoon-static.com/web-assets/fonts/v3.0.1/Shabnam.eot");
        src: url("https://dist.reyhoon-static.com/web-assets/fonts/v3.0.1/Shabnam.eot?#iefix") format("embedded-opentype"), url("https://dist.reyhoon-static.com/web-assets/fonts/v3.0.1/Shabnam.woff") format("woff"), url("https://dist.reyhoon-static.com/web-assets/fonts/v3.0.1/Shabnam.woff2") format("woff2"), url("https://dist.reyhoon-static.com/web-assets/fonts/v3.0.1/Shabnam.ttf") format("truetype");
        font-weight: 400
    }

    @font-face {
        font-family: Shabnam;
        src: url("https://dist.reyhoon-static.com/web-assets/fonts/v3.0.1/Shabnam-Bold.eot");
        src: url("https://dist.reyhoon-static.com/web-assets/fonts/v3.0.1/Shabnam-Bold.eot?#iefix") format("embedded-opentype"), url("https://dist.reyhoon-static.com/web-assets/fonts/v3.0.1/Shabnam-Bold.woff") format("woff"), url("https://dist.reyhoon-static.com/web-assets/fonts/v3.0.1/Shabnam-Bold.woff2") format("woff2"), url("https://dist.reyhoon-static.com/web-assets/fonts/v3.0.1/Shabnam-Bold.ttf") format("truetype");
        font-weight: 700
    }

    a {
        text-decoration: none;
        color: black;
    }

    * {
        font-family: Shabnam;
    }

    body {
        margin: 0;
        /*color name*/
        --main-bg-color: #f6f9fc;
        --btn-bg-or-highlighted-color: #d40062;
        --loign-register-txt-color: gray;
        --loign-register-bg-color: #f6f9fc;
    }

    /*login, register footer style*/
    #footer-log-reg-div {
        background-color: white;
    }

    #footer-log-reg-social-div {
        display: flex;
        justify-content: center;
        margin: 10px;
    }

    #footer-log-reg-social-div > a {
        background-color: gray;
        color: white;
        border-radius: 20px;
        margin: 10px;
    }

    #footer-log-reg-social-div > a > i {
        padding: 10px;
    }

    #footer-log-reg-border-div {
        height: 2px;
        background-color: var(--loign-register-bg-color);
    }

    #footer-log-reg-more-option-div {
        display: flex;
        justify-content: center;
        color: var(--loign-register-txt-color);
        padding: 10px;
    }

    #footer-log-reg-more-option-div > * {
        margin: 10px;
        color: var(--loign-register-txt-color);
    }


    /* Responsive layout - when the screen is less than 900px wide, hide sms-img */
    @media screen and (max-width: 1050px) {
        #sms-img {
            display: none;
        }
    }

    #nav-bar-div {
        display: flex;
        flex-direction: row-reverse;
        padding-left: 30px;
        padding-right: 30px;
        font-size: 0.9em;
        color: #4a5575;
    }

    .nav-bar-items {
        margin: 10px;
        padding: 5px;
        background-color: white;
    }

    .nav-bar-items > a {
        color: #4a5575;
    }

    .nav-bar-items > a:hover {
        color: var(--btn-bg-or-highlighted-color);
    }

    #separator {
        margin-left: 0;
        margin-right: 0;
        padding-right: 0;
        padding-left: 0;
    }

    #nav-border-div {
        background: linear-gradient(to right, red, purple);
        height: 3px;
    }



    /*#app {*/
    /*    font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
    /*    -webkit-font-smoothing: antialiased;*/
    /*    -moz-osx-font-smoothing: grayscale;*/
    /*    text-align: center;*/
    /*    color: #2c3e50;*/
    /*    margin-top: 60px;*/
    /*}*/
</style>
