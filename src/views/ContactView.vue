<template>
    <div class="contact">
        <h1>Kontakter</h1>
        <div style="display: flex;">
            <section>
                <ContactCard :imageSrc="piaImage" imageAlt="pia bild" title="Toastmadame" name="Pia Bergenzaun"
                    email="pbergenzaun@gmail.com" phone="0704-45 72 22" emailSubject="Bröllop PC" />
            </section>
            <section>
                <ContactCard :imageSrc="pariImage" imageAlt="pari bild" title="Bruden" name="Pari Fröjd"
                    email="parichatfrojd@hotmail.com" phone="0735-24 22 60" emailSubject="Bröllop" />
            </section>
            <section>
                <ContactCard :imageSrc="christoferImage" imageAlt="christofer bild" title="Bruden" name="Christofer Wikman"
                    email="christofer.wikman@gmail.com" phone="0733888157" emailSubject="Bröllop" />
            </section>
        </div>
    </div>
</template>
<script setup lang="ts">
import ContactCard from '@/components/ContactCard.vue';

const christoferImage = new URL('@/assets/christofer.jpg', import.meta.url).href
const piaImage = new URL('@/assets/pia.jpg', import.meta.url).href
const pariImage = new URL('@/assets/pari.jpeg', import.meta.url).href

</script>
<style scoped></style>