<template>
    <div id="best-restaurant-div">
        <h3 id="best-restaurant-title">رستوران‌های خوب تهران در ریحون</h3>
        <div id="best-rest-grid">
<!--            <a href="" v-for="item in itemsDetails" :key="item.title">-->
<!--                <div class="grid-item">-->
<!--                    <div><img :src="item.src"></div>-->
<!--                    <div>{{item.title}}</div>-->
<!--                </div>-->
<!--            </a>-->


            <a href="">
                <div class="grid-item">
                    <div><img src="../../mocks/restaurants/res(1).jpg"></div>
                    <div>آمولای</div>
                </div>
            </a>
            <a href="">
                <div class="grid-item">
                    <div><img src="../../mocks/restaurants/res(2).jpg"></div>
                    <div>تهیه غذای راد</div>
                </div>
            </a>
            <a href="">
                <div class="grid-item">
                    <div><img src="../../mocks/restaurants/res(3).jpg"></div>
                    <div>شاندیز جردن</div>
                </div>
            </a>
            <a href="">
                <div class="grid-item">
                    <div><img src="../../mocks/restaurants/res(4).jpg"></div>
                    <div>ویترین</div>
                </div>
            </a>
            <a href="">
                <div class="grid-item">
                    <div><img src="../../mocks/restaurants/res(5).jpg"></div>
                    <div>رستوران کوبابا</div>
                </div>
            </a>
            <a href="">
                <div class="grid-item">
                    <div><img src="../../mocks/restaurants/res(6).jpg"></div>
                    <div>جوگریل فود</div>
                </div>
            </a>
            <a href="">
                <div class="grid-item">
                    <div><img src="../../mocks/restaurants/res(7).jpg"></div>
                    <div>لانجین</div>
                </div>
            </a>
            <a href="">
                <div class="grid-item">
                    <div><img src="../../mocks/restaurants/res(8).jpg"></div>
                    <div>جنارو</div>
                </div>
            </a>
            <a href="">
                <div class="grid-item">
                    <div><img src="../../mocks/restaurants/res(9).jpg"></div>
                    <div>شیرین پلو</div>
                </div>
            </a>
            <a href="">
                <div class="grid-item">
                    <div><img src="../../mocks/restaurants/res(10).jpg"></div>
                    <div>امیر شکلات</div>
                </div>
            </a>
            <a href="">
                <div class="grid-item">
                    <div><img src="../../mocks/restaurants/res(11).jpg"></div>
                    <div>کترینگ و تشریفات<br> ناریجه</div>
                </div>
            </a>
            <a href="">
                <div class="grid-item">
                    <div><img src="../../mocks/restaurants/res(12).jpg"></div>
                    <div>تومو</div>
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
                itemsDetails: [
                    {
                        title: "آمولای",
                        src: "../../mocks/restaurants/res(1).jpg",
                    },
                    {
                        title: "تهیه غذای راد",
                        src: "../../mocks/restaurants/res(2).jpg",
                    },
                    {
                        title: "شاندیز جردن",
                        src: "../../mocks/restaurants/res(3).jpg",
                    }
                ]
            }
        }
    }
</script>

<style scoped>
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

    .grid-item > div > img:hover {
        box-shadow: 0 0 10px lightgray;
    }
</style>