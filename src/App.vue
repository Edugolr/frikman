<template>
  <header>
    <MainNavigation />
  </header>
  <MainContent>
    <RouterView />
  </MainContent>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainContent from '@/components/MainContent.vue';
import MainNavigation from '@/components/MainNavigation.vue';
</script>

<style>
body {
  margin: 0;
  height: 100vh;
  background-color: #FFF7DB;
  font-family: 'Glacial Indifference', sans-serif;
  font-size: 16px;
}

p {
  font-family: 'Glacial Indifference', sans-serif;
  font-size: 1rem;
  margin-block: 0;
  text-align: center;
}

h1 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 3rem;
  text-align: center;

}

h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.5rem;
  margin-block-end: 0.5em;
  text-align: center;
}

h3 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.25rem;
  margin-block-end: 0.5em;
  text-align: center;
}

section {
  margin: 20px;
  margin-bottom: 32px;
}

a {
  cursor: pointer;
}
</style>