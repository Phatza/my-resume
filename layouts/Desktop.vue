<template>
  <div class="grid grid-cols-8 h-100vh">
    <div class="col-span-2 h-100vh flex justify-end items-center">
      <header class="relative left-1/5">
        <Profile />
        <Nav />
        <SocialLinks />
      </header>
    </div>
    <div
      class="col-span-6 flex items-center h-100vh"
    >
      <main
        class="relative shadow-lg shadow-dark-200 left-1/5 w-3/5 h-60vh overflow-x-hidden overflow-y-auto customScrollbar"
      >
        <slot />
      </main>
    </div>
  </div>
</template>

<style scoped>
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background: rgba(100, 116, 139);
  border-radius: 10px;
}
</style>
