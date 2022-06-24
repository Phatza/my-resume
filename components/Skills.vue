<template>
  <div class="Skillsbars_container">
    <div class="Skillsbars_tech">
      <h3>Techniques</h3>
      <div class="skillsBars_tech-item py-2" v-for="item in techSkills">
        <div class="flex justify-between">
          <span class="text-base font-medium text-blue-700 dark:text-white">
            {{ item.name }}
          </span>
          <span class="text-sm font-medium text-blue-700 dark:text-white"
            >{{ item.score }}
          </span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div
            class="progress bg-blue-600 h-2.5 rounded-full transition-all transition-1000 delay-500 ease-in-out"
            :style="'width:' + item.score + ';'"
          ></div>
        </div>
      </div>
      <h3>Autres</h3>
      <div class="skillsBars_tech-item py-2" v-for="item in othersSkills">
        <div class="flex justify-between">
          <span class="text-base font-medium text-blue-700 dark:text-white">
            {{ item.name }}
          </span>
          <span class="text-sm font-medium text-blue-700 dark:text-white"
            >{{ item.score }}
          </span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div
            class="progress bg-blue-600 h-2.5 rounded-full transition-all transition-1000 delay-500 ease-in-out"
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
    score: "85%",
  },
  {
    name: "Vue",
    score: "70%",
  },
  {
    name: "Nuxt",
    score: "80%",
  },
  {
    name: "NodeJS",
    score: "60%",
  },
  {
    name: "Strapi",
    score: "70%",
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
  }
]);
</script>

<style scoped lang="postcss">
h3 {
  @apply underline text-lg my-2;
}
</style>