import {myFavCats, deleteFav} from "./dataAccess.js"

const mainContainer = document.querySelector("#container")
mainContainer.addEventListener("click", click => {
  if (click.target.id.startsWith("delete--")) {
    const id = click.target.id.split("delete--")[1]
    deleteFav(id)
  }

})

export const Favs = () => {
  const favs = myFavCats()
debugger
  const favCatImgs = favs.map(
    (cat) => {
      const url = cat.sub_id.split("fav--")[1]
      return `
      <article class="column">
        <img src="${url}" />
        <button id="delete--${cat.id}">Delete</button>
      </article>
      `
    }
  )
  let html = `
      <h1>Favorite Cats</h1><section class="flex">
  `
  html += favCatImgs.join("")
  html += `</section>`
  return html
}