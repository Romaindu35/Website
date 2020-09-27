<template>
  <div class="container mx-auto grid grid-cols-1 md:grid-cols-5">
    <nav class="col-span-1" />
    <article class="grid-span-1 md:col-span-3">
      <h1>{{ page.title }}</h1>
      <nuxt-content
        class="prose"
        :document="page"
      />
    </article>
    <nav class="col-span-1" />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const page = await $content('docs', params.version, params.page).fetch()

    return {
      page
    }
  }
}
</script>
