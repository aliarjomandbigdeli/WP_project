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
<style src="./global.css"></style>
