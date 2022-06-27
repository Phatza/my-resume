<template>
  <div class="timelineExp_container relative p-8 bg-white shadow-lg">
    <div class="timelineExp_list">
      <ol class="relative border-l border-gray-200 dark:border-gray-700">
        <li
          v-if="experiences.length > 0"
          v-for="item in experiences"
          class="mb-10 ml-6"
        >
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
            class="py-2 px-2 bg-slate-100 rounded text-sm font-medium"
          >
            Voir le site
          </a>
        </li>
      </ol>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: experiences } = await useFetch("/api/experiences");
// create exceptions for each experience description
// and toggle system to show/hide excerpt/description
experiences.value.forEach((item) => {
  if (item.description.length > 100) {
    item.toggleButton = false;
    item.excerpt = item.description.substring(0, 100) + "...";
  }
});
</script>

<style scoped lang="postcss">
.readMore {
  @apply underline py-2 mb-2 text-sm font-medium;
}
</style>
