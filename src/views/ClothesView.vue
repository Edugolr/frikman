<template>
  <div class="clothes">
    <h1>Klädselkod och inspiration</h1>
    <section>
      <h2>
        Man
      </h2>
      <p>Kavaj i ljusgrå/ljusbeige/ljuscreme</p>
      <p style="color:red">Infoga inspiration</p>
    </section>
    <section>
      <h2>
        Kvinna
      </h2>
      <p>Blommiga klänningar</p>
      <!-- <img :src="inspirationImage" alt="inspiration image"> -->
    </section>
  </div>
</template>
<script setup lang="ts">
// const inspirationImage = new URL('@/assets/inspirationsKollage.jpg', import.meta.url).href

</script>
<style scoped>
img {
  width: 250px;
  height: auto;
}
</style>