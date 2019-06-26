<template>
    <div id="SearchPage">
        <MyHeader></MyHeader>
        <div id="search-banner"></div>
        <div>{{checked}}</div>
        <div id="loc-search-p" dir="rtl">
            {{number}}<span> رستوران امکان سرویس دهی به </span><span class="bold">{{city}}، {{district}}</span><span> را دارند</span>
        </div>
        <div id="search-div">
            <div id="search-input">
                <input name="rest-name" size="40" placeholder="جستجوی رستوران در این محدوده" dir="rtl">
                <div id="location-icon"><i class="fas fa-search"></i></div>
            </div>
        </div>
        <div id="result-container">
            <div id="results">
                <router-link v-for="detail in restaurants" :key="detail.name"
                             :to="{ name: 'RestaurantPage', params: { id: detail.id } }">
                    <InfoBoxSmall :name="detail.name"
                                  :rate="detail.rate"
                                  :foods="detail.foods"
                                  :address="detail.address"
                                  :imgUrl="detail.imgUrl"></InfoBoxSmall>
                </router-link>
            </div>
            <div id="filter-checkboxes">
                <div id="filter-checkbox-title">فیلتر بر اساس نوع غذا</div>
                <input id="kind-input" name="kind-food" placeholder="جستجوی دسته بندی غذاها"/>

                <div v-for="(kind, index) in foodKinds" :key="index">
                    <div class="kind-item">
                        <md-checkbox :value="kind" v-if="true" v-model="checked" radio-value="filled">
                            &nbsp;{{dictionary[kind]}}
                        </md-checkbox>
                    </div>
                </div>
                <!--                <div v-for="(kind, index) in foodKinds" :key="index">-->
                <!--                    <div class="kind-item">-->
                <!--                        <md-checkbox :value="kind" v-if="!checked.contains(kind)" v-model="checked" radio-value="filled">-->
                <!--                            &nbsp;{{dictionary[kind]}}-->
                <!--                        </md-checkbox>-->
                <!--                        <div class="item-border" v-if="!checked.contains(kind)"></div>-->
                <!--                    </div>-->
                <!--                </div>-->
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
                number: 0,
                city: "",
                district: "",
                query: "",
                checked: [],
                foodKinds: [
                    'sandwich',
                    'burger',
                    'pizza',
                    'kebab',
                    'salad',
                    'iranian',
                    'pasta',
                    'fish',
                    'breakfast',
                    'juice',
                    'steak',
                    'soup',
                    'fastfood'
                ],
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
        created() {
            this.city = this.$route.params.city;
            this.district = this.$route.params.district;
            this.query = "best-restaurants";
        },
        mounted() {
            // fetch("http://demo2469824.mockable.io/best-restaurants")
            fetch("http://demo2469824.mockable.io/".concat(this.query))
                .then(response => response.json())
                .then((data) => {
                    this.restaurants = data.restaurants;
                })
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

    #results {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    #results > * {
        margin: 15px 5px 15px 5px;
    }

</style>
