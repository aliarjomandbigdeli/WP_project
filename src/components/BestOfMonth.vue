<template>
    <div>
        <h2 id="best-of-the-month">رستوران‌‌ها و فست فود‌های برتر ماه بر اساس امتیاز‌دهی کاربران</h2>
        <div id="best-of-the-month-div">
            <a href="" v-for="detail in restaurants.slice(0,3)" :key="detail.name">
                <div class="best-month-div-items">
                    <div><img height="82" width="82" :src="detail.imgUrl"></div>
                    <h2>{{detail.name}}</h2>
                    <div class="stars-bar">
                        ----- (<span class="rate-participant">{{detail.numOfRates}}</span>)
                        <star-rating :rating="detail.rate" :read-only="true" :increment="0.01" :star-size="20"
                                     :show-rating="false"></star-rating>
                        &nbsp;<span class="rate-number">{{detail.rate}}</span>&nbsp;-----
                    </div>
                    <p class="foods">
                        <span v-for="food in detail.foods" :key="food">&#9679; {{dictionary[food]}}</span>
                    </p>
                    <p class="address">{{detail.address}}</p>
                    <div class="order-bst-rest-btn">شروع سفارش</div>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
    import StarRating from 'vue-star-rating'

    export default {
        name: "BestOfMonth",
        components: {StarRating},
        data() {
            return {
                restaurants: [],
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