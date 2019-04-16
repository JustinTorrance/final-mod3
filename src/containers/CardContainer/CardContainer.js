import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from '../../components/Card/Card';
import shortid from 'shortid'

export class CardContainer extends Component {

  
  render() {

    const displayCards = this.props.houses.map(house => {
      return <Card {...house} key={shortid.generate()} />
    } )

    return(
      <div>
       { displayCards }
      </div>
    )
  }

}

export const mapStateToProps = (state) => ({
  houses: state.houses
})

export default connect(mapStateToProps)(CardContainer)
