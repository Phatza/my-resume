<template>
  <main>
    <ContentDoc>
      <template #not-found>
        <div id="PageNotFound">
          <h1>404</h1>
          <p>
            Page
            <span>"{{ $route.params.slug[0] }}"</span>
            not found
          </p>
          <a href="/">Go back to homepage</a>
        </div>
      </template>
    </ContentDoc>
  </main>
</template>

<style lang="scss">
#PageNotFound {
  border: 2px solid #000000;
  text-align: center;
  padding-bottom: 1em;
    span {
      font-weight: bold;
      text-transform: uppercase;
    }
}
</style>