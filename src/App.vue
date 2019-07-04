<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App'
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
        text-decoration: none !important
    }

    a:hover {
        text-decoration: none !important
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


        --md-theme-default-primary: #448aff;
        --md-theme-default-accent: #d40062;
        --md-theme-default-theme: light;

        /*original*/
        /*--md-theme-default-primary: #448aff;*/
        /*--md-theme-default-accent: #ff5252;*/
        /*--md-theme-default-theme: light;*/
    }
</style>
