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
    background-color: #FFF7DB;


}

a {
    padding: 10px;
    border-radius: 5px;
    color: #000;
    text-decoration: none;
    font-family: 'Stars & Love', sans-serif;
}

.router-link-exact-active {
    background-color: #000;
    color: #FFF7DB;
}
</style>