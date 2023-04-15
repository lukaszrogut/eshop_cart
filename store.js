import getPrice from "./helpers/getPrice"
import { getTotalPrice } from "./helpers/getTotalPrice"
import { handleCartIconVisibility } from "./helpers/handleCartIconVisibility"
import { handleCartVisibility } from "./helpers/handleCartVisibility"
import { renderCartItems } from "./helpers/renderCartItems"
import data from "./items.json"
const IMAGE_URL = "https://dummyimage.com/420x260/"

const storeItemsList = document.getElementById("store-elements-list")
const template = document.getElementById("store-item-template")
const cartItems = JSON.parse(localStorage.getItem("basket")) || []

function handleAddToCart(id) {
  const index = cartItems.findIndex((item) => item.id === id)
  if (index > -1) {
    cartItems[index].quantity += 1
  } else {
    const newElement = {
      id: id,
      quantity: 1,
    }
    cartItems.push(newElement)
  }
  localStorage.setItem("basket", JSON.stringify(cartItems))
  handleCartIconVisibility()
  handleCartVisibility()
  renderCartItems()
  getTotalPrice()
}

function renderStoreItems(data) {
  data.forEach((item) => {
    const storeItem = template.content.cloneNode(true)
    const image = storeItem.querySelector("img")
    image.setAttribute(
      "src",
      IMAGE_URL + item.imageColor + "/" + item.imageColor
    )
    const category = storeItem.querySelector("[data-category]")
    category.innerText = item.category
    const name = storeItem.querySelector("[data-name]")
    name.innerText = item.name
    const price = storeItem.querySelector("[data-price]")
    price.innerText = getPrice(item.priceCents)
    const button = storeItem.querySelector("[data-add-to-cart]")
    button.addEventListener("click", () => handleAddToCart(item.id))

    storeItemsList.appendChild(storeItem)
  })
}

if (storeItemsList) {
  renderStoreItems(data)
}
