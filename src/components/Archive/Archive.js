import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import MonthPicker from '../MonthPicker/MonthPicker';
import Event from '../Event/Event';



//Styling Imports
import './Archive.scss';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import moment from 'moment';
import { useSpring, animated } from 'react-spring';

// Grid styling 
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        // backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        // width: 500,
        // height: 450,
    },
}));

function Archive(props) {
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [monthYear, setMonthYear] = useState('');
    const test = [props.store.items];
    const classes = useStyles();
    console.log('month is:', month);
    console.log('props items:', test);


    const searchDate = () => {
        setMonthYear(`${month} ${year}`);
    }
    console.log('month year is:', monthYear);

    const trans = useSpring({ opacity: 1, from: { opacity: 0 } });



    return (
        <div className="archive">
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
                    <div className={classes.root}>
                        <GridList cellHeight={120} className={classes.gridList} cols={3}>
                            {props.store.items.map((item, i) => {

                                if (props.store.user.id === item.user_id) {
                                    // console.log('item.date is:', item.date);
                                    let dateString = moment(item.date).format('MMMM YYYY').toString();
                                    // console.log('dateString is:', dateString);

                                    if (monthYear === '') {

                                        return (

                                            <GridListTile key={item.id} cols={item.cols || 1}>
                                                <Event item={item} />
                                            </GridListTile>





                                        )

                                    }

                                    else if (dateString === monthYear) {
                                        return (
                                            <GridListTile key={item.id} cols={item.cols || 1}>
                                                <Event item={item} />
                                            </GridListTile>

                                        )
                                    }
                                }
                            })}
                        </GridList>
                    </div>

                </div>
            </animated.div>
        </div >
    )
}

export default connect(mapStoreToProps)(Archive);
