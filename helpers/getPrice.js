export default function getPrice(price) {
  return `$ ${(price / 100).toFixed(2)}`
}
