<template>
    <img class="contact-image" :src="image" :alt="alt">
</template>
<script setup lang="ts">


const props = defineProps<{
    src: string;
    alt: string;
}>()


const image = new URL(props.src, import.meta.url).href

</script>
<style scoped>
.contact-image {
    border-radius: var(--border-radius-rounded);
    width: 7rem;
    height: 7rem;
    transition: all 1s ease;
    filter: grayscale(100%);
}

.contact-image:hover {
    transform: rotateY(180deg);
}
</style>