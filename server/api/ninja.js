export default defineEventHandler(async (event) => {
  // const { name } = getQuery(event);
  // const { age } = await readBody(event);

  const { data } = await $fetch("https://api.currencyapi.com/v3/currencies", {
    query: { apiKey: "NXvT93BGKyT5Szj57zf42O9UDWGXA4UddNkxraLS" },
  });

  return data;

  // return {
  //   message: `Hello ${name}! Your age is ${age}.`
  // };
});
