<template>
    <div class="main-content">
        <slot />
    </div>
</template>
<script setup lang="ts">
const logo = new URL('@/assets/logo.svg', import.meta.url).href
</script>
<style scoped>
.main-content {
    padding: 20px;
    display: flex;
    justify-content: center;
}
</style>