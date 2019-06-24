<template>
    <div id="app">
        <Home></Home>
    </div>
</template>

<script>
    import Home from "@/Home";

    export default {
        name: 'app',
        components: {
            Home,
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
</style>
<style src="./global.css"></style>
