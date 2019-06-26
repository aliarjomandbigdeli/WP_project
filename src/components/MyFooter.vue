<template>
    <div id="MyFooter">
        <!--social media icons-->
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
              integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
              crossorigin="anonymous">

        <div id="footer-cols-div">
            <div class="footer-items">
                <div class="footer-item-line" id="footer-line-1"></div>
                <h5>اپلیکیشن‌های موبایل</h5>
                <div></div>
                <!--                <a href="" class="footer-store-icons"><img src="../mocks/stores/google-play-dark.png"></a>-->
                <a href="" class="footer-store-icons"><img src="../../mocks/stores/google-play-dark.png"></a>
                <a href="" class="footer-store-icons"><img src="../../mocks/stores/sib-app-dark.png"></a>
                <a href="" class="footer-store-icons"><img src="../../mocks/stores/cafebazaar-dark.png"></a>
            </div>
            <div class="footer-items">
                <div class="footer-item-line" id="footer-line-2"></div>
                <h5>پشتیبانی ریحون</h5>
                <div></div>
                <a href="">سوالات متداول</a>
                <a href="">تماس با پشیبانی</a>
                <a href="">قوانین و مقررات</a>
            </div>
            <div class="footer-items">
                <div class="footer-item-line" id="footer-line-3"></div>
                <h5>رستوران‌ها</h5>
                <div></div>
                <a href="">ثبت رستوران</a>
            </div>
            <div class="footer-items">
                <div class="footer-item-line" id="footer-line-4"></div>
                <h5>تماس با ریحون</h5>
                <div></div>
                <a href="">درباره ریحون</a>
                <a href="">تماس با ما</a>
                <a href="">وبلاگ ریحون</a>
            </div>
            <div class="footer-items" id="footer-paragraph">
                <div dir="rtl">مراقبت و محافظت از حساب کاربری و رمزعبور هر کاربر بر عهده کاربر است. ریحون سریعترین راه
                    سفارش
                    آنلاین
                    غذا است. منوی عکس‌دار رستوران‌های اطرافتان را بر اساس مکان خود به راحتی مشاهده کنید و سفارش دهید.
                </div>
                <div>&nbsp;</div>
                <a href="" id="rest-list">لیست رستوران‌ها</a>
            </div>
        </div>
        <div id="enamad-div">
            <div><a href=""><img src="../../mocks/footer/eanjoman.png"></a></div>
            <div><a href=""><img src="../../mocks/footer/enamad.png"></a></div>
        </div>
        <div id="footer-social">
            <div id="footer-social-row">
                <a href=""><i class="fab fa-google-plus-g"></i></a>
                <a href=""><i class="fab fa-instagram"></i></a>
                <a href=""><i class="fab fa-twitter"></i></a>
                <a href=""><i class="fab fa-facebook-f"></i></a>
                <a href=""><i class="fab fa-telegram-plane"></i></a>
            </div>
            <div id="copy-right">© 2017, Reyhoon, All Rights Reserved.</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MyFooter"
    }
</script>

<style scoped>
    #MyFooter {
        background-color: #202020;
        color: white;
        padding-top: 40px;
    }

    #footer-cols-div {
        display: flex;
        justify-content: center;
        text-align: right;
        flex-wrap: wrap;
    }

    .footer-items {
        display: flex;
        flex-direction: column;
        margin: 10px;
        flex-basis: 170px;
    }

    .footer-store-icons > img {
        border: 1px solid gray;
        border-radius: 10px;
    }

    .footer-items > a {
        color: #939b89 !important;
        margin: 3px;
    }

    .footer-item-line {
        height: 3px;
    }

    #footer-line-1 {
        background-color: #ffc300;
    }

    #footer-line-2 {
        background-color: #ff0613;
    }

    #footer-line-3 {
        background-color: #d40062;
    }

    #footer-line-4 {
        background-color: #8b00af;
    }

    #footer-paragraph {
        flex-basis: 300px;
        padding-top: 30px;
    }

    #footer-paragraph > div {
        color: #939b89;
    }

    #rest-list {
        color: #5890ff !important;
    }

    #enamad-div {
        display: flex;
        justify-content: center;
    }

    #footer-social {
        background-color: #191919;
        padding: 1vw 5vw 1vw 5vw;
        color: #939b89
    }

    #footer-social-row {
        display: flex;
    }

    #footer-social-row > a {
        margin: 10px;
    }

    #footer-social-row > a > i {
        font-size: 1.8em;
        color: gray;
    }

    #copy-right {
        text-align: right;
        font-size: 0.9em;
    }
</style>
