<script setup>
// get request
// const { data } = await useFetch("/api/ninja", { query: { name: "mario" } });

// post request
// const { data } = await useFetch("/api/ninja", {
//   method: "post",
//   query: { name: "mario" },
//   body: { age: 30 },
// });

// const { data } = await useFetch("/api/ninja");

// currency
const { data } = await useFetch("/api/currency/GBP");
</script>

<template>
  <h2>About</h2>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam facilis, a
    aperiam omnis possimus saepe et repellat. Ipsam assumenda obcaecati
    recusandae molestiae ipsum! Dolorum quis, magni ratione vel commodi ipsam?
  </p>

  <div>{{ data }}</div>
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
