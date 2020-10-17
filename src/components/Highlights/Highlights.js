import React from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';



function Highlights() {
  return (
    <div>
      <h2>HIGHLIGHTS</h2>
    </div>
  )
}

export default connect(mapStoreToProps)(Highlights);

