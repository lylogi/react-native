import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ListProductsScreen extends Component {
  displayName = 'ListProductsScreen';

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Text>List Product</Text>
    )
  }
}


function initMapStateToProps(state) {
  return {state : state};
}

function initMapDispatchToProps(dispatch) {
  return bindActionCreators({
  }, dispatch);
}

export default connect(initMapStateToProps, initMapDispatchToProps)(ListProductsScreen);
