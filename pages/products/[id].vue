<template>
  <div>
    <p>Product details for {{ id }}</p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat iure
      maiores non doloremque. Iste nihil sint minus optio officiis mollitia aut,
      accusantium repudiandae beatae velit fugit expedita eius. Eveniet, fugit.
    </p>
  </div>
</template>

<script setup>
const route = useRoute();
const { id } = route.params;

definePageMeta({
  layout: "products",
});
</script>

<style lang="scss" scoped>
h2 {
  margin-bottom: 2rem;
  font-size: 2rem;
}
p {
  margin: 1.5rem 0;
}
</style>
