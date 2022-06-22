<template>
  <div class="timelineExp_container py-8">
    <div class="timelineExp_list">
      <ol class="relative border-l border-gray-200 dark:border-gray-700">
        <li v-for="item of experiences" class="mb-10 ml-6">
          <span
            class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
          >
            <nuxt-icon :name="item.icon" fill></nuxt-icon>
          </span>
          <h2
            class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white"
          >
            {{ item.title }}
          </h2>
          <span class="block underline mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            {{ item.company }}
          </span>
          <time
            class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
          >
            {{ item.date }}
          </time>
          <p
            class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
          >
            {{ item.description }}
          </p>
          <a
            v-if="item.url.length > 0"
            :href="item.url"
            target="_blank"
            class="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            Discover
          </a>
        </li>
      </ol>
    </div>
  </div>
</template>

<script setup lang="ts">
const experiences = ref([
  {
    title: "Développeur web Freelance",
    company: "Phatza Création",
    url: "https://phatza-creation.fr",
    date: "Février 2017 - Aujourd’hui",
    description:
      "L’aventure de développeur web indépendant m’a permis de me challenger sur divers aspect du web comme l’intégration, le développement front/back mais aussi sur des notions de serveurs web ou encore serveurs d’emails.\
      Les rencontres que je fais au travers de différents projets (clients ou collaborateurs), me poussent à parfaire mes connaissances et à aller toujours plus loin.\
      L’indépendance est avant tout une vraie aventure humaine.",
    icon: "job",
  },
  {
    title: "Formation développeur front-end",
    company: "",
    url: "",
    date: "Janvier 2016 - Janvier 2017",
    description:
      "Formation Développeur Web Front-end en cycle d’alternance.\
      J’ai eu l’occasion de faire mon alternance en agence de communication (Purjus) en tant que Développeur Front-end/Intégrateur.",
    icon: "certificate",
  },
  {
    title: "Formation d'initiation développement web",
    company: "SimplonMARS",
    url: "",
    date: "03 Mars 2015 - 24 Juillet 2015",
    description:
      "Formation intensive et innovante prônant la pédagogie “DO IT YOURSELF” et “LEARNING BY DOING”.\
      J’ai appris à apprendre afin de pouvoir facilement évoluer avec les technologies mais aussi en communauté. Google est devenu un ami très cher 😅 !",
    icon: "certificate",
  },
  {
    title: "D.A.E.U A",
    company: "",
    url: "",
    date: "30 Septembre 2013 - 30 Juin 2014",
    description:
      "Le Diplôme d'Accès aux Études Universitaire représente une équivalence au baccalauréat reconnu dans le monde entier.\
      Le programme est de revoir les 3 années de lycée en une seule.\
      J'ai obtenue le D.A.E.U A (Economique & Social) avec la mention Bien.",
    icon: "certificate",
  },
  {
    title: "Raccordeur fibre optique",
    company: "R.F.O",
    url: "",
    date: "Décembre 2010 - décembre 2012",
    description:
      "En tant que raccordeur, mes tâches étaient :\
      Analyse de sites, création réseaux Internet, gestion d’équipe et maintenance.\
      Pour différents opérateurs tels que : SFR, FREE, ORANGE",
    icon: "job",
  },
  {
    title: "Téléconseiller",
    company: "Etic Alta",
    url: "",
    date: "Juin 2009 - Août 2010",
    description:
      "J’étais en charge du service d’aide aux locataires 13 habitat. La visite des sites d’habitations ainsi que des agences de gestion du patrimoine ont été pour moi une grande expérience humaine.",
    icon: "job",
  },
]);
</script>