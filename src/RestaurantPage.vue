<template>
    <div id="RestaurantPage">
        <MyHeader></MyHeader>
        <div id="container">
            <div id="banner"></div>
            <div id="img-div"><img height="80" width="80" :src="restaurant.logo"></div>
            <div id="empty-div"></div>
            <div id="show-div">
                <div id="top-info-div">
                    <h1>{{restaurant.name}}</h1>
                    <div class="stars-bar">
                        <span class="rate-number">{{restaurant.averageRate}}</span>&nbsp;
                        <star-rating :rating="restaurant.averageRate" :read-only="true" :increment="0.01"
                                     :star-size="20"
                                     :show-rating="false"></star-rating>
                        <span class="rate-participant">({{restaurant.comments.length}})</span>
                    </div>
                    <p class="foods">
                        <span v-for="(category,index) in restaurant.categories" :key="index"><span
                                v-if="index!=0">&#9679;</span> {{category.name}}</span>
                    </p>
                    <p class="address">{{restaurant.address.addressLine}}</p>
                </div>

                <div ref="scrollactive" id="top-nav" active-class="active-nav">
                    <a href="#rest-menu" id="rest-menu-tab" class="scrollactive-item">منوی رستوران</a>
                    <a href="#rest-info" id="rest-info-tab" class="scrollactive-item">اطلاعات رستوران</a>
                    <a href="#rest-review" id="rest-review-tab" class="scrollactive-item">نظرات کاربران</a>
                </div>
                <!--                <scrollactive ref="scrollactive" id="top-nav" active-class="active-nav">-->
                <!--                    <a href="#rest-menu" class="scrollactive-item">منوی رستوران</a>-->
                <!--                    <a href="#rest-info" class="scrollactive-item">اطلاعات رستوران</a>-->
                <!--                    <a href="#rest-review" id="rest-review-tab" class="scrollactive-item">نظرات کاربران</a>-->
                <!--                </scrollactive>-->
            </div>
            <div id="show-detail" class="content">
                <div id="info-div">
                    <div id="rest-menu">
                        <div class="category-container" v-for="(category,index) in restaurant.categories" :key="index">
                            <h2 class="food-container-title">{{category.name}}</h2>
                            <div class="foods-container">
                                <div v-for="(food, index) in restaurant.foods" :key="index">
                                    <FoodInfoCard v-if="food.foodSet ===category.name"
                                                  :name="food.name"
                                                  :price="food.price"
                                                  :description="food.description"></FoodInfoCard>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="rest-info">
                        <h2 id="rest-info-title">اطلاعات رستوران</h2>
                        <div id="rest-info-detail">
                            <div id="rest-info-map-div"><img src="../mocks/map.png"></div>
                            <div id="rest-info-text-detail">
                                <h3>{{restaurant.name}}</h3>
                                <div>
                                    <span>{{restaurant.address.addressLine}}</span>&nbsp;<i
                                        class="fas fa-map-marker-alt"></i>
                                </div>
                                <h5><span>ساعت سفارش گیری</span>&nbsp;<i class="fas fa-clock"></i></h5>
                                <div id="rest-info-clock">
                                    <span>همه روزه</span>
                                    <span>از{{restaurant.openingTime}} تا{{restaurant.closingTime}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="rest-review">
                        <h2>نظرات کاربران در مورد{{restaurant.name}}</h2>
                        <p id="rest-review-p">شما هم می‌توانید بعد از سفارش از این رستوران، نظر خود را درباره‌ی این
                            رستوران ثبت کنید</p>
                        <div class="stars-bar">
                            <star-rating :rating="restaurant.averageRate" :read-only="true" :increment="0.01"
                                         :star-size="20"
                                         :show-rating="false"></star-rating>
                            <span class="rate-participant">({{restaurant.comments.length}})</span>
                        </div>
                        <span class="rate-number">{{restaurant.averageRate}}</span>
                        <div class="rate-detail-div">
                            <div>کیفیت غذا</div>
                            <RatingProgressBar :number="qualityAvg"
                                               :fill-percent="qualityAvg*100/5"></RatingProgressBar>
                        </div>
                        <div class="rate-detail-div">
                            <div>کیفیت بسته بندی</div>
                            <RatingProgressBar :number="packagingAvg"
                                               :fill-percent="packagingAvg*100/5"></RatingProgressBar>
                        </div>
                        <div class="rate-detail-div">
                            <div>سرعت ارسال پیک</div>
                            <RatingProgressBar :number="deliveryTimeAvg"
                                               :fill-percent="deliveryTimeAvg*100/5"></RatingProgressBar>
                        </div>
                        <div id="border-div"></div>
                        <CommentShowBox v-for="(comment, index) in restaurant.comments" :key="index"
                                        :author="comment.author" :rate-number="comment.quality"
                                        :date="comment.created_at"></CommentShowBox>
                    </div>
                </div>
                <div id="food-set-nav">
                    <a class="food-set-nav-item" v-for="(category,index) in restaurant.categories" :key="index">
                        {{category.name}}
                    </a>
                </div>
            </div>
        </div>

        <MyFooter></MyFooter>
    </div>
</template>

<script>
    import StarRating from 'vue-star-rating'
    import MyHeader from "@/components/MyHeader";
    import MyFooter from "@/components/MyFooter";
    import FoodInfoCard from "@/components/FoodInfoCard";
    import RatingProgressBar from "@/components/RatingProgressBar";
    import CommentShowBox from "@/components/CommentShowBox";

    export default {
        name: "RestaurantPage",
        components: {CommentShowBox, RatingProgressBar, FoodInfoCard, MyFooter, MyHeader, StarRating},
        data() {
            return {
                restaurant: null,
                id: "",
                query: ""
            }
        },
        created() {
            this.id = this.$route.params.id;
            this.query = "/".concat(this.id);
            window.onscroll = this.myFunction;
        },
        mounted() {
            fetch("http://localhost:3000/api/restaurants".concat(this.query))
                .then(response => response.json())
                .then((data) => {
                    this.restaurant = data;
                })
        },
        computed: {
            qualityAvg: function () {
                let avg = 0;
                for (let i = 0; i < this.restaurant.comments.length; i++) {
                    avg += this.restaurant.comments[i].quality;
                }
                return avg / this.restaurant.comments.length;
            },
            packagingAvg: function () {
                let avg = 0;
                for (let i = 0; i < this.restaurant.comments.length; i++) {
                    avg += this.restaurant.comments[i].packaging;
                }
                return avg / this.restaurant.comments.length;
            },
            deliveryTimeAvg: function () {
                let avg = 0;
                for (let i = 0; i < this.restaurant.comments.length; i++) {
                    avg += this.restaurant.comments[i].deliveryTime;
                }
                return avg / this.restaurant.comments.length;
            }
        },
        methods: {
            myFunction() {
                let header = document.getElementById("top-nav");
                let sticky = header.offsetTop;
                if (window.pageYOffset > sticky) {
                    header.classList.add("sticky");
                }
                if (window.pageYOffset < 346) {
                    header.classList.remove("sticky");
                }

                //because show-detail div has relative position, we need offset
                let offSet = 392 - 25;

                let review = document.getElementById("rest-review");
                let info = document.getElementById("rest-info");
                let menu = document.getElementById("rest-menu");
                let reviewTab = document.getElementById("rest-review-tab");
                let infoTab = document.getElementById("rest-info-tab");
                let menuTab = document.getElementById("rest-menu-tab");

                // console.log("log: review: ".concat(review.offsetTop));
                // console.log("log: info: ".concat(info.offsetTop));
                // console.log("log: menu: ".concat(menu.offsetTop));
                // console.log("log: window offset:".concat(window.pageYOffset));
                if (window.pageYOffset > menu.offsetTop + offSet && window.pageYOffset < info.offsetTop + offSet) {
                    menuTab.classList.add("active-nav");
                    infoTab.classList.remove("active-nav");
                    reviewTab.classList.remove("active-nav");
                }
                if (window.pageYOffset > (info.offsetTop + offSet) && window.pageYOffset < (review.offsetTop + offSet)) {
                    infoTab.classList.add("active-nav");
                    menuTab.classList.remove("active-nav");
                    reviewTab.classList.remove("active-nav");
                }
                if (window.pageYOffset > review.offsetTop + offSet) {
                    reviewTab.classList.add("active-nav");
                    menuTab.classList.remove("active-nav");
                    infoTab.classList.remove("active-nav");
                }
            }
        }
    }
</script>

<style scoped>
    #container {
        padding: 0;
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

    #top-info-div {
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
        font-size: 1rem;
        font-weight: bold
    }

    .address, .rate-participant {
        color: gray;
    }

    #top-nav {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-around;
        /*position: fixed;*/
        background-color: white;
        max-width: 734px;
        z-index: 1;
        /*width: 100%;*/

        padding: 10px;
        border-top-color: lightgray;
        border-top-style: solid;
        border-top-width: 1px;


    }

    .scrollactive-item {
        color: gray !important;
    }

    .active-nav {
        color: black !important;
        border-bottom-color: var(--btn-bg-or-highlighted-color);
        border-bottom-style: solid;
        border-bottom-width: 2px;
    }

    .sticky {
        position: fixed;
        top: 0;
        width: 100%;
    }

    .sticky + .content {
        padding-top: 102px;
    }

    #show-detail {
        display: flex;
        justify-content: center;
        position: relative;
    }

    #food-set-nav {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 10%;
        top: 0;
        right: 0;
        padding-right: 40px;
    }

    .food-set-nav-item {
        color: gray !important;
        margin: 15px 10px 15px 10px;
        text-align: right;
    }

    #info-div {
        display: inline-block;
        max-width: 744px;
        width: 100%;
    }

    #info-div > * {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    #rest-info-title {
        border-bottom-color: lightgray;
        border-bottom-style: solid;
        border-bottom-width: 1px;
        width: 100%;
        padding-bottom: 10px;
        text-align: right;
    }

    /*#rest-info-map-div{*/
    /*    width: 297px;*/
    /*    height: 227px;*/
    /*}*/

    #rest-info-map-div > img {
    }

    #rest-info-detail {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }

    #rest-info-text-detail {
        display: flex;
        flex-direction: column;
        text-align: right;
        width: 100%;
        align-items: flex-end;
    }

    #rest-info-clock {
        width: 70%;
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        border-bottom-color: lightgray;
        border-bottom-style: solid;
        border-bottom-width: 1px;
        padding-bottom: 5px;
    }

    .category-container {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        width: 100%;
    }

    .food-container-title {
        width: 100%;
        text-align: right;
    }

    .foods-container {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row-reverse;
    }

    /*margin for FoodInfoBox*/
    .foods-container > div > * {
        margin: 10px 0 10px 10px;
    }

    #rest-review {
        /*display: flex;*/
        /*flex-direction: column;*/
        /*align-items: center;*/
        width: 100%;
    }

    #rest-review > h2 {
        text-align: right;
        width: 100%;
        padding-bottom: 10px;
        border-bottom-color: lightgray;
        border-bottom-style: solid;
        border-bottom-width: 1px;
    }

    #rest-review-p {
        width: 100%;
        text-align: right;
    }

    .rate-detail-div {
        display: flex;
        justify-content: space-between;
        width: 80%;
        border-top-color: lightgray;
        border-top-style: solid;
        border-top-width: 1px;
        padding: 15px 0 15px 0;
    }

    #border-div {
        background-color: lightgray;
        width: 100%;
        height: 1px;
        margin-top: 15px;
        margin-bottom: 10px;
    }

</style>
