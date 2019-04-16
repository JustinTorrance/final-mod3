import { housesReducer } from './housesReducer'

describe('housesReducer', () => {
  it('should return the intial state', () => {
    const expected = []
    const result = housesReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should return an array of houses', () => {
    const expected = [{name: 'lanister'}]
    const action = {
      type: 'STORE_HOUSES',
      houses: [{name: 'lanister'}]
    }
    const result = housesReducer([], action)
    expect(result).toEqual(expected)
  })
})