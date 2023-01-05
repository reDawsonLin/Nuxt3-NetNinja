<script setup></script>

<template>
  <header>
    <nav>
      <nuxt-link to="/">Nuxt Ninja</nuxt-link>

      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/products">Products</NuxtLink></li>
      </ul>
    </nav>
  </header>

  <!-- output the page content -->
  <div>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>
