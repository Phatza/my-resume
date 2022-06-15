<template>
  <NuxtLayout v-if="windowWidth > 767" name="desktop">
    <NuxtPage/>
  </NuxtLayout>
  <NuxtLayout v-else name="mobile">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { onMounted, ref } from 'vue'
const windowWidth = ref(0);
onMounted(() => {
  // Watch window width to display the right layout
  windowWidth.value = window.innerWidth;
  window.addEventListener('resize', () => {
    windowWidth.value = window.innerWidth;
  });
});
</script>
