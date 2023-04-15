const cartSection = document.querySelector(".basket")
const cartIcon = document.querySelector("[data-cart-icon]")
const cartIconNumber = document.querySelector("[data-cart-number]")

function getQuantity(data) {
  return data.reduce((acc, item) => {
    return (acc += parseInt(item.quantity))
  }, 0)
}

export function handleCartIconVisibility() {
  const data = JSON.parse(localStorage.getItem("basket")) || []
  if (data.length > 0) {
    cartSection.classList.remove("hidden")
    cartIcon.style.display = "block"
    cartIconNumber.innerText = getQuantity(data)
  } else {
    cartSection.classList.add("hidden")
    cartIcon.style.display = "none"
  }
}
