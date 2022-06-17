<template>
    <div class="socialLinks">
        <ul class="flex justify-center">
            <li v-for="link of socialLinks" class="px-1">
                <a v-if="link.name !== 'email'" :href="link.url" target="_blank">
                    <nuxt-icon class="text-2xl" :name="link.name"></nuxt-icon>
                </a>
                <a v-else :href="link.url">
                    <nuxt-icon class="text-2xl" :name="link.name"></nuxt-icon>
                </a>
            </li>
        </ul>
    </div>
</template>

<script setup>
const socialLinks = ref([
    {
        name: 'facebook',
        url: 'https://www.facebook.com/phatzacreation',
    },
    {
        name: 'instagram',
        url: 'https://www.instagram.com/phatzacreation/',
    },
    {
        name: 'twitter',
        url: 'https://twitter.com/BricePhatza',
    },
    
    {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/bricehpc/',
    },
    {
        name: 'github',
        url: 'https://github.com/Phatza',
    },
    {
        name: 'email',
        url: 'mailto:brice@phatza-creation.fr',
    }
]);
</script>