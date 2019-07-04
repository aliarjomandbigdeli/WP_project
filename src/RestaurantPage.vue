<template>
    <div id="RestaurantPage">
        <MyHeader></MyHeader>
        <div id="container">
            <div id="banner"></div>
            <div id="img-div"><img height="80" width="80" :src="restaurant.logo"></div>
            <div id="empty-div"></div>
            <div id="show-loc-div">
                <div id="loc-button-div">
                    <div class="cursor-pointer" @click="$router.go(-1)">
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 -5 25 25"><path
                                fill="currentColor" fill-rule="evenodd"
                                d="M9.17 19.708L.607 11.444a1.95 1.95 0 0 1 0-2.827L9.232.292c.4-.385 1.048-.39 1.454-.01a.976.976 0 0 1 .011 1.425L2.803 9.324a.975.975 0 0 0 0 1.414l7.831 7.557a.974.974 0 0 1 0 1.413c-.405.39-1.06.39-1.464 0z"></path></svg>
                        </span>بازگشت
                    </div>
                    <div>ریحون<span><svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 -5 25 25">
                        <path fill="currentColor" fill-rule="evenodd"
                              d="M9.17 19.708L.607 11.444a1.95 1.95 0 0 1 0-2.827L9.232.292c.4-.385 1.048-.39 1.454-.01a.976.976 0 0 1 .011 1.425L2.803 9.324a.975.975 0 0 0 0 1.414l7.831 7.557a.974.974 0 0 1 0 1.413c-.405.39-1.06.39-1.464 0z"></path></svg>
                        </span>
                        {{restaurant.address.city}}، {{restaurant.address.area}}<span><svg
                                xmlns="http://www.w3.org/2000/svg" width="9" height="9"
                                viewBox="0 -5 25 25"><path fill="currentColor"
                                                           fill-rule="evenodd"
                                                           d="M9.17 19.708L.607 11.444a1.95 1.95 0 0 1 0-2.827L9.232.292c.4-.385 1.048-.39 1.454-.01a.976.976 0 0 1 .011 1.425L2.803 9.324a.975.975 0 0 0 0 1.414l7.831 7.557a.974.974 0 0 1 0 1.413c-.405.39-1.06.39-1.464 0z"></path></svg>
                        </span>
                        {{restaurant.name}}
                    </div>
                </div>

            </div>
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
                    <div v-scroll-to="'#rest-menu'" id="rest-menu-tab" class="scrollactive-item cursor-pointer">
                        منوی رستوران
                    </div>
                    <div v-scroll-to="'#rest-info'" id="rest-info-tab" class="scrollactive-item cursor-pointer">
                        اطلاعات رستوران
                    </div>
                    <div v-scroll-to="'#rest-review'" id="rest-review-tab" class="scrollactive-item cursor-pointer">
                        نظرات کاربران
                    </div>
                </div>
            </div>
            <div id="show-detail" class="content">
                <div id="info-div">
                    <div id="search-input">
                        <input name="rest-name" v-model="foodSearchName"
                               placeholder="جستجوی در منوی این رستوران" dir="rtl">
                        <div><i class="fas fa-search"></i></div>
                    </div>
                    <div id="rest-menu">
                        <div class="category-container" v-for="(foodSet,index) in foodSetList" :key="index">
                            <h2 :id="''.concat(foodSet)" class="food-container-title">{{dictionary[foodSet]}}</h2>
                            <div class="foods-container">
                                <div v-for="(food, index) in filteredFoodList" :key="index">
                                    <FoodInfoCard v-if="food.foodSet ===foodSet"
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
                                        :text="comment.text" :date="comment.created_at"></CommentShowBox>
                    </div>
                </div>
                <div id="food-set-nav">
                    <div v-scroll-to="'#'.concat(foodSet)" :id="''.concat(foodSet).concat('-tab')"
                         class="food-set-nav-item cursor-pointer" v-for="(foodSet,index) in foodSetList"
                         :key="index">
                        <div>{{dictionary[foodSet]}}</div>
                    </div>
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
                query: "",
                foodSetList: [],
                foodList: [],
                foodSearchName: "",
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
            this.query = "/".concat(this.id);
            window.onscroll = this.myFunction;
        },
        mounted() {
            fetch("http://localhost:3000/api/restaurants".concat(this.query))
                .then(response => response.json())
                .then((data) => {
                    this.restaurant = data;
                    this.foodList = data.foods;
                    for (let i = 0; i < data.foods.length; i++) {
                        if (!this.foodSetList.includes(data.foods[i].foodSet)) {
                            this.foodSetList.push(data.foods[i].foodSet);
                        }
                    }
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
            },
            filteredFoodList: function () {
                return this.foodList.filter((food) => {
                    return food.name.match(this.foodSearchName);
                })
            },

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

                let foodSetNav = document.getElementById("food-set-nav");

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
                if (window.pageYOffset < menu.offsetTop + offSet) {
                    foodSetNav.classList.remove("food-set-nav-sticky");
                }
                if (window.pageYOffset > menu.offsetTop + offSet && window.pageYOffset < info.offsetTop + offSet) {
                    menuTab.classList.add("active-nav");
                    infoTab.classList.remove("active-nav");
                    reviewTab.classList.remove("active-nav");
                    foodSetNav.classList.add("food-set-nav-sticky");
                }
                if (window.pageYOffset > (info.offsetTop + offSet) && window.pageYOffset < (review.offsetTop + offSet)) {
                    infoTab.classList.add("active-nav");
                    menuTab.classList.remove("active-nav");
                    reviewTab.classList.remove("active-nav");
                    foodSetNav.classList.remove("food-set-nav-sticky");
                }
                if (window.pageYOffset > review.offsetTop + offSet) {
                    reviewTab.classList.add("active-nav");
                    menuTab.classList.remove("active-nav");
                    infoTab.classList.remove("active-nav");
                    foodSetNav.classList.remove("food-set-nav-sticky");
                }

                //#### foodSet nav ####
                let elements = [];
                let tabElements = [];
                for (let i = 0; i < this.restaurant.categories.length; i++) {
                    elements.push(document.getElementById(''.concat(this.restaurant.categories[i].id)));
                    tabElements.push(document.getElementById(''.concat(this.restaurant.categories[i].id).concat('-tab')));
                }

                for (let i = 0; i < this.restaurant.categories.length - 1; i++) {
                    if (window.pageYOffset > elements[i].offsetTop + offSet && window.pageYOffset < elements[i + 1].offsetTop + offSet) {
                        for (let j = 0; j < this.restaurant.categories.length; j++) {
                            if (j === i) {
                                tabElements[j].classList.add("food-set-active-nav");
                            } else {
                                tabElements[j].classList.remove("food-set-active-nav");
                            }

                        }
                    }
                }
                let i = this.restaurant.categories.length - 1;
                if (window.pageYOffset > elements[i].offsetTop + offSet && window.pageYOffset < info.offsetTop + offSet) {
                    for (let j = 0; j < this.restaurant.categories.length; j++) {
                        if (j === i) {
                            tabElements[j].classList.add("food-set-active-nav");
                        } else {
                            tabElements[j].classList.remove("food-set-active-nav");
                        }

                    }
                }
                if (window.pageYOffset < menu.offsetTop + offSet) {
                    for (let j = 0; j < this.restaurant.categories.length; j++) {
                        tabElements[j].classList.remove("food-set-active-nav");

                    }
                }

            }
        }
    }
