<template>
  <NuxtLayout v-if="windowWidth > 767" name="desktop">
    <NuxtPage/>
  </NuxtLayout>
  <NuxtLayout v-else name="mobile">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const windowWidth = ref(0);
onMounted(() => {
  // Watch window width to display the right layout
  windowWidth.value = window.innerWidth;
  window.addEventListener('resize', () => {
    windowWidth.value = window.innerWidth;
  });
});
</script>

<style lang="scss">
.page-enter-active,
.page-leave-active {
  opacity: 0;
}
.page-enter-to {
  opacity: 0;
  animation: slide-in 0.5s;
}
.page-leave-to {
  opacity: 0;
  animation: slide-out 0.5s;
}
/* Create the animation... */
@keyframes slide-in {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0%);
    opacity: 1;
  }
}
@keyframes slide-out {
  from {
    transform: translateX(0%);
    
    opacity: 1;
  }
  to {
    transform: translateX(-100%);
    opacity: 0;
  }
}
</style>
