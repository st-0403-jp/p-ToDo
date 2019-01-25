<template>
    <div>
        <h2 class="h-2">Vueのテストだよー</h2>
        <p>{{ message }}</p>
    </div>
</template>

<script lang="ts">

export default {
    data: () => {
        return {
            message: 'メッセージ2です'
        }
    }
}

</script>

<style scoped>
h2 {
    font-size: 48px;
}
.h-2 {
    font-size: 80px;
}
</style>
