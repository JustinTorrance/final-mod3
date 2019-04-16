import { mapDispatchToProps, mapStateToProps } from './App'
jest.mock('../../thunks/fetchHouses')

describe('App', () => {

  describe('mapStateToProps', () => {
    it('should return an object with an error message and a boolean of false for loading', () => {
      const mockState = {
        loading: false,
        error: 'Something went wrong',
        houses: [{name: 'lanisters'}]
      }
      const expected = {
        loading: false,
        error: 'Something went wrong'
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })
  })

  describe('mapDispatchToProps', () => {
    it('should call dispatch with the fetchHouses thunk when fetchHouses is called', () => {
      const mockDispatch = jest.fn()
      const fetchHouses = jest.fn()
      const actionsToDispatch = fetchHouses()
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.fetchHouses()
      expect(mockDispatch).toHaveBeenCalledWith(actionsToDispatch)
    })
  })
})