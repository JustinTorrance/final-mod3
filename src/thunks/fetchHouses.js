import { storeHouses } from "../actions";

export const fetchHouses = () => {
  return async (dispatch) => {
    const url = 'http://localhost:3001/api/v1/houses'
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(response.statusText)
      } else {
        const houses = await response.json()
        dispatch(storeHouses(houses))
      }
    } catch(error) {
      console.log(error.message)
    }
  }
}