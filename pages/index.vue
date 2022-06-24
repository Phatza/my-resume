<template>
  <div>
    <section class="py-2">
      <h1 class="font-bold text-3xl">À propos de moi</h1>
      <div class="description py-4">
        <p>
          Salut 👋
          <!-- Hey there 👋 -->
          <br />
          Je m'appelle Brice et je suis développeur web (autodidacte) basé
          sur Marseille - France.
          <!-- I'm Brice, a self-taught Front-end developer
          based in Marseille - France. -->
        </p>
        <p>
          <span class="font-bold">
            Je suis actuellement à la recherche d'un nouveau challenge en tant que freelance, au sein d'une équipe basé sur VueJS/NuxtJS.
            <!-- I'm currently looking for a new challenge as Freelance within a team
            based on VueJS, NuxtJS. -->
          </span>
        </p>
        <p>
          Si vous voulez en savoir plus sur moi, vous pouvez consulter
          <NuxtLink class="underline" to="/experiences">mes expériences</NuxtLink>
          <!-- If you want to know more about me you can discover
          <NuxtLink to="/experiences">my experiences</NuxtLink> -->
          . 
        </p>
        <p>
          N'hésitez pas à me contacter en utilisant les liens vers mes réseaux sociaux.
          <!-- Feel free to reach me using my social links. -->
        </p>
      </div>
    </section>
    <section>
      <h2 class="font-bold text-xl mb-2">Découvrez mes compétences</h2>
      <Skills />
    </section>
  </div>
</template>
