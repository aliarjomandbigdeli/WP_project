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
            <div id="city-sel-div">
                <vue-dropdown id="city-sel" :config="config"
                              @setSelectedOption="setNewSelectedOption($event)"></vue-dropdown>
            </div>

            <!--            <select name="citySel" id="city-sel" v-model="city">-->
            <!--                <option value="تهران">تهران</option>-->
            <!--                <option value="اصفهان">اصفهان</option>-->
            <!--                <option value="شیراز">شیراز</option>-->
            <!--                <option value="مشهد">مشهد</option>-->
            <!--            </select>-->

            <div id="search-bar-left-part">
                <div id="search-input">
                    <input list="districts" name="district" placeholder="مثلا نیاوران" dir="rtl" v-model="district"
                           @keyup.enter="onSubmit" @click="updateAreaList">
                    <datalist id="districts">
                        <option>&#128205;جستجو خودکار منطقه شما</option>
                        <option v-for="(area,index) in areaList" :key="index">{{area}}</option>
                    </datalist>
                    <div id="location-icon"><i class="fas fa-map-marker-alt"></i></div>
                </div>
                <a>
                    <div class="search-bar-items" @click="onSubmit" id="search-btn-icon-div">

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
        </div>
        <div class="order-div-items"><p></p></div>
        <div class="order-div-items"><p></p></div>
        <div class="order-div-items"><p></p></div>

    </div>
</template>

<script>
    import router from '../router'
    import VueDropdown from 'vue-dynamic-dropdown'

    export default {
        name: "SearchContainer",
        components: {
            VueDropdown
        },
        data() {
            return {
                city: "",
                district: "",
                restaurantsAddress: [],
                config: {
                    options: [
                        {
                            value: "تهران"
                        },
                        {
                            value: "اصفهان"
                        },
                        {
                            value: "مشهد"
                        },
                        {
                            value: "شیراز"
                        },
                    ],
                    placeholder: "شهر",
                    backgroundColor: "white",
                    textColor: "black",
                    borderRadius: "1.1em",
                    // border: "2px solid gray",
                    // borderBottom: "2px solid gray",
                    // borderBottomColor: "gray",
                    // borderBottomStyle: "solid",
                    // borderBottomWidth: "2px",
                    width: 120,
                    // height: 62,
                    // fontFamily: "Shabnam",
                    // hoverBackgroundColor: "gray",
                    // backgroundExpandedColor: "gray",
                    // backdropBackground: "gray",
                    // hoverBackgroundColor: "#777",
                    // hoverBackgroundColor: "#808080",
                }
            }
        },
        computed: {
            areaList: function () {
                this.updateAreaList();
                let list = [];
                for (let i = 0; i < this.restaurantsAddress.length; i++) {
                    if (!list.includes(this.restaurantsAddress[i].address.area)) {
                        list.push(this.restaurantsAddress[i].address.area)
                    }
                }
                return list;
            }
        },
        methods: {
            onSubmit() {
                router.push({name: "SearchPage", params: {city: this.city, district: this.district}});
            },
            updateAreaList() {
                if (this.city) {
                    fetch("http://localhost:3000/api/restaurants/suggest/".concat(this.city).concat("/").concat(this.district))
                        .then(response => response.json())
                        .then((data) => {
                            this.restaurantsAddress = data;
                        })
                }
            },
            setNewSelectedOption(selectedOption) {
                this.config.placeholder = selectedOption.value;
                this.city = selectedOption.value;

                // let element = document.getElementById("city-sel-div");
                // if (!element.classList.contains("white-background")) {
                // element.classList.add("white-background");
                // } else {
                //     element.classList.remove("white-background");
                // }
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
        max-height: 513px;
    }

    .order-div-items {
        margin: 10px;
    }

    #search-bar-div {
        display: flex;
        flex-direction: row-reverse;
        padding: 10px;
        width: 50%;
        min-width: 430px;
    }

    #search-bar-left-part {
        display: flex;
        flex-direction: row-reverse;
        width: 100%;
        height: 84px;
        padding: 10px;
        border-radius: 10px 0 0 10px;
        background-color: white;
    }

    .white-background {
        background-color: white;
    }

    #city-sel-div {
        padding: 10px 10px 10px 0;
        border-radius: 0 10px 10px 0;
        background-color: white;
    }

    #city-sel {
        /*--dropdown-background-color: gray !important;*/
        border-radius: 10px;
        /*font-family: Shabnam !important;*/
        font-size: 1.5em;
        padding-left: 10px;
        border-color: lightgray;
        height: 100%;
        padding-top: 10px;
    }

    #search-input {
        display: flex;
        background-color: white;
        border-bottom-right-radius: 10px;
        border-top-right-radius: 10px;
        border: 1px solid lightgray;
        width: 100%;
        max-height: 64px;
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
