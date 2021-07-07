import {catInfo, saveFav} from "./dataAccess.js"
import {Favs} from "./favs.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
  if (click.target.id === "new__cat") {
    mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
  }
  if (click.target.id.startsWith("fav--")) {
    saveFav(click.target.id)
  }

})

export const Cats = () => {
  const currentCat = catInfo()
  let html = `
      <h1>Random Cat</h1>
      <div>
        <img src="${currentCat.url}" />
      </div>
      <button id="new__cat" class="cat__refresh">New Image</button>
      <button id="fav--${currentCat.url}" class="cat__fav">Favorite</button>
      ${Favs()}
  `

  return html
}