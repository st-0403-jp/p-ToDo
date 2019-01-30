<template>
    <div class="add-todoItem">
        <a href="">
            <v-icon name="plus" color="#fff" scale="1.5"/>
        </a>
    </div>
</template>

<script lang="ts">

export default {
    name: 'add-todoItem',
    data: () => {
        return {
        }
    }
}

</script>

<style scoped lang="scss">
.add-todoItem {
    position: fixed;
    bottom: 16px;
    right: 16px;
    background-color: rgb(11, 128, 67);
    width: 48px;
    height: 48px;
    border-radius: 24px;
    overflow: hidden;
    a {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
}
</style>
