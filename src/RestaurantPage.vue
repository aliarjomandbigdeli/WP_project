<template>
    <div id="RestaurantPage">
        <MyHeader></MyHeader>

        <MyFooter></MyFooter>
    </div>
</template>

<script>
    import MyHeader from "@/components/MyHeader";
    import MyFooter from "@/components/MyFooter";
    export default {
        name: "RestaurantPage",
        components: {MyFooter, MyHeader}
    }
</script>

<style scoped>

</style>
