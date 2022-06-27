<template>
  <div class="grid grid-cols-8 h-100vh">
    <div class="col-span-2 z-10 h-100vh flex justify-end items-center">
      <header class="relative left-1/3">
        <Profile />
        <Nav />
        <SocialLinks />
      </header>
    </div>
    <div class="col-span-6 rounded-l-25xl flex items-center h-100vh bg-slate-100">
      <main
        class="relative left-1/4 w-3/5 h-60vh overflow-x-hidden overflow-y-auto customScrollbar"
      >
        <slot />
      </main>
    </div>
  </div>
</template>

<style scoped lang="postcss">
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgba(0,0,0,0.3);
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background: rgba(100,116,139);
  border-radius: 10px;
}
</style>
