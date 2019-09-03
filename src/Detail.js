
import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Detail extends Component {
  static defaultProps = {
    detailTitle: 'Prop',
    detailValue: 'Prop1.1'
  }
  render() {
    const { detailTitle, detailValue } = this.props;
    return (
      <>
        <h2>{detailTitle}</h2>
        <h2>{detailValue}</h2>
      </>
    )
  }
}

Detail.propTypes = {
  detailTitle: PropTypes.string,
  detailValue: PropTypes.number
}

export default Detail;