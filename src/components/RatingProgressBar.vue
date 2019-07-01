<template>
    <div class="progress-and-number">
        <div class="number-div">{{number}}</div>
        <div class="rate-progress-bar">
            <div :style="{ width: fillPercent + '%' }"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RatingProgressBar",
        props: ['number', 'fillPercent'],
    }
</script>

<style scoped>
    .progress-and-number {
        display: flex;
        width: 60%;
        align-items: center;
    }

    .number-div {
        color: orange;
        font-weight: bold;
        font-size: 1.1em;
    }

    .rate-progress-bar {
        display: flex;
        background-color: lightgray;
        border-radius: 10px;
        width: 100%;
        height: 0.8em;
        margin-left: 10px;
    }

    .rate-progress-bar > * {
        background-color: orange;
        border-radius: 10px;
    }

</style>
