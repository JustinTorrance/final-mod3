import { storeHouses, isLoading } from "../actions";

export const fetchHouses = () => {
  return async (dispatch) => {
    const url = 'http://localhost:3001/api/v1/houses'
    try {
      dispatch(isLoading(true))
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(response.statusText)
      } else {
        const houses = await response.json()
        dispatch(storeHouses(houses))
        dispatch(isLoading(false))
      }
    } catch(error) {
      console.log(error.message)
    }
  }
}