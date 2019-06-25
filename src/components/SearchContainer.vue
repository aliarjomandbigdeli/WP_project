<template>
    <div id="order-div">
        <div class="order-div-items"><p></p></div>
        <div class="order-div-items"><p></p></div>
        <div class="order-div-items"><img src="../../mocks/reyhoon-icon.png" alt="Reyhoon"></div>
        <div class="order-div-items"><p></p></div>
        <div class="order-div-items"><h1>سفارش آنلاین غذا از بهترین رستوران‌ها و فست‌فود‌‌ها</h1></div>
        <div class="order-div-items"><p dir="rtl">برای دیدن لیست رستوران‌ها و فست‌فود‌هایی که به شما سرویس می‌دهند،
            منطقه
            خود را وارد کنید.</p></div>
        <div class="order-div-items" id="search-bar-div">
            <select name="citySel" id="city-sel" v-model="city">
                <option value="تهران">تهران</option>
                <option value="اصفهان">اصفهان</option>
                <option value="شیراز">شیراز</option>
                <option value="مشهد">مشهد</option>
            </select>
            <div id="search-input">
                <input list="districts" name="district" placeholder="مثلا نیاوران" dir="rtl" v-model="district"
                       @keyup.enter="onSubmit">
                <datalist id="districts">
                    <option>&#128205;جستجو خودکار منطقه شما</option>
                    <!--                    <option value="&#128205;جستجو خودکار منطقه شما">&#128205;جستجو خودکار منطقه شما</option>-->
                </datalist>
                <div id="location-icon"><i class="fas fa-map-marker-alt"></i></div>
            </div>
            <a href="">
                <div class="search-bar-items" id="search-btn-icon-div">

                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 18 18">
                        <g fill="none" fill-rule="evenodd">
                            <path d="M0 0h18v18H0z"></path>
                            <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                               transform="translate(2 2)">
                                <circle cx="6.125" cy="6.125" r="6.125"></circle>
                                <path d="M13.373 13.373l-2.767-2.767"></path>
                            </g>
                            <path d="M0 0h18v18H0z"></path>
                        </g>
                    </svg>
                    <!--<img src="../mocks/search-icon.png">-->
                </div>
            </a>
        </div>
        <div class="order-div-items"><p></p></div>
        <div class="order-div-items"><p></p></div>
        <div class="order-div-items"><p></p></div>

    </div>
</template>

<script>
    import router from '../router'

    export default {
        name: "SearchContainer",
        data() {
            return {
                city: "",
                district: ""
            }
        },
        methods: {
            onSubmit() {
                router.push({name: "SearchPage", params: {city: this.city, district: this.district}});
            }
        }
    }
</script>

<style scoped>
    #order-div {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        background-image: url("../../mocks/pizza.png");
    }

    .order-div-items {
        margin: 10px;
    }

    #search-bar-div {
        display: flex;
        flex-direction: row-reverse;
        padding: 10px;
        border-radius: 10px;
        background-color: white;
        width: 50%;
        min-width: 430px;
    }

    #city-sel {
        border-radius: 10px;
        font-size: 1.5em;
        background-color: white;
        margin-left: 5px;
        padding-left: 10px;
        border-color: lightgray;
    }

    #search-input {
        display: flex;
        border-bottom-right-radius: 10px;
        border-top-right-radius: 10px;
        border: 1px solid lightgray;
        width: 100%;
    }

    #search-input > input {
        border-width: 0;
        padding: 10px;
        width: 100%;
        font-size: 1.2em;
    }

    #search-input > input:focus {
        outline-width: 0;
    }

    #search-input > div {
        padding: 15px;
    }

    #search-input > div > i {
        background-color: white;
        color: lightgray;
        font-size: 1.8em;
    }

    #search-btn-icon-div {
        padding: 15px 10px 10px 10px;
        border-bottom-left-radius: 10px;
        border-top-left-radius: 10px;
        background: linear-gradient(to right, red, purple);
        color: white;
    }

    #search-btn-icon-div > a {
        color: white;
    }
</style>
