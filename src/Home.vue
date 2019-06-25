<template>
    <div id="Home">
        <MyHeader></MyHeader>

        <SearchContainer></SearchContainer>
        <GuidanceDiv></GuidanceDiv>
        <BestOfMonth></BestOfMonth>
        <BestRestaurants></BestRestaurants>
        <FoodsDiv></FoodsDiv>
        <ContactDiv></ContactDiv>

        <MyFooter></MyFooter>
    </div>
</template>

<script>
    import MyHeader from './components/MyHeader.vue'
    import MyFooter from "@/components/MyFooter";
    import SearchContainer from "@/components/SearchContainer";
    import GuidanceDiv from "@/components/GuidanceDiv";
    import BestOfMonth from "@/components/BestOfMonth";
    import BestRestaurants from "@/components/BestRestaurants";
    import FoodsDiv from "@/components/FoodsDiv";
    import ContactDiv from "@/components/ContactDiv";

    export default {
        name: 'Home',
        components: {
            ContactDiv,
            FoodsDiv,
            BestRestaurants,
            BestOfMonth,
            GuidanceDiv,
            SearchContainer,
            MyFooter,
            MyHeader
        }
    }
</script>

<style>
</style>
