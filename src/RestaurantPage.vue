<template>
    <div id="RestaurantPage">
        <MyHeader></MyHeader>
        <div id="container">
            <div id="banner"></div>
            <div id="img-div"><img height="80" width="80" :src="restaurant.imgUrl"></div>
            <div id="empty-div"></div>
            <div id="show-div">
                <div id="info-div">
                    <h1>{{restaurant.name}}</h1>
                    <div class="stars-bar">
                        <span class="rate-number">{{restaurant.rate}}</span>&nbsp;
                        <star-rating :rating="restaurant.rate" :read-only="true" :increment="0.01" :star-size="20"
                                     :show-rating="false"></star-rating>
                        <span class="rate-participant">({{restaurant.numOfRates}})</span>
                    </div>
                    <p class="foods">
                        <span v-for="(food,index) in restaurant.foods" :key="index"><span
                                v-if="index!=0">&#9679;</span> {{dictionary[food]}}</span>
                    </p>
                    <p class="address">{{restaurant.address}}</p>
                </div>

                <scrollactive id="top-nav" active-class="-active">
                    <a href="#one" class="scrollactive-item">منوی رستوران</a>
                    <a href="#two" class="scrollactive-item">اطلاعات رستوران</a>
                    <a href="#three" class="scrollactive-item">نظرات کاربران</a>
                </scrollactive>
                <!--                <div id="tab-div">-->
                <!--                    <div id="rest-menu">منوی رستوران</div>-->
                <!--                    <div id="rest-info">اطلاعات رستوران</div>-->
                <!--                    <div id="rest-review">نظرات کاربران</div>-->
                <!--                </div>-->
            </div>
            <div id="show-detail">
                <div></div>
                <div id="food-set-nav"></div>
            </div>
        </div>

        <MyFooter></MyFooter>
    </div>
</template>

<script>
    import StarRating from 'vue-star-rating'
    // import scrollactive from 'vue-scrollactive'
    // import VueScrollactive from 'vue-scrollactive'
    import MyHeader from "@/components/MyHeader";
    import MyFooter from "@/components/MyFooter";

    export default {
        name: "RestaurantPage",
        // components: {MyFooter, MyHeader, StarRating,VueScrollactive},
        components: {MyFooter, MyHeader, StarRating},
        data() {
            return {
                restaurant: null,
                id: 0,
                query: "",
                dictionary: {
                    sandwich: "ساندویچ",
                    burger: "برگر",
                    pizza: "پیتزا",
                    kebab: "کباب",
                    salad: "سالاد",
                    iranian: "ایرانی",
                    pasta: "پاستا",
                    fish: "ماهی",
                    breakfast: "صبحانه",
                    juice: "آبمیوه طبیعی",
                    steak: "استیک",
                    soup: "سوپ",
                    fastfood: "فست فود"
                }
            }
        },
        created() {
            this.id = this.$route.params.id;
            this.query = "best-restaurants";

            window.onscroll = this.myFunction;

        },
        mounted() {
            // fetch("http://demo2469824.mockable.io/best-restaurants")
            fetch("http://demo2469824.mockable.io/".concat(this.query))
                .then(response => response.json())
                .then((data) => {
                    this.restaurant = data.restaurants[0];
                })
        },
        methods: {
            myFunction() {
                let header = document.getElementById("top-nav");
                let sticky = header.offsetTop;
                if (window.pageYOffset > sticky) {
                    header.classList.add("sticky");
                } else {
                    header.classList.remove("sticky");
                }
            }
        }
    }
</script>

<style scoped>
    #container {
        padding: 0px;
        position: relative;
        /*display: flex;*/
        /*flex-direction: column;*/
        /*justify-content: center;*/
        /*align-content: center;*/
        /*align-items: center;*/
        /*alignment: center;*/
        text-align: center;
    }

    #banner {
        position: absolute;
        left: 0;
        top: 0;
        height: 295px;
        width: 100%;
        background-image: url("../mocks/restaurant-banner.jpeg");
        z-index: -1;
    }

    #img-div {
        display: flex;
        /*display: inline-block;*/
        position: absolute;
        left: 47%;
        /*marign-left: auto;*/
        /*margin-right: auto;*/
        top: 100px;
        justify-content: center;
        z-index: +1;

    }

    #img-div > img {
        border-radius: 5px;
        border-color: lightgray;
        border-style: solid;
        border-width: 1px;
    }

    #empty-div {
        width: 100%;
        height: 150px;
    }

    #show-div {
        display: inline-block;
        background-color: white;
        max-width: 744px;
        width: 100%;
        /*padding: 15px 10px 5px 10px;*/
        padding: 15px 0px 5px 0px;

        box-shadow: 0 0 3px lightgray;
    }

    #info-div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /*align-content: center;*/

    }

    .stars-bar {
        display: flex;
    }

    .rate-number {
        color: orange;
    }

    .address, .rate-participant {
        color: gray;
    }

    #top-nav {
        display: flex;
        justify-content: space-around;
        /*position: fixed;*/
        background-color: white;
        max-width: 734px;
        /*width: 100%;*/

        padding: 10px;
        border-top-color: lightgray;
        border-top-style: solid;
        border-top-width: 1px;


    }

    #top-nav > a {
        color: black !important;
    }

    .sticky {
        position: fixed;
        top: 0;
        width: 100%;
    }

    .sticky + .content {
        padding-top: 102px;
    }

</style>
