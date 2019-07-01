<template>
    <div class="main-frame">
        <!--icons-->
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
              integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
              crossorigin="anonymous">

        <div class="top-div">
            <div>{{author}}</div>
            <star-rating id="star-rating-id" :rating="rateNumber" :read-only="true" :increment="0.01"
                         :star-size="20"
                         :show-rating="true"></star-rating>
        </div>
        <div class="center-div">
            <span>{{text}}</span>
            <i class="fas fa-quote-right"></i>
        </div>
        <div class="bottom-div">
            <div dir="rtl">{{diffDate(date)}}</div>
            <div>گزارش</div>
        </div>

    </div>
</template>

<script>
    import StarRating from 'vue-star-rating'

    export default {
        name: "CommentShowBox",
        components: {StarRating},
        props: ['author', 'rateNumber', 'text', 'date'],
        methods: {
            diffDate(date) {
                let currentDate = new Date();
                let year = currentDate.getFullYear();
                let month = currentDate.getMonth();
                date = new Date(date);
                let commentYear = date.getFullYear();
                let commentMonth = date.getMonth();
                if (year - commentYear > 0) {
                    return "".concat(year - commentYear).concat("سال قبل")
                } else {
                    if (month - commentMonth > 0) {
                        return "".concat(month - commentMonth).concat("ماه قبل")
                    } else {
                        return "".concat(currentDate.getDay() - date.getDay()).concat("روز قبل")
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .main-frame {
        width: 100%;
        padding: 20px 5px 10px 5px;
        border-bottom-color: lightgray;
        border-bottom-style: solid;
        border-bottom-width: 1px;
    }

    .main-frame > * {
        margin-bottom: 10px;
    }

    .top-div {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
    }

    #star-rating-id {
        color: orange;
        font-weight: bold;
    }

    .center-div {
        text-align: right;
    }

    .center-div > i {
        color: var(--btn-bg-or-highlighted-color);
        margin-left: 20px;
    }

    .bottom-div {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
    }
</style>
