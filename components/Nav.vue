<template>
    <nav>
        <ContentNavigation v-slot="{ navigation }">
            <ul class="flex justify-evenly md:flex-col md:justify-center md:content-center">
                <li v-for="link of navigation" :key="link._path">
                    <NuxtLink :to="link._path">
                        {{ link.title }}
                    </NuxtLink>
                </li>
            </ul>
        </ContentNavigation>
    </nav>
</template>