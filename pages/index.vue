<template>
  <div>
    <section class="py-2">
      <h1 class="font-bold text-3xl">About me</h1>
      <div class="description py-4">
        <p>
          Hey there 👋
          <br />
          I'm Brice, a self-taught Front-end developer based in Marseille -
          France.
        </p>
        <p>
          <span class="font-bold"
            >I'm currently looking for a new challenge as Freelance within a
            team based on VueJS, NuxtJS.</span
          >
        </p>
        <p>
          If you want to know more about me you can discover
          <NuxtLink to="/experiences">my experiences</NuxtLink>
          .
        </p>
        <p>Feel free to reach me using my social links.</p>
      </div>
    </section>
    <section>
      <h2 class="font-bold text-xl">Discover my skills</h2>
      <Skills />
    </section>
  </div>
</template>
