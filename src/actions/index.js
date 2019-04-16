export const storeHouses = (houses) => ({
  type: 'STORE_HOUSES',
  houses
})

export const isLoading = (boolean) => ({
  type: 'IS_LOADING',
  loading: boolean
})