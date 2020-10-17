import React from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';



function Archive() {
    return (
        <div>
            <h2>Archive</h2>
        </div>
    )
}

export default connect(mapStoreToProps)(Archive);
