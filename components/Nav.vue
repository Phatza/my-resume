<template>
    <nav>
        <ContentNavigation v-slot="{ navigation }">
            <ul v-for="link of navigation" :key="link._path">
                <li>
                    <NuxtLink :to="link._path">
                        {{ link.title }}
                    </NuxtLink>
                </li>
            </ul>
        </ContentNavigation>
    </nav>
</template>