import { getTotalPrice } from "./getTotalPrice"

const cartWrapper = document.querySelector("[data-cart-wrapper]")
const cartTotalCost = document.querySelector("[data-total-cost]")

export function handleCartVisibility() {
  const data = JSON.parse(localStorage.getItem("basket")) || []
  if (data.length > 0) {
    cartWrapper.classList.remove("hidden")
    cartTotalCost.innerText = getTotalPrice()
  } else {
    cartWrapper.classList.add("hidden")
  }
}
