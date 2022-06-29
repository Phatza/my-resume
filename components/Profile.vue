<template>
    <div class="profile_container p-5">
        <div class="profile_image mb-4">
            <NuxtLink to="/">
                <img src="~/assets/images/brice-hpc-avatar.png" width="100" class="mx-auto shadow-lg rounded-1 shadow-slate-500" alt="avatar" />
            </NuxtLink>
        </div>
        <div class="profile_name flex flex-col items-center divide-y-4 divide-light-50 divide-y-reverse">
            <span class="font-bold text-white text-xl">Brice HA PHUOC CHI</span>
            <span class="font-bold text-white text-lg pb-2">Développeur Web</span>
        </div>
    </div>
</template>

<style>
.profile_name {
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}
</style>