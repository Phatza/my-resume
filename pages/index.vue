<template>
  <div class="mx-auto h-100vh bg-white shadow-md shadow-light-900 z-10">
    <section>
      <div
        class="p-5 bg-white shadow-md shadow-light-900 sticky top-0 left-0 right-0 z-20 p-5"
      >
        <h1 class="font-bold text-3xl">À propos de moi</h1>
      </div>
      <div class="description p-5">
        <p>
          Salut 👋
          <!-- Hey there 👋 -->
          <br />
          Je m'appelle Brice et je suis développeur web (autodidacte) basé sur
          Marseille - France.
          <!-- I'm Brice, a self-taught Front-end developer
          based in Marseille - France. -->
        </p>
        <p>
          <span class="font-bold">
            Je suis actuellement à la recherche d'un nouveau challenge en tant
            que freelance (rôle de front-end), au sein d'une équipe et je suis
            opérationnel sur des techonologies basées sur l’éco-système
            VueJS/NuxtJS.
            <!-- I'm currently looking for a new challenge as Freelance within a team
            based on VueJS, NuxtJS. -->
          </span>
        </p>
        <p>
          Si vous voulez en savoir plus sur moi, vous pouvez consulter
          <NuxtLink class="underline" to="/experiences"
            >mes expériences</NuxtLink
          >
          <!-- If you want to know more about me you can discover
          <NuxtLink to="/experiences">my experiences</NuxtLink> -->
          .
        </p>
        <p>
          N'hésitez pas à me contacter en utilisant les liens vers mes réseaux
          sociaux.
          <!-- Feel free to reach me using my social links. -->
        </p>

        <a
          class="font-bold text-white bg-gradient-to-r hover:border-red-400 hover:border-2 hover:rounded-lg hover:bg-white hover:bg-none hover:text-slate-500 from-indigo-300 via-blue-400 to-red-400 inline-block mt-5 py-3 px-4 transition-all"
          href="/cv-30062022.pdf"
          download
        >
          Télécharger mon CV en PDF
        </a>
      </div>
    </section>
    <section class="pb-5 bg-white">
      <div
        class="p-5 pb-2 bg-white shadow-sm shadow-light-900 sticky top-0 left-0 right-0 z-20 p-5"
      >
        <h2 class="font-bold text-xl mb-2">Découvrez mes compétences</h2>
      </div>
      <Skills />
    </section>
  </div>
</template>
