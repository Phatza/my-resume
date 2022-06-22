<template>
  <div class="Skillsbars_container">
    <div class="skillsBars_item py-2" v-for="item of skills">
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
</template>

<script setup lang="ts">
const skills = ref([
  {
    name: "HTML5",
    score: "95%",
  },
  {
    name: "CSS3",
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
]);
</script>