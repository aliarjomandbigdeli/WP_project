<template>
    <div id="best-restaurant-div">
        <h3 id="best-restaurant-title">رستوران‌های خوب تهران در ریحون</h3>
        <div id="best-rest-grid">
            <a href="" v-for="detail in restaurants.slice(3)" :key="detail.name">
                <div class="grid-item">
                    <div><img height="82" width="82" :src="detail.imgUrl"></div>
                    <div>{{detail.name}}</div>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BestRestaurants",
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
    /* Responsive layout - when the screen is less than 650px wide, hide sms-img */
    @media screen and (max-width: 650px) {
        #best-rest-grid {
            grid-template-columns: auto auto !important; /*make 2 columns*/

        }
    }

    #best-restaurant-div {
        padding: 50px;
        background-image: url("../../mocks/best-restaurunt.png");
    }

    #best-restaurant-title {
        text-align: right;
    }

    #best-rest-grid {
        display: grid;
        justify-items: end;
        justify-content: end;
        grid-template-columns: auto auto auto auto; /*make 4 columns*/
        grid-gap: 60px;
        text-align: center;
        font-size: 0.85em;
    }

    .grid-item{
        color: black !important;
    }

    .grid-item > div > img:hover {
        box-shadow: 0 0 10px lightgray;
    }
</style>
