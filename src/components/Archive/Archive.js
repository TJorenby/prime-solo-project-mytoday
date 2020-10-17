import React from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Calendar from '../Calendar/Calendar';
import ItemTable from '../ItemTable/ItemTable';
import MonthPicker from '../MonthPicker/MonthPicker';




function Archive() {
    return (
        <div>
            <h2>Archive</h2>
            <MonthPicker />
            <ItemTable />


        </div>
    )
}

export default connect(mapStoreToProps)(Archive);
