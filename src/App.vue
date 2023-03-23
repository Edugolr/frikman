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
  font-family: var(--font-primary);
  font-size: 16px;
  background-image: url(/src/assets/logo.svg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-blend-mode: overlay;
}

p {
  font-family: var(--font-primary);
  font-size: 1rem;
  margin-block: 0;
  text-align: center;
}

h1 {
  font-family: var(--font-secondary);
  font-size: 3rem;
  text-align: center;

}

h2 {
  font-family: var(--font-secondary);
  font-size: 1.5rem;
  margin-block-end: 0.5em;
  text-align: center;
  color: var(--color-h2);
}

h3 {
  font-family: var(--font-secondary);
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