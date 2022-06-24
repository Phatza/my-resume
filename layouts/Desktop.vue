<template>
  <div class="grid grid-rows-1 grid-cols-6 h-100vh mx-auto max-w-1400px">
    <header class="col-start-2 h-90 my-auto">
      <Profile />
      <Nav />
      <SocialLinks />
    </header>
    <main class="col-start-4 col-span-3 max-w-md my-auto max-h-60vh overflow-y-scroll">
      <slot />
    </main>
  </div>
</template>
