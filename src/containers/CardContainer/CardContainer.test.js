import { mapStateToProps } from '../CardContainer/CardContainer'

describe('CardContainer', () => {
  it('should return an object with an array of houses', () => {
    const mockState = {
      loading: false,
      error: 'Something went wrong',
      houses: [{name: 'lanisters'}] 
    }
    const expected = {
      houses: [{name: 'lanisters'}] 
    }
    const mappedProps = mapStateToProps(mockState)
    expect(mappedProps).toEqual(expected)
  })
})