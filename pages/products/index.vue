<script setup>
definePageMeta({
  layout: "products",
});

// is already ref()
const { data: products } = await useFetch("https://fakestoreapi.com/products");

useHead({
  title: "Nuxt Dojo | Merch",
  meta: [{ name: "description", content: "Nuxt 3 Merch" }],
});
</script>

<template>
  <div class="grid grid-cols-4 gap-5">
    <div v-for="p in products" :key="p.id">
      <ProductCard :product="p" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
h2 {
  margin-bottom: 2rem;
  font-size: 2rem;
}
p {
  margin: 1.5rem 0;
}
</style>
