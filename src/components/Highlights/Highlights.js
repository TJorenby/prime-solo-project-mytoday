import React from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';



function Highlights() {
  return (
    <div>
      <h2>On This Day...</h2>
      <button>Last Week</button>
      <button>Last Month</button>
      <button>Last Year</button>
    </div>
  )
}

export default connect(mapStoreToProps)(Highlights);

