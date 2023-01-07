export default defineEventHandler(async (event) => {
  const { code } = event.context.params;
  const { currencyKey } = useRuntimeConfig();

  // const uri = `https://api.currencyapi.com/v3/currencies`;

  const { data } = await $fetch("https://api.currencyapi.com/v3/currencies", {
    query: {
      currencies: code,
      apikey: currencyKey,
    },
  });

  return data;
});
