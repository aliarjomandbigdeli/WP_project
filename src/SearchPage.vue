<template>
    <div id="SearchPage">
        <MyHeader></MyHeader>

        <MyFooter></MyFooter>
    </div>

</template>

<script>
    import MyHeader from "@/components/MyHeader";
    import MyFooter from "@/components/MyFooter";

    export default {
        name: "SearchPage",
        components: {MyFooter, MyHeader}
    }
</script>

<style scoped>

</style>
