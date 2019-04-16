import { loadingReducer } from './loadingReducer'

describe('loadingReducer', () => {
  it('should return the initial state', () => {
    const expected = false
    const result = loadingReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should return a boolean of true', () => {
    const expected = true
    const action = {
      type: 'IS_LOADING',
      loading: true
    }
    const result = loadingReducer(false, action)
    expect(result).toEqual(expected)
  })
})