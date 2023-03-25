<template>
    <CardContainer>
        <ContactImage :src="imageSrc" :alt="imageAlt" />
        <div class="profile-info">
            <h2>{{ title }}</h2>
            <p>{{ name }}</p>
            <p><a :href="phoneHref">{{ phone }}</a></p>
            <p><a :href="emailHref">{{ email }}</a></p>
        </div>
    </CardContainer>
</template>
<script setup lang="ts">
import CardContainer from '@/components/CardContainer.vue';
import ContactImage from '@/components/ContactImage.vue';

const props = defineProps<{
    imageSrc: string;
    imageAlt: string;
    title: string;
    name: string;
    email: string;
    phone: string;
    emailSubject: string;
}>()

const phoneHref = `tel:${props.phone}`
const emailHref = `mailto:${props.email}?subject=${props.emailSubject}`

</script>
<style scoped></style>