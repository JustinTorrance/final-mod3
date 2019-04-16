import * as actions from './index'

describe('actions', () => {
  it('should have a type of STORE_HOUSES and an array of house data', () => {
    const houses = [{
      name: 'Peter Dinklage',
      family: 'Lanister'
    }]
    const expected = {
      type: 'STORE_HOUSES',
      houses
    }
    const result = actions.storeHouses(houses)
    expect(result).toEqual(expected)
  })

  it('should have a type of IS_LOADING and a boolean of false', () => {
    const expected = {
      type: 'IS_LOADING',
      loading: false
    }
    const result = actions.isLoading(false)
    expect(result).toEqual(expected)
  })

  it('should have a type of hasErrored and return a message', () => {
    const expected = {
      type: 'HAS_ERRORED',
      message: 'Something went wrong'
    }
    const result = actions.hasErrored('Something went wrong')
    expect(result).toEqual(expected)
  })
})