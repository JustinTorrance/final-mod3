export const storeHouses = (houses) => ({
  type: 'STORE_HOUSES',
  houses
})

export const isLoading = (boolean) => ({
  type: 'IS_LOADING',
  loading: boolean
})

export const hasErrored = (message) => ({
  type: 'HAS_ERRORED',
  message
})