<template>
    <div id="SearchPage">
        <MyHeader></MyHeader>
        <div id="search-banner"></div>
        <div id="loc-search-p" dir="rtl">
            {{number}}<span> رستوران امکان سرویس دهی به </span><span class="bold">{{city}}، {{district}}</span><span> را دارند</span>
        </div>
        <MyFooter></MyFooter>
    </div>

</template>

<script>
    import MyHeader from "@/components/MyHeader";
    import MyFooter from "@/components/MyFooter";

    export default {
        name: "SearchPage",
        components: {MyFooter, MyHeader},
        data() {
            return {
                number: 0,
                city: "",
                district: ""
            }
        },
        created() {
            this.city = this.$route.params.city;
            this.district = this.$route.params.district;
        }
    }
</script>

<style scoped>
    #search-banner {
        height: 170px;
        background-image: url("../mocks/restaurant-search-banner.jpg");
    }

    #loc-search-p {
        text-align: right;
        padding: 10px 50px 10px 10px;
        font-size: 1.4em;
    }

    .bold {
        font-weight: bold;
    }

</style>
