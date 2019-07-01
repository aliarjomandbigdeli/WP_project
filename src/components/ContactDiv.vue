<template>
    <div id="sms-div">
        <div id="sms-txt-div">
            <h2>ریحون روی موبایل</h2>
            <p dir="rtl">برای دریافت لینک دانلود اپلیکیشن ریحون، شماره موبایل خود را وارد کنید.</p>
            <div id="sms-input-div">
                <div id="sms-button">SMS دریافت لینک از طریق</div>
                <input type="text" placeholder="مثلا **91220530"/>
            </div>
            <h6 dir="rtl">اپلیکیشن ریحون برای Android و iOS در دسترس است.</h6>
            <div id="store-icons">
                <a href="" v-for="url in storesIconUrls" :key="url"><img :src="url"></a>
            </div>
        </div>

        <img id="sms-img" src="../../mocks/iPhone-sms.png">
    </div>
</template>

<script>
    export default {
        name: "ContactDiv",
        data() {
            return {
                // storesIconUrls: [require("../../mocks/stores/sibapp-light.png"),
                //     require("../../mocks/stores/google-play-light.png")]
                storesIconNames: ["sibapp-light.png", "google-play-light.png",
                    "cafebazaar-light.png", "ios-direct-light.png", "reyhoon-light.png"],
                // storesIconUrls: this.computeUrls(this.storesIconNames),
                storesIconUrls: [require("../../mocks/stores/sibapp-light.png"), require("../../mocks/stores/google-play-light.png"),
                    require("../../mocks/stores/cafebazaar-light.png"), require("../../mocks/stores/ios-direct-light.png"),
                    require("../../mocks/stores/reyhoon-light.png")]
            }
        },
        computed: {
            // storesIconUrls: {
            //     set: function () {
            //         let myList;
            //         myList = [];
            //         let i;
            //         for (i = 0; i < this.storesIconNames.length; i++) {
            //             myList.append(require("../../mocks/stores/" + this.storesIconNames[i]));
            //         }
            //         return myList;
            //     }
            //
            // }

        },
        methods: {
            computeUrls(names) {
                let myList;
                myList = [];
                let i;
                for (i = 0; i < names.length; i++) {
                    myList.push(require("../../mocks/stores/".concat(names[i])));
                }
                return myList;
            }
        }
    }
</script>

<style scoped>
    /* Responsive layout - when the screen is less than 1050px wide, hide sms-img */
    @media screen and (max-width: 1050px) {
        #sms-img {
            display: none;
        }
    }

    #sms-div {
        background-color: var(--main-bg-color);
        padding-top: 250px;
        padding-bottom: 40px;
        position: relative;
    }

    #sms-img {
        position: absolute;
        left: -150px;
        top: 100px;
    }

    #sms-txt-div {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        background-color: white;
        margin-right: 20px;
        margin-left: 20px;
        padding: 50px 20px 40px 20px;
    }

    #sms-txt-div > p {
        font-size: 1.1em;
    }

    #sms-txt-div > h6 {
        color: #9baac0;
    }

    #sms-input-div {
        display: flex;
        width: 50%;
        justify-content: flex-end;
        min-width: 350px;
    }

    #sms-input-div > input {
        padding: 15px;
        text-align: right;
        border-bottom-right-radius: 25px;
        border-top-right-radius: 25px;
        font-size: 1.2em;
        width: 50%;
        border-width: 1px;
    }

    #sms-input-div > input:focus {
        outline-width: 0;
        border: 1px solid purple;
    }

    #sms-button {
        padding: 20px 30px 20px 30px;
        border-bottom-left-radius: 25px;
        border-top-left-radius: 25px;
        background: linear-gradient(to right, red, purple);
        color: white;
        font-size: 0.9em;
    }

    #store-icons {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        width: 60%;
        min-width: 450px;
    }

    #store-icons > * {
        margin: 5px;
    }

    #store-icons > a > img:hover {
        box-shadow: 0 0 7px lightgray;
    }

    #store-icons > a > img {
        border-radius: 10px;
    }
</style>
