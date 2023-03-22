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

