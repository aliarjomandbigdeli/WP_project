<template>
    <div id="SearchPage">
        <MyHeader></MyHeader>
        <div id="search-banner"></div>
        <div id="loc-search-p" dir="rtl">
            {{restaurants.length}}<span> رستوران امکان سرویس دهی به </span><span
                class="bold">{{city}}، {{district}}</span><span> را دارند</span>
        </div>
        <div id="search-div">
            <div id="search-input">
                <input name="rest-name" size="40" v-model="restName"
                       placeholder="جستجوی رستوران در این محدوده" dir="rtl">
                <div id="location-icon"><i class="fas fa-search"></i></div>
            </div>
        </div>
        <div id="result-container">
            <div id="results-div">
                <div class="result-div">
                    <router-link v-for="restaurant in openFilteredRestaurant" :key="restaurant.name"
                                 :to="{ name: 'RestaurantPage', params: { id: restaurant.id } }">
                        <InfoBoxSmall :name="restaurant.name"
                                      :rate="restaurant.averageRate"
                                      :categories="restaurant.categories"
                                      :address="restaurant.address.addressLine"
                                      :imgUrl="restaurant.logo"
                                      :opened="true"></InfoBoxSmall>
                    </router-link>
                </div>
                <h2 id="closed-title">رستوران های بسته</h2>
                <div class="result-div">
                    <router-link v-for="restaurant in closedFilteredRestaurant" :key="restaurant.name"
                                 :to="{ name: 'RestaurantPage', params: { id: restaurant.id } }">
                        <InfoBoxSmall :name="restaurant.name"
                                      :rate="restaurant.averageRate"
                                      :categories="restaurant.categories"
                                      :address="restaurant.address.addressLine"
                                      :imgUrl="restaurant.logo"
                                      :opened="false"></InfoBoxSmall>
                    </router-link>
                </div>
            </div>
            <div id="filter-checkboxes">
                <div id="filter-checkbox-title">فیلتر بر اساس نوع غذا</div>
                <input id="kind-input" v-model="inputTxtCheckbox" @keyup.enter="inputCheckbox" name="kind-food"
                       placeholder="جستجوی دسته بندی غذاها"/>
                <div v-for="(kind, index) in categories" :key="index">
                    <div class="kind-item" v-if="checked.includes(kind)">
                        <md-checkbox :value="kind" v-model="checked" radio-value="filled" @change="changeCheckbox">
                            &nbsp;{{kind}}
                        </md-checkbox>
                    </div>
                </div>
                <div v-for="(kind, index) in categories" :key="index">
                    <div class="kind-item" v-if="!checked.includes(kind)">
                        <md-checkbox :value="kind" v-model="checked" radio-value="filled" @change="changeCheckbox">
                            &nbsp;{{kind}}
                        </md-checkbox>
                    </div>
                </div>
            </div>
        </div>
        <MyFooter></MyFooter>
    </div>

</template>

<script>
    import MyHeader from "@/components/MyHeader";
    import MyFooter from "@/components/MyFooter";
    import InfoBoxSmall from "@/components/InfoBoxSmall";


    export default {
        name: "SearchPage",
        components: {InfoBoxSmall, MyFooter, MyHeader},
        data() {
            return {
                city: "",
                district: "",
                query: "",
                checked: [],
                inputTxtCheckbox: "",
                restName: "",
                restaurants: [],
                categories: [
                    "ساندویچ",
                    "برگر",
                    "پیتزا",
                    "کباب",
                    "سالاد",
                    "ایرانی",
                    "پاستا",
                    "ماهی",
                    "صبحانه",
                    "آبمیوه طبیعی",
                    "استیک",
                    "سوپ",
                    "فست فود"
                ]
            }
        },
        created() {
            this.city = this.$route.params.city;
            this.district = this.$route.params.district;
            this.query = "?city=".concat(this.city).concat("&area=").concat(this.district);
        },
        mounted() {
            fetch("http://localhost:3000/api/restaurants".concat(this.query))
                .then(response => response.json())
                .then((data) => {
                    this.restaurants = data;
                })
        },
        computed: {
            openFilteredRestaurant: function () {
                return this.restaurants.filter((restaurant) => {
                    return restaurant.name.match(this.restName) &&
                        this.getCurrentHour() >= restaurant.openingTime &&
                        this.getCurrentHour() <= restaurant.closingTime;
                })
            },
            closedFilteredRestaurant: function () {
                return this.restaurants.filter((restaurant) => {
                    return restaurant.name.match(this.restName) &&
                        (this.getCurrentHour() < restaurant.openingTime ||
                            this.getCurrentHour() > restaurant.closingTime);
                })
            }
        },
        methods: {
            inputCheckbox() {
                if (!this.checked.includes(this.inputTxtCheckbox) && this.categories.includes(this.inputTxtCheckbox))
                    this.checked.push(this.inputTxtCheckbox);
            },
            changeCheckbox() {
                let additionalQueryPart = "";
                for (let i = 0; i < this.checked.length; i++) {
                    additionalQueryPart = additionalQueryPart.concat("&category=").concat(this.checked[i]);
                }
                // console.log(`query log: ${additionalQueryPart}`);
                fetch("http://localhost:3000/api/restaurants".concat(this.query).concat(additionalQueryPart))
                    .then(response => response.json())
                    .then((data) => {
                        this.restaurants = data;
                    })
            },
            getCurrentHour() {
                let currentDate = new Date();
                return currentDate.getHours();
            }
        }
    }
</script>

<style scoped>
    #search-banner {
        height: 170px;
        background-image: url("../mocks/restaurant-search-banner.jpg");
    }

    #loc-search-p {
        text-align: right;
        padding: 10px 50px 10px 10px;
        font-size: 1.4em;
        background-color: white;
    }

    .bold {
        font-weight: bold;
    }

    #search-div {
        padding: 15px 50px 10px 5px;
        display: flex;
        justify-content: flex-end;
        background-color: white;
    }

    #search-input {
        display: flex;
        border-radius: 5px;
        border: 1px solid lightgray;
        background-color: #fafafa;
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
        font-size: 1em;
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
        font-size: 1em;
    }


    #result-container {
        display: flex;
        justify-content: flex-end;
        padding: 50px 20px 10px 10px;
        background-color: #fafafa;
    }

    .result-div {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
    }

    .result-div > * {
        margin: 15px 20px 15px 20px;
    }

    #filter-checkboxes {
        direction: rtl;
        border-radius: 5px;
        border-color: lightgray;
        border-style: solid;
        border-width: 1px;
        background-color: white;
    }

    #filter-checkbox-title {
        font-size: .7em;
        padding: 5px;
        border-bottom-color: lightgray;
        border-bottom-style: solid;
        border-bottom-width: 1px;
        margin-bottom: 5px;
    }

    #kind-input {
        border-radius: 5px;
        border-width: 1px;
        margin: 5px 10px 5px 10px;
        background-color: #fafafa;
        line-height: 1.8;
        outline-width: 0;
    }


    .kind-item {
        border-bottom-color: lightgray;
        border-bottom-style: solid;
        border-bottom-width: 1px;
        padding-top: 5px;
    }

    .kind-item:hover {
        background-color: lightgray;
    }

    .md-checkbox {
        display: flex;
    }

    #closed-title {
        text-align: right;
        padding-right: 30px;
    }

</style>
