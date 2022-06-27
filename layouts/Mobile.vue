<template>
  <div class="flex flex-col items-center">
    <header>
      <Profile />
      <Nav />
      <SocialLinks />
    </header>
    <main class="p-5 bg-slate-200 rounded-20xl">
      <slot class="bg-white" />
    </main>
    <ScrollToTop />
  </div>
</template>
