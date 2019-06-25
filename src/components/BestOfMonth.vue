<template>
    <div>
        <h2 id="best-of-the-month">رستوران‌‌ها و فست فود‌های برتر ماه بر اساس امتیاز‌دهی کاربران</h2>
        <div id="best-of-the-month-div">
            <a href="" v-for="detail in restaurants.slice(0,3)" :key="detail.name">
                <InfoBox :name="detail.name"
                         :rate="detail.rate"
                         :numOfRates="detail.numOfRates"
                         :foods="detail.foods"
                         :address="detail.address"
                         :imgUrl="detail.imgUrl"></InfoBox>
            </a>
        </div>
    </div>
</template>

<script>
    import InfoBox from "@/components/InfoBox";

    export default {
        name: "BestOfMonth",
        components: {InfoBox},
        data() {
            return {
                restaurants: []
            }
        },
        mounted() {
            fetch("http://demo2469824.mockable.io/best-restaurants")
                .then(response => response.json())
                .then((data) => {
                    this.restaurants = data.restaurants;
                })
        }
    }
</script>

<style scoped>
    #best-of-the-month {
        text-align: center;
    }

    #best-of-the-month-div {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        margin-bottom: 50px;
    }

    #best-of-the-month-div > a {
        flex-basis: 360px;
        margin: 10px;
    }
</style>
