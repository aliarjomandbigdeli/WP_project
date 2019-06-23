<template>
    <div id="food-div">
        <h3 id="food-div-title">غذا چی میل دارید؟</h3>
        <h4>صبحانه، ناهار، شام یا هر چیزی که میل دارید را انتخاب کنید</h4>
        <div id="food-photo-div">
            <a href="">
                <div class="food-photo-items" id="food-photo-items-1">
                    <div class="txt-food-div"><h3>غذای پلویی</h3><h6 dir="rtl">1836 رستوران فعال</h6></div>
                </div>
            </a>
            <a href="">
                <div class="food-photo-items" id="food-photo-items-2">
                    <div class="txt-food-div"><h3>برگر</h3><h6 dir="rtl">1836 رستوران فعال</h6></div>
                </div>
            </a>
            <a href="">
                <div class="food-photo-items" id="food-photo-items-3">
                    <div class="txt-food-div"><h3>پیتزا</h3><h6 dir="rtl">1836 رستوران فعال</h6></div>
                </div>
            </a>
            <a href="">
                <div class="food-photo-items" id="food-photo-items-4">
                    <div class="txt-food-div"><h3>ساندویچ</h3><h6 dir="rtl">1836 رستوران فعال</h6></div>
                </div>
            </a>
        </div>
        <h4>انتخاب غذا‌های بیشتر</h4>
        <div id="more-food-div">
            <a href="">
                <div class="more-food-items">غذای ایرانی</div>
            </a>
            <a href="">
                <div class="more-food-items">فست فود</div>
            </a>
            <a href="">
                <div class="more-food-items">چلو کباب</div>
            </a>
            <a href="">
                <div class="more-food-items">سالاد</div>
            </a>
            <a href="">
                <div class="more-food-items">پاستا</div>
            </a>
            <a href="">
                <div class="more-food-items">سوخاری</div>
            </a>
            <a href="">
                <div class="more-food-items">خوراک</div>
            </a>
            <a href="">
                <div class="more-food-items">کباب</div>
            </a>
            <a href="">
                <div class="more-food-items">خورشت</div>
            </a>
            <a href="">
                <div class="more-food-items">آبمیوه</div>
            </a>
            <a href="">
                <div class="more-food-items">هات داگ</div>
            </a>
            <a href="">
                <div class="more-food-items">غذای دریایی</div>
            </a>
            <a href="">
                <div class="more-food-items">ماهی</div>
            </a>
            <a href="">
                <div class="more-food-items">صبحانه</div>
            </a>
            <a href="">
                <div class="more-food-items">استیک</div>
            </a>
            <a href="">
                <div class="more-food-items">بشقاب</div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FoodsDiv"
    }
</script>

<style scoped>
    #food-div {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        background-color: var(--main-bg-color);
    }

    #food-photo-div {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    #food-photo-div > * {
        margin: 10px;
    }

    .food-photo-items {
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        text-align: right;
        color: white;
        height: 260px;
        width: 260px;
        padding: 10px;
        box-shadow: 0 -20px 40px 15px black inset; /*make dark shadow in background*/
        background-position: center;
        background-size: cover;
    }

    .food-photo-items:hover {
        padding-top: 3px;
        padding-bottom: 17px;
    }

    #food-photo-items-1 {
        background-image: url("../../mocks/foods/food(1).jpg");
    }

    #food-photo-items-2 {
        background-image: url("../../mocks/foods/food(2).jpg")
    }

    #food-photo-items-3 {
        background-image: url("../../mocks/foods/food(3).jpg")
    }

    #food-photo-items-4 {
        background-image: url("../../mocks/foods/food(4).jpg")
    }

    #more-food-div {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-left: 15%;
        margin-right: 15%;
    }

    #more-food-div > * {
        margin: 10px;
    }

    .more-food-items {
        /*margin: 10px;*/
        padding: 12px;
        border-radius: 20px;
        background-color: white;
    }

    .more-food-items:hover {
        box-shadow: 0 0 7px lightgray;
    }
</style>