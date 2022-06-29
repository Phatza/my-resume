<template>
  <div class="timelineExp_container relative md:p-8 bg-white shadow-lg">
    <div class="timelineExp_list">
      <ol class="relative border-l border-gray-200 dark:border-gray-700">
        <li
          v-if="experiences && experiences.length > 0"
          v-for="(item, index) in experiences"
          :key="index"
          class="bg-light-200"
        >
          <div class="mb-3 ml-3 p-4 md:mb-6 md:ml-6 md:p-5">
            <span
              class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
            >
              <nuxt-icon :name="item.icon" fill></nuxt-icon>
            </span>
            <h2
              class="flex underline mb-1 text-lg font-semibold text-gray-900 dark:text-white"
            >
              {{ item.title }}
            </h2>
            <span
              class="block underline mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
            >
              {{ item.company }}
            </span>
            <time
              class="block mb-2 text-sm font-normal italic leading-none text-gray-400 dark:text-gray-500"
            >
              {{ item.date }}
            </time>
            <div class="timelineExp_description">
              <div v-if="item.toggleButton === false">
                <p
                  v-html="item.excerpt"
                  class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
                ></p>
                <button
                  class="readMore text-gray-900"
                  @click="item.toggleButton = !item.toggleButton"
                >
                  Lire plus
                </button>
              </div>
              <div v-else class="timelineExp_description">
                <p
                  v-html="item.description"
                  class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
                ></p>
                <button
                  class="readMore text-red-500"
                  @click="item.toggleButton = !item.toggleButton"
                >
                  Lire moins
                </button>
              </div>
            </div>
            <a
              v-if="item.url.length > 0"
              :href="item.url"
              target="_blank"
              class="py-2 px-2 bg-dark-50 text-white rounded text-sm font-medium"
            >
              Voir le site
            </a>
          </div>
        </li>
        <li v-else class="text-gray-500">
          <p>
            Une erreur est survenue lors de la récupération des expériences.
          </p>
          <p>
            Merci de retourner sur la
            <NuxtLink to="/" class="underline">page d'accueil</NuxtLink>
            avant de revenir sur cette page.
          </p>
        </li>
      </ol>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: experiences } = await useFetch("/api/experiences");
// create exceptions for each experience description
// and toggle system to show/hide excerpt/description
if (experiences.value.length > 0) {
  experiences.value.forEach((item) => {
    if (item.description.length > 100) {
      item.toggleButton = false;
      item.excerpt = item.description.substring(0, 100) + "...";
    }
  });
} else {
  experiences.value = [];
}
</script>

<style scoped lang="postcss">
.readMore {
  @apply underline py-2 mb-2 text-sm font-medium;
}
</style>
