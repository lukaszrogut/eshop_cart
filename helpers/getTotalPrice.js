import getPrice from "./getPrice"
import items from "../items.json"

export function getTotalPrice() {
  const data = JSON.parse(localStorage.getItem("basket")) || []
  if (data.length > 0) {
    const sum = data.reduce((acc, item) => {
      let itemsCost =
        items.find((el) => el.id === item.id).priceCents * item.quantity
      return (acc += itemsCost)
    }, 0)
    return getPrice(sum)
  }
}
