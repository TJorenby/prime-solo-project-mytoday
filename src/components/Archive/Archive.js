import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import ItemTable from '../ItemTable/ItemTable';
import MonthPicker from '../MonthPicker/MonthPicker';
import Event from '../Event/Event';
import moment from 'moment';

//Styling Imports
import './Archive.scss';




function Archive(props) {
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [monthYear, setMonthYear] = useState('');
    const test = [props.store.items];
    console.log('month is:', month);
    console.log('props items:', test);


    const searchDate = () => {
        setMonthYear(`${month} ${year}`);
    }
    console.log('month year is:', monthYear);


    return (
        <div>
            <h2>Archive</h2>
            <MonthPicker
                setMonth={setMonth}
                setYear={setYear}
            />
            <button onClick={() => searchDate()}>Submit</button>

            <div className="archive__imgContainer">
                {props.store.items.map((item, i) => {

                    if (props.store.user.id === item.user_id) {
                        console.log('item.date is:', item.date);
                        let dateString = moment(item.date).format('MMMM YYYY').toString();
                        console.log('dateString is:', dateString);

                        if (monthYear === '') {

                            return (
                                <div className="imgContainer__event"  >
                                    <Event
                                        item={item}
                                    />

                                </div>
                            )

                        }

                        else if (dateString === monthYear) {
                            return (
                                <div>
                                    <Event item={item} />

                                </div>

                            )
                        }


                    }


                })}



            </div>





        </div>
    )
}

export default connect(mapStoreToProps)(Archive);
