<template>
  <div>
    <Head>
      <Title>Nuxt Ninja | {{ product.title }}</Title>
      <Meta name="description" :content="product.description" />
    </Head>

    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
definePageMeta({ layout: "products" });

const { id } = useRoute().params;
const url = `https://fakestoreapi.com/products/${id}`;

const { data: product } = await useFetch(url, { key: id });
// console.log("product.value :>> ", product.value);
if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Product not found",
    fatal: true,
  });
}
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
