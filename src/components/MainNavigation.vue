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