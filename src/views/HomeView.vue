<template>
  <main>
    <div class="names">
      <img :src=imgUrl alt="pari <3 christofer">
    </div>
  </main>
</template>

<script setup lang="ts">
const imgUrl = new URL('@/assets/parichristofer.PNG', import.meta.url).href

</script>

<style scoped>
.names {
  display: flex;
  align-items: center;
  height: 80vh;
}
</style>