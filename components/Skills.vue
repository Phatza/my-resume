<template>
  <div class="Skillsbars_container px-5">
    <div class="Skillsbars_tech">
      <h3>Techniques</h3>
      <div class="skillsBars_tech-item py-2" v-for="item in techSkills">
        <div class="flex justify-between">
          <span class="text-base font-medium">
            {{ item.name }}
          </span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2.5">
          <div
            class="progress h-2.5 rounded-full"
            :style="'width:' + item.score + ';'"
          ></div>
        </div>
      </div>
    </div>
    <div class="skillsBars_others mb-10 md:mb-0">
      <h3>Autres</h3>
      <div class="skillsBars_tech-item py-2" v-for="item in othersSkills">
        <div class="flex justify-between">
          <span class="text-base font-medium">
            {{ item.name }}
          </span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2.5">
          <div
            class="progress h-2.5 rounded-full"
            :style="'width:' + item.score + ';'"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const techSkills = ref([
  {
    name: "HTML",
    score: "95%",
  },
  {
    name: "CSS",
    score: "95%",
  },
  {
    name: "JavaScript",
    score: "90%",
  },
  {
    name: "Vue",
    score: "80%",
  },
  {
    name: "Nuxt",
    score: "90%",
  },
  {
    name: "Ionic",
    score: "80%",
  },
  {
    name: "Capacitor",
    score: "70%",
  },
  {
    name: "NodeJS",
    score: "70%",
  },
  {
    name: "Strapi",
    score: "80%",
  },
  {
    name: "Wordpress",
    score: "95%",
  },
  {
    name: "Git",
    score: "80%",
  },
]);
const othersSkills = ref([
  {
    name: "Français",
    score: "100%",
  },
  {
    name: "Anglais",
    score: "80%",
  },
]);
</script>

<style scoped>
h3 {
  @apply underline text-lg my-2 font-medium;
}
.progress {
  @apply bg-gradient-to-r from-red-400 via-indigo-400 to-blue-400
}
</style>
