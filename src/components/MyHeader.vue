<template>
    <div>
        <div id="nav-bar-div">
            <div class="nav-bar-items"><a href="login.html#login_sec">ورود</a></div>
            <div class="nav-bar-items" id="separator">|</div>
            <div class="nav-bar-items"><a href="login.html#register_sec">عضویت</a></div>
            <div class="nav-bar-items">&nbsp;&nbsp;&nbsp;</div>
            <div class="nav-bar-items"><a href="">راهنما</a></div>
        </div>
        <div id="nav-border-div"></div>
    </div>
</template>

<script>
    export default {
        name: "MyHeader"
    }
</script>

<style scoped>
    #nav-bar-div {
        display: flex;
        flex-direction: row-reverse;
        padding-left: 30px;
        padding-right: 30px;
        font-size: 0.9em;
        color: #4a5575;
    }

    .nav-bar-items {
        margin: 10px;
        padding: 5px;
        background-color: white;
    }

    .nav-bar-items > a {
        color: #4a5575 !important
    }

    .nav-bar-items > a:hover {
        color: var(--btn-bg-or-highlighted-color) !important
    }

    #separator {
        margin-left: 0;
        margin-right: 0;
        padding-right: 0;
        padding-left: 0;
    }

    #nav-border-div {
        background: linear-gradient(to right, red, purple);
        height: 3px;
    }
</style>