</script>

<style scoped>
    /* Responsive layout - when the screen is less than 1000px wide, hide food-set-nav */
    @media screen and (max-width: 1000px) {
        #food-set-nav {
            display: none !important;
        }
    }

    #container {
        padding: 0;
        position: relative;
        text-align: center;
        justify-content: center;
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
        position: absolute;
        left: 47%;
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
        /*height: 150px;*/
        height: 110px;
    }

    #show-loc-div {
        display: inline-block;
        max-width: 744px;
        width: 100%;
    }

    #loc-button-div {
        display: flex;
        justify-content: space-between;
        padding-bottom: 10px;
    }

    #loc-button-div > div {
        background-color: hsla(0, 0%, 100%, .9);
        border-radius: 5px;
        padding: 5px;
        font-size: 0.8em;
    }

    .cursor-pointer {
        cursor: pointer;
    }


    #show-div {
        display: inline-block;
        background-color: white;
        max-width: 744px;
        width: 100%;
        padding: 15px 0 5px 0;

        box-shadow: 0 0 3px lightgray;
    }

    #top-info-div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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
        background-color: white;
        max-width: 734px;
        z-index: 1;

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
        /*padding-right: 40px;*/
        padding: 20px;
    }

    .food-set-nav-sticky {
        position: fixed !important;
    }

    .food-set-active-nav {
        color: black !important;
        padding-right: 20px;
    }

    .food-set-active-nav > * {
        border-bottom-color: var(--btn-bg-or-highlighted-color);
        border-bottom-style: solid;
        border-bottom-width: 2px;
        font-size: 1.1em;
    }

    .food-set-nav-item {
        display: flex;
        justify-content: flex-end;
        color: gray;
        margin: 15px 10px 15px 10px;
        /*text-align: right;*/
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

    #search-input {
        display: flex;
        flex-direction: row;
        padding-top: 15px;
        border-radius: 5px;
        border-bottom: 1px solid lightgray;
        align-content: flex-end;
        justify-content: flex-end;
        align-items: flex-end;
    }

    #search-input > input {
        border-width: 0;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        padding: 5px;
        background-color: #fafafa;
        font-size: 1.1em;
        width: 100%;
    }

    #search-input > input:focus {
        outline-width: 0;
    }

    #search-input > div {
        padding: 5px;
    }

    #search-input > div > i {
        background-color: #fafafa;
        color: gray;
        font-size: 1.3em;
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
