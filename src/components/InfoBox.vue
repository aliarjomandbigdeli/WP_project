<template>
    <div class="best-month-div-items">
        <div><img height="82" width="82" :src="imgUrl"></div>
        <h2>{{name}}</h2>
        <div class="stars-bar">
            ----- (<span class="rate-participant">{{numOfRates}}</span>)
            <star-rating :rating="rate" :read-only="true" :increment="0.01" :star-size="20"
                         :show-rating="false"></star-rating>
            &nbsp;<span class="rate-number">{{rate}}</span>&nbsp;-----
        </div>
        <p class="foods">
            <span v-for="food in foods" :key="food">&#9679; {{dictionary[food]}}</span>
        </p>
        <p class="address">{{address}}</p>
        <div class="order-bst-rest-btn">شروع سفارش</div>
    </div>
</template>

<script>
    import StarRating from 'vue-star-rating'

    export default {

        name: "InfoBox",
        components: {StarRating},
        props: ['name', 'numOfRates', 'rate', 'foods', 'address', 'imgUrl'],
        data() {
            return {
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
        }
    }
</script>

<style scoped>

    .best-month-div-items {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px;
        text-align: center;
        height: 365px;
        box-shadow: 0 0 3px lightgray;
        color: black !important;
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
