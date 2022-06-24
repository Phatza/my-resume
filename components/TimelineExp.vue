<template>
  <div class="timelineExp_container py-8">
    <div class="timelineExp_list">
      <ol class="relative border-l border-gray-200 dark:border-gray-700">
        <li v-if="experiences.length > 0" v-for="item in experiences" class="mb-10 ml-6">
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
            v-html="item.description"
            class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
          >
          </p>
          <a
            v-if="item.url.length > 0"
            :href="item.url"
            target="_blank"
            class="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            Voir le site
          </a>
        </li>
      </ol>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: experiences } = await useFetch('/api/experiences');
</script>