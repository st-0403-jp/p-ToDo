<template>
    <header>
        <div class="header-inner">
            <div class="header-logo">
                <h1>p-ToDo</h1>
            </div>
            <nav class="header-menu">
                <div class="header-menu-line"></div>
            </nav>
        </div>
    </header>
</template>

<script lang="ts">

export default {
    data: () => {
        return {
            message: 'メニューです'
        }
    }
}

</script>

<style scoped>
.header-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 72px;
    padding: 0 16px;
    box-shadow: 0 0 5px 0 #333;
}
.header-logo {
    color: #f90;
}
.header-logo h1 {
    font-size: 1rem;
}
.header-menu-line {
    display: flex;
    flex-wrap: wrap;
    align-content: space-evenly;
    width: 32px;
    height: 24px;
    background-color: #333;
    overflow: hidden;
}
.header-menu-line::before, .header-menu-line::after {
    content: '';
    width: 100%;
    height: 9px;
    background-color: #fff;
    /* margin-top: 2px; */
}
</style>
