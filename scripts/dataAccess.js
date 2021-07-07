import {API_KEY} from "./api.js"
// const applicationState = () => {}
const applicationState =  {}

const API = "https://api.thecatapi.com/v1"
const apiKey = API_KEY()
const mainContainer = document.querySelector("#container")

export const fetchCats = () => {

    return fetch(`${API}/images/search`, {"X-Api-Key": apiKey})
        .then(response => {
          return response.json()
        })
        .then(
            (cat) => {
                // Store the external state in application state
                applicationState.cat = cat[0]
            }
        )
}

export const catInfo = () => {
  return applicationState.cat
}

export const favCats = () => {
  const fetchOptions = {
    method: "GET",
    headers: {
      "X-Api-Key": apiKey
    },
  }
  
  return fetch(`${API}/favourites`, fetchOptions)
  .then(response => response.json())
  .then((cats) => {
      applicationState.favCats = cats
  })
}

export const myFavCats = () => {
  return applicationState.favCats
}

export const saveFav = (id) => {
  const fetchOptions = {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "X-Api-Key": apiKey
      },
      body: JSON.stringify({
        "image_id": "applicationState.cat.id",
        "sub_id": id
      })
  }

  return fetch(`${API}/favourites`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const deleteFav = (id) => {
  const fetchOptions = {
      method: "DELETE",
      headers: {
          "X-Api-Key": apiKey
      },
  }
  return fetch(`${API}/favourites/${id}`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

