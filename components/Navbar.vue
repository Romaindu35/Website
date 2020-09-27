<template>
  <nav class="navbar">
    <div class="flex container mx-auto px-4">
      <NuxtLink to="/">
        <p class="navbar-item">
          EssentialsX
        </p>
      </NuxtLink>
      <p class="navbar-item">
        helo
      </p>
    </div>
  </nav>
</template>

<style>
.navbar {
  @apply flex bg-light text-dark;
}

.navbar-item {
  @apply p-4;
}

.navbar-item:hover {
  @apply bg-light-hover;
}
</style>
