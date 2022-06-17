<template>
    <div class="container px-5 flex flex-col justify-center content-center">
        <header role="navigation">
            <Profile />
            <Nav />
        </header>
        <main>
            <slot />
        </main>
    </div>
</template>