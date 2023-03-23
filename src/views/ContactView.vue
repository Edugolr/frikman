<template>
    <div class="contact">
        <h1>Kontakter</h1>
        <div style="display: flex;">
            <section>
                <div class="card">
                    <img class="profile-image" :src="piaImage" alt="pari">
                    <div class="profile-info">
                        <h2>Toastmadame</h2>
                        <p>Pia Bergenzaun</p>
                        <p><a href="tel:+">0704-45 72 22</a></p>
                        <p><a href="mailto:pbergenzaun@gmail.com?subject=Bröllop PC">pbergenzaun@gmail.com</a></p>
                    </div>
                </div>
            </section>
            <section>
                <div class="card">
                    <img class="profile-image" :src="pariImage" alt="pari">
                    <div class="profile-info">
                        <h2>Bruden</h2>
                        <p>Pari Fröjd</p>
                        <p><a href="tel:0735242260">0735-24 22 60</a></p>
                        <p><a href="mailto:parichatfrojd@hotmail.com?subject=Bröllop">parichatfrojd@hotmail.com</a></p>
                    </div>
                </div>
            </section>
            <section>
                <div class="card">
                    <img class="profile-image" :src="christoferImage" alt="christofer">
                    <div class="profile-info">
                        <h2>Brudgummen</h2>
                        <p>Christofer Wikman</p>
                        <p><a href="tel:0733888157">0733-88 81 57</a></p>
                        <p><a href="mailto:christofer.wikman@gmail.com?subject=Bröllop">christofer.wikman@gmail.com</a></p>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>
<script setup lang="ts">
const christoferImage = new URL('@/assets/christofer.jpg', import.meta.url).href
const pariImage = new URL('@/assets/pari.jpeg', import.meta.url).href
const piaImage = new URL('@/assets/pia.jpg', import.meta.url).href

</script>
<style  scoped>
.profile-image {
    border-radius: 50%;
    width: 7rem;
    height: 7rem;
    transition: all 1s ease;
    filter: grayscale(100%);
}

.profile-image:hover {
    transform: rotateY(180deg);
}

.profile-info {
    z-index: 1;

}

.card {
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 1rem;
    border-radius: 5px;
    background-color: #fff;
    margin: 1rem;
    transition: all 0.5s ease;
    box-shadow: 5px 6px 10px -1px rgba(0, 0, 0, 0.35);
}
</style>