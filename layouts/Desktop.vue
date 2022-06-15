<template>
    <div class="grid grid-cols-6 mx-auto">
        <header class="col-span-1" role="navigation">
            <Profile />
            <Nav />
        </header>
        <main class="col-span-5">
            <slot />
        </main>
    </div>
</template>