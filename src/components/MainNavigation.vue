<template>
    <nav>
        <RouterLink to="/">Hem</RouterLink>
        <RouterLink to="/clothes">Klädsel</RouterLink>
        <RouterLink to="/schedule">Schema</RouterLink>
        <RouterLink to="/menu">Meny</RouterLink>
        <RouterLink to="/location">Plats</RouterLink>
        <RouterLink to="/contact">Kontakt</RouterLink>
    </nav>
</template>
<script setup lang="ts">
import { RouterLink } from 'vue-router'

</script>
<style scoped>
nav {
    display: flex;
    justify-content: right;
    align-items: center;
    padding: 20px;
    background-image: url('@/assets/tapetBlommig.webp');
    border-bottom: 2px solid;
}

a {
    padding: 10px;
    border-radius: 5px;
    background-color: rgb(230, 220, 215, 0.75);
    color: #000;
    text-decoration: none;
    font-family: 'Stars & Love', sans-serif;
    font-weight: 600;

}

.router-link-exact-active {
    background-color: #000;
    color: #FFF7DB;
}
</style>