import getPrice from "./getPrice"
import elements from "../items.json"
import { handleCartIconVisibility } from "./handleCartIconVisibility"
import { handleCartVisibility } from "./handleCartVisibility"
import { getTotalPrice } from "./getTotalPrice"

const IMAGE_URL = "https://dummyimage.com/210x130/"

function handleRemoveFromCart(id) {
  const data = JSON.parse(localStorage.getItem("basket"))
  const index = data.findIndex((item) => item.id === id)
  data.splice(index, 1)
  localStorage.setItem("basket", JSON.stringify(data))
  handleCartIconVisibility()
  handleCartVisibility()
  renderCartItems()
  getTotalPrice()
}

export function renderCartItems() {
  const cartItemList = document.querySelector(".cart-list")
  cartItemList.innerHTML = ""
  const template = document.getElementById("cart-item-template")

  const data = JSON.parse(localStorage.getItem("basket")) || []
  data.forEach((item) => {
    const cartItem = template.content.cloneNode(true)
    const itemData = elements.find((el) => el.id === item.id)

    const image = cartItem.querySelector("img")
    image.setAttribute(
      "src",
      IMAGE_URL + itemData.imageColor + "/" + itemData.imageColor
    )
    const quantity = cartItem.querySelector("[data-quantity]")
    if (item.quantity > 1) quantity.innerHTML = "x " + item.quantity
    const button = cartItem.querySelector("[data-remove-from-cart-button]")
    button.addEventListener("click", () => handleRemoveFromCart(item.id))

    const name = cartItem.querySelector("h2")
    name.innerText = itemData.name

    const price = cartItem.querySelector(".cart-price")

    price.innerText = getPrice(itemData.priceCents * item.quantity)

    cartItemList.appendChild(cartItem)
  })
}
