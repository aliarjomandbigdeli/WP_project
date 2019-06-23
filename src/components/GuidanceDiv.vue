<template>
    <div id="guidance-div">
<!--        <div class="guidance-div-items" v-for="item in itemsDetails" :key="item.id">-->
<!--            <p>{{item.title}}</p>-->
<!--            <div class="guidance-des-pic-div">-->
<!--                <div>{{item.message}}</div>-->
<!--                <div><img :src="item.src" alt="guide"/></div>-->
<!--            </div>-->
<!--        </div>-->


        <div class="guidance-div-items">
            <p>شهر و منطقه خود را وارد کنید</p>
            <div class="guidance-des-pic-div">
                <div>منوی مورد علاقه خود را از بین بیش از 3500 رستوران خوب در تهران و
                    شهرستان‌ها جستجو کنید.
                </div>
                <div><img src="../../mocks/guidance-3.png"></div>
            </div>
        </div>
        <div class="guidance-div-items">
            <p>غذای خود را انتخاب کنید</p>
            <div class="guidance-des-pic-div">
                <div>غذایی که می‌خواهید را انتخاب کنید و بدون هزینه اضافی سفارش خود را
                    ثبت کنید.
                </div>
                <div><img src="../../mocks/guidance-2.png"></div>
            </div>
        </div>
        <div class="guidance-div-items">
            <p>غذایتان را نوش جان کنید</p>
            <div class="guidance-des-pic-div">
                <div>درب منزل یا حضوری از خود رستوران سفارشتان را تحویل بگیرید.</div>
                <div><img src="../../mocks/guidance-1.png"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GuidanceDiv",

        data() {
            return {
                itemsDetails: [
                    {
                        title: "شهر و منطقه خود را وارد کنید",
                        message: "منوی مورد علاقه خود را از بین بیش از 3500 رستوران خوب در تهران و شهرستان‌ها جستجو کنید.",
                        src: "../../mocks/guidance-3.png",
                        id: 1
                    },
                    {
                        title: "غذای خود را انتخاب کنید",
                        message: "غذایی که می‌خواهید را انتخاب کنید و بدون هزینه اضافی سفارش خود را ثبت کنید.",
                        src: "../../mocks/guidance-2.png",
                        id: 2
                    },
                    {
                        title: "غذایتان را نوش جان کنید",
                        message: "درب منزل یا حضوری از خود رستوران سفارشتان را تحویل بگیرید.",
                        src: "../../mocks/guidance-1.png",
                        id: 3
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    #guidance-div {
        display: flex;
        flex-direction: row-reverse;
        flex-wrap: wrap;
        justify-content: space-around;
        color: #4a5575;
        text-align: right;
        margin-bottom: 100px;
    }

    .guidance-div-items {
        flex-basis: 360px;
    }

    .guidance-des-pic-div {
        display: flex;
        padding: 10px 15px 10px 10px;
        box-shadow: 1px 1px 2px 2px lightgray;
        justify-content: center;
        align-items: center;
    }
</style>