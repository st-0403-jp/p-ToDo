<template>
    <header>
        <div class="header-inner container">
            <div class="header-logo">
                <h1>{{ logo }}</h1>
            </div>
            <nav class="header-menu">
                <div class="header-menu-line"></div>
            </nav>
        </div>
    </header>
</template>

<script lang="ts">
import '../../../styleConfig.scss';

export default {
    name: 'header',
    data: () => {
        return {
            logo: 'p-ToDo'
        }
    }
}

</script>

<style scoped lang="scss">
header {
    background-color: #fff;
}
.header-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 72px;
    box-shadow: $box-shadow-base;
}
.header-logo {
    color: #f90;
    h1 {
        font-size: 1rem;
    }
}
.header-menu-line {
    display: flex;
    flex-wrap: wrap;
    align-content: space-evenly;
    width: 32px;
    height: 24px;
    background-color: $color-base-black;
    overflow: hidden;
}
.header-menu-line {
    &::before, &::after {
        content: '';
        width: 100%;
        height: 9px;
        background-color: #fff;
    }
}
</style>
