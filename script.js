// get data from localStorage

import { getTotalPrice } from "./helpers/getTotalPrice"
import { handleCartIconVisibility } from "./helpers/handleCartIconVisibility"
import { handleCartVisibility } from "./helpers/handleCartVisibility"
import { renderCartItems } from "./helpers/renderCartItems"

// jesli w koszyku sa elementy, pokaz ikone koszyka

// jesli klikne w ikone koszyka - pokaz cart
// jesli dodam cos do koszyka - pokaz cart
handleCartIconVisibility()
handleCartVisibility()
renderCartItems()
getTotalPrice()
