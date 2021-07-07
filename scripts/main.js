import {fetchCats, favCats} from "./dataAccess.js"
import {Cats} from "./cats.js"

const mainContainer = document.querySelector("#container")

const render = () => {
  fetchCats().then(
    () => {
      favCats().then(
      () => {
          mainContainer.innerHTML = Cats()
      })
    }
  )
}

render()

mainContainer.addEventListener(
  "stateChanged",
  customEvent => {
      render()
  }
)