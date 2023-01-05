<template>
  <header>
    <nav>
      <nuxt-link to="/products">Nuxt Ninja Product</nuxt-link>
    </nav>
  </header>

  <!-- output the page content -->
  <div>
    <slot />
  </div>

  <footer>
    <ul>
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/about">About</NuxtLink></li>
      <li><NuxtLink to="/products">Products</NuxtLink></li>
    </ul>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>
