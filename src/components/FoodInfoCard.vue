<template>
    <div id="main-frame">
        <!--icons-->
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
              integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
              crossorigin="anonymous">

        <div id="name-price">
            <h3>{{name}}</h3>
            <h3 dir="rtl"><span>{{price}}</span><span>,000</span><span style="font-size: 0.8em">تومان</span></h3>
        </div>
        <div id="description">{{description}}</div>
        <div id="btn-div">
            <div id="add-btn">افزودن به سبد خرید<span>&nbsp;</span><i class="fas fa-plus"></i></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FoodInfoCard",
        props: ['name', 'price', 'description'],
        data() {
            return {}
        }
    }
</script>

<style scoped>
    #main-frame {
        box-shadow: 0 0 3px lightgray;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 10px;
        height: 146px;
        width: 362px;
        flex-basis: 362px;
    }

    #main-frame:hover {
        box-shadow: 0 0 10px lightgray;
    }

    #name-price {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
    }

    #description {
        text-align: right;
        color: gray;
    }

    #btn-div {
        display: flex;
        justify-content: flex-end;
        width: 100%;
    }

    #add-btn {
        color: var(--btn-bg-or-highlighted-color);
        border-color: rgba(255, 0, 134, 0.11);
        font-size: .7em;
        border-radius: 15px;
        border-style: solid;
        border-width: 1px;
        padding: 7px 10px 5px 10px;
    }

    #add-btn:hover {
        color: white;
        background-color: var(--btn-bg-or-highlighted-color);
    }
</style>
