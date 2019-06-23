<template>
    <div id="app">
        <MyHeader></MyHeader>

        <SearchContainer></SearchContainer>
        <GuidanceDiv></GuidanceDiv>
        <BestOfMonth></BestOfMonth>
        <BestRestaurants></BestRestaurants>
        <FoodsDiv></FoodsDiv>
        <ContactDiv></ContactDiv>

        <MyFooter></MyFooter>
    </div>

    <!--  <div id="app">-->
    <!--    <img alt="Vue logo" src="./assets/logo.png">-->
    <!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <!--  </div>-->
</template>

<script>
    // import HelloWorld from './components/HelloWorld.vue'
    import MyHeader from './components/MyHeader.vue'
    import MyFooter from "@/components/MyFooter";
    import SearchContainer from "@/components/SearchContainer";
    import GuidanceDiv from "@/components/GuidanceDiv";
    import BestOfMonth from "@/components/BestOfMonth";
    import BestRestaurants from "@/components/BestRestaurants";
    import FoodsDiv from "@/components/FoodsDiv";
    import ContactDiv from "@/components/ContactDiv";

    export default {
        name: 'app',
        components: {
            ContactDiv,
            FoodsDiv,
            BestRestaurants,
            BestOfMonth,
            GuidanceDiv,
            SearchContainer,
            MyFooter,
            MyHeader
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
</style>
<style src="./global.css"></style>
