//data source
const fetchProducts = async () =>
  await (await fetch('https://jsainsburyplc.github.io/front-end-test/products.json')).json();

export default fetchProducts;
