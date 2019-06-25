<template>
    <div id="RestaurantPage">
        <MyHeader></MyHeader>
        <div>{{restaurant}}
            <img :src="restaurant.imgUrl">
        </div>

        <MyFooter></MyFooter>
    </div>
</template>

<script>
    import MyHeader from "@/components/MyHeader";
    import MyFooter from "@/components/MyFooter";

    export default {
        name: "RestaurantPage",
        components: {MyFooter, MyHeader},
        data() {
            return {
                restaurant: null,
                id: 0,
                query: ""
            }
        },
        created() {
            this.id = this.$route.params.id;
            this.query = "best-restaurants";
        },
        mounted() {
            // fetch("http://demo2469824.mockable.io/best-restaurants")
            fetch("http://demo2469824.mockable.io/".concat(this.query))
                .then(response => response.json())
                .then((data) => {
                    this.restaurant = data.restaurants[0];
                })
        }
    }
</script>

<style scoped>

</style>
