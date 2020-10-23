import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import MonthPicker from '../MonthPicker/MonthPicker';
import Event from '../Event/Event';
import moment from 'moment';
import { useSpring, animated } from 'react-spring';


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

    const trans = useSpring({ opacity: 1, from: { opacity: 0 } });



    return (
        <>
            <animated.div style={trans}>
                <div className="archive__monthPicker">

                    <MonthPicker
                        className="text_color"
                        setMonth={setMonth}
                        setYear={setYear}
                    />
                    <button onClick={() => searchDate()}>Submit</button>
                    <button onClick={() => setMonthYear('')}>Clear Results</button>
                </div>
                <div>

                </div>

                <div className="archive__imgContainer">
                    <table>
                        <tbody>
                            {props.store.items.map((item, i) => {

                                if (props.store.user.id === item.user_id) {
                                    // console.log('item.date is:', item.date);
                                    let dateString = moment(item.date).format('MMMM YYYY').toString();
                                    // console.log('dateString is:', dateString);

                                    if (monthYear === '') {

                                        return (
                                            <tr className="imgContainer__event"  >
                                                <td>
                                                    <Event item={item} />
                                                </td>

                                            </tr>



                                        )

                                    }

                                    else if (dateString === monthYear) {
                                        return (
                                            <tr className="imgContainer__event"  >
                                                <td>
                                                    <Event item={item} />
                                                </td>

                                            </tr>

                                        )
                                    }
                                }
                            })}
                        </tbody>
                    </table>

                </div>
            </animated.div>
        </>
    )
}

export default connect(mapStoreToProps)(Archive);
