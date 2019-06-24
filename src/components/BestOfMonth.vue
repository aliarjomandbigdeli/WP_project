<template>
    <div>
        <!--social media icons-->
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
              integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
              crossorigin="anonymous">

        <h2 id="best-of-the-month">رستوران‌‌ها و فست فود‌های برتر ماه بر اساس امتیاز‌دهی کاربران</h2>
        <div id="best-of-the-month-div">
            <a href="" v-for="detail in restaurants.slice(0,3)" :key="detail.name">
                <div class="best-month-div-items">
                    <div><img height="82" width="82" :src="detail.imgUrl"></div>
                    <h2>{{detail.name}}</h2>
                    <div class="stars-bar">
                        ----- (<span class="rate-participant">{{detail.numOfRates}}</span>)
                        <span class="stars">
                        <i class="far fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        </span>
                        &nbsp;<span class="rate-number">{{detail.rate}}</span>&nbsp;-----
                    </div>
                    <p class="foods">فست فود &#9679; پیتزا &#9679; برگر &#9679; ساندویچ</p>
                    <p class="address">{{detail.address}}</p>
                    <div class="order-bst-rest-btn">شروع سفارش</div>
                </div>
            </a>


<!--                        <a href="">-->
<!--                            <div class="best-month-div-items" id="best-month-item-3">-->
<!--                                <div><img src="../../mocks/restaurants/bst-rest-1.jpg"></div>-->
<!--                                <h2>(باگت (اندرزگو </h2>-->
<!--                                <div class="stars-bar">-->
<!--                                    -&#45;&#45;&#45;&#45; (<span class="rate-participant">81</span>)-->
<!--                                    <span class="stars">-->
<!--                            <i class="far fa-star"></i>-->
<!--                            <i class="fas fa-star"></i>-->
<!--                            <i class="fas fa-star"></i>-->
<!--                            <i class="fas fa-star"></i>-->
<!--                            <i class="fas fa-star"></i>-->
<!--                            </span>-->
<!--                                    &nbsp;<span class="rate-number">3.8</span>&nbsp;-&#45;&#45;&#45;&#45;-->
<!--                                </div>-->
<!--                                <p class="foods">فست فود &#9679; پیتزا &#9679; برگر &#9679; ساندویچ</p>-->
<!--                                <p class="address">بلوار اندرزگو، بین کاوه و قیطریه، نبش مهر محمدی جنوبی</p>-->
<!--                                <div class="order-bst-rest-btn">شروع سفارش</div>-->
<!--                            </div>-->
<!--                        </a>-->
<!--                        <a href="">-->
<!--                            <div class="best-month-div-items" id="best-month-item-2">-->
<!--                                <div><img src="../../mocks/restaurants/bst-rest-2.jpg"></div>-->
<!--                                <h2>(شیلا (مطهری </h2>-->
<!--                                <div class="stars-bar">-->
<!--                                    -&#45;&#45;&#45;&#45; (<span class="rate-participant">36</span>)-->
<!--                                    <span class="stars">-->
<!--                            <i class="far fa-star"></i>-->
<!--                            <i class="fas fa-star"></i>-->
<!--                            <i class="fas fa-star"></i>-->
<!--                            <i class="fas fa-star"></i>-->
<!--                            <i class="fas fa-star"></i>-->
<!--                            </span>-->
<!--                                    &nbsp;<span class="rate-number">3.8</span>&nbsp;-&#45;&#45;&#45;&#45;-->
<!--                                </div>-->
<!--                                <p class="foods">فست فود &#9679; پیتزا &#9679; برگر &#9679; ساندویچ</p>-->
<!--                                <p class="address">ولیعصر، مطهری، فتحی شقاقی، زیر برج بلورین</p>-->
<!--                                <div class="order-bst-rest-btn">شروع سفارش</div>-->
<!--                            </div>-->
<!--                        </a>-->
<!--                        <a href="">-->
<!--                            <div class="best-month-div-items" id="best-month-item-1">-->
<!--                                <div><img src="../../mocks/restaurants/bst-rest-3.jpg"></div>-->
<!--                                <h2>(فست فود پیتزاهات (سعادت آباد </h2>-->
<!--                                <div class="stars-bar">-->
<!--                                    -&#45;&#45;&#45;&#45; (<span class="rate-participant">69</span>)-->
<!--                                    <span class="stars">-->
<!--                            <i class="far fa-star"></i>-->
<!--                            <i class="fas fa-star"></i>-->
<!--                            <i class="fas fa-star"></i>-->
<!--                            <i class="fas fa-star"></i>-->
<!--                            <i class="fas fa-star"></i>-->
<!--                            </span>-->
<!--                                    &nbsp;<span class="rate-number">3.8</span>&nbsp;-&#45;&#45;&#45;&#45;-->
<!--                                </div>-->
<!--                                <p class="foods">فست فود &#9679; پیتزا &#9679; برگر &#9679; ساندویچ</p>-->
<!--                                <p class="address">سعادت آباد، پاساژ میلاد نور، طبقه همکف</p>-->
<!--                                <div class="order-bst-rest-btn">شروع سفارش</div>-->
<!--                            </div>-->
<!--                        </a>-->
        </div>
    </div>
</template>

<script>
    export default {
        name: "BestOfMonth",

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

    .best-month-div-items {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px;
        text-align: center;
        height: 365px;
        box-shadow: 0 0 3px lightgray;
    }

    .best-month-div-items:hover {
        box-shadow: 0 0 10px lightgray;
    }

    .best-month-div-items > div > img {
        box-shadow: 1px 1px 2px 2px lightgray;
    }

    .best-month-div-items > p {
        color: gray;
    }

    .stars-bar {
        display: flex;
        color: lightgray;
    }

    .stars > i {
        color: orange;
    }

    .rate-number {
        color: orange;
    }

    .order-bst-rest-btn {
        color: var(--btn-bg-or-highlighted-color);
        border-color: var(--btn-bg-or-highlighted-color);
        border-radius: 20px;
        border-style: solid;
        border-width: 1px;
        padding: 5px 25px 5px 25px;
        margin-top: 10px;
    }

    .order-bst-rest-btn:hover {
        background-color: rgba(255, 0, 134, 0.11);
    }
</style>