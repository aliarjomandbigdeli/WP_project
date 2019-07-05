<template>
    <div id="main-frame" :class="{closedRest: !opened}">
        <div id="frame" :class="{closedRest: !opened}">
            <div class="best-month-div-items">

                <h3>{{name}}</h3>
                <div class="stars-bar">
                    <span class="rate-number">{{rate}}</span>
                    <star-rating :rating="rate" :read-only="true" :increment="0.01" :star-size="15"
                                 :show-rating="false"></star-rating>
                </div>
                <div class="foods detail">
                    <span v-for="(category, index) in categories" :key="index">
                        <span v-if="index!=0">&#9679;</span> {{category.name}}
                    </span>
                </div>
                <div class="address detail">{{address}}</div>
            </div>
            <div><img height="80" width="80" :src="imgUrl"></div>
        </div>
        <div v-show="opened" id="order-btn-div">
            <div id="order-bst-rest-btn">شروع سفارش</div>
        </div>
    </div>
</template>

<script>
    import StarRating from 'vue-star-rating'

    export default {

        name: "InfoBoxSmall",
        components: {StarRating},
        props: ['name', 'rate', 'categories', 'address', 'imgUrl', 'opened'],
        data() {
            return {}
        }
    }
</script>

<style scoped>

    #main-frame {
        box-shadow: 0 0 3px lightgray;
        background-color: white;
        height: 241px;
    }

    #main-frame:hover {
        box-shadow: 0 0 10px lightgray;
    }

    #frame {
        display: flex;
        /*box-shadow: 0 0 3px lightgray;*/
        justify-content: flex-end;
        align-items: flex-start;
        padding: 5px 5px 0 5px;
        height: 179px;
        width: 313px;
        flex-basis: 313px;
    }

    #frame > div > img {
        border-color: lightgray;
        border-radius: 5px;
        border-style: solid;
        border-width: 1px;
        margin-top: 15px;
    }

    .best-month-div-items {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        align-content: space-between;
        padding: 0 5px 0px 5px;
        text-align: center;
        width: 100%;
        color: black;
    }

    .detail {
        /*color: gray;*/
        font-size: .8em;
    }

    .address {
        color: gray;

        /*direction: rtl;*/
        /*text-align: right;*/
        /*white-space: nowrap;*/
        /*overflow: hidden;*/
        /*overflow-clip: fade;*/
        /*text-overflow: fade(20px);*/
        /*text-overflow: ellipsis;*/
    }

    .stars-bar {
        display: flex;
        color: lightgray;
    }

    .rate-number {
        color: orange;
    }

    #order-btn-div {
        background-color: #fafafa;
        padding: 10px;
        display: flex;
        justify-content: center;
        padding: 15px 5px 15px 5px;
    }

    #order-bst-rest-btn {
        color: var(--btn-bg-or-highlighted-color);
        border-color: var(--btn-bg-or-highlighted-color);
        font-size: .9em;
        border-radius: 20px;
        border-style: solid;
        border-width: 1px;
        padding: 5px 10px 5px 10px;
        /*margin-top: 10px;*/
    }

    #order-bst-rest-btn:hover {
        background-color: rgba(255, 0, 134, 0.11);
    }


    .closedRest {
        background-color: lightgray !important;
    }
</style>
