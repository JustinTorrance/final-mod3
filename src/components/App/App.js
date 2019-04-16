import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { fetchHouses } from '../../thunks/fetchHouses'
import { Loading } from '../Loading/Loading';

class App extends Component {

  componentDidMount() {
    this.props.fetchHouses()
  }

  render() {
    const { loading } = this.props
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
        </div>
        { loading && <Loading />}
        <div className='Display-info'>
        </div>
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  fetchHouses: () => dispatch(fetchHouses())
})

export const mapStateToProps = (state) => ({
  loading: state.loading
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
