import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import MonthPicker from '../MonthPicker/MonthPicker';
import Event from '../Event/Event';
import moment from 'moment';



//Styling Imports
import './Archive.scss';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Button from '@material-ui/core/Button';
import { useSpring, animated } from 'react-spring';
import { BiSearch } from "react-icons/bi";

//DRAWER
import Drawer from '@material-ui/core/Drawer';


// Grid styling 
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',

    },
    gridList: {
        width: 500,
        // height: 450,
    },
    // DRAWER
    list: {
        width: 50,
    },
    fullList: {
        width: 50,
    },
}));

function Archive(props) {
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [monthYear, setMonthYear] = useState('');
    const test = [props.store.items];
    const classes = useStyles();
    const trans = useSpring({ opacity: 1, from: { opacity: 0 } });
    const [drawerOpen, setDrawerOpen] = useState(false);



    console.log('month is:', month);
    console.log('props items:', test);
    console.log('month year is:', monthYear);


    const searchDate = () => {
        setMonthYear(`${month} ${year}`);
    }

    const closeSearch = () => {
        setMonthYear('');
        setDrawerOpen(false);
    }



    const toggleDrawer = (anchor, open) => (event) => {
        setDrawerOpen({ ...drawerOpen, [anchor]: open });
    };

    const list = (anchor) => (
        <div className="archive__dateSearch">

            <div className="dateSearch_menus">
                <MonthPicker
                    className="text_color"
                    setMonth={setMonth}
                    setYear={setYear}
                />
            </div>
            <div className="dateSearch__btns">
                <Button className="text_color" onClick={() => searchDate()}>Search</Button>
                <Button className="text_color" onClick={() => closeSearch()}>Close</Button>
            </div>

            <div className="drawer__imgContainer">
                <div className={classes.root}>
                    <GridList cellHeight={120} className={classes.gridList} cols={3}>
                        {props.store.items.map((item, i) => {

                            if (props.store.user.id === item.user_id) {
                                // console.log('item.date is:', item.date);
                                let dateString = moment(item.date).format('MMMM YYYY').toString();
                                // console.log('dateString is:', dateString);

                                if (dateString === monthYear) {
                                    return (
                                        <GridListTile key={item.id} cols={item.cols}>
                                            <Event item={item} />
                                        </GridListTile>

                                    )
                                }
                            }
                        })}
                    </GridList>
                </div>
            </div>

        </div>

    );


    return (
        <div className="archive">
            <animated.div style={trans}>

                <div className="center__header">
                    <h4>Archive</h4>

                    <label htmlFor="searchBtn">
                        <BiSearch border="circle" size="30px" color="whitesmoke" />
                    </label>
                    <button
                        id="searchBtn"
                        className="btn-hide"
                        onClick={toggleDrawer('top', true)}
                    />
                    <Drawer anchor={'top'} open={drawerOpen['top']} onClose={toggleDrawer('top', false)}>
                        {list('top')}
                    </Drawer>



                </div>


                <div className="archive__imgContainer">
                    <div className={classes.root}>
                        <GridList cellHeight={120} className={classes.gridList} cols={3}>
                            {props.store.items.map((item, i) => {

                                if (props.store.user.id === item.user_id) {

                                    return (

                                        <GridListTile key={item.id} cols={item.cols || 1}>
                                            <Event item={item} />
                                        </GridListTile>
                                    )
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
