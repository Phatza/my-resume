<template>
  <div class="container px-5 flex flex-col justify-center items-center">
    <header>
      <Profile />
      <Nav />
      <SocialLinks />
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>
