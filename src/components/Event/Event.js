import React, { useState } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

//Styling Imports
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';
import { BiTrash, BiCheck } from "react-icons/bi";
import './Event.scss';



// Modal Styling
function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));



function Event(props) {

    const [textOpen, setTextOpen] = useState(false);
    const [highlight, setHighlight] = useState(props.item.highlight);
    const [description, setDescription] = useState(props.item.description);
    const date = moment(props.item.date).format('LLL');


    // Modal stuff
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [modalOpen, setModalOpen] = useState(false);

    const update = {
        description: description,
        highlight: highlight,
        id: props.item.id


    }


    // const toggleHighlight = () => {
    //     highlight ? setHighlight(false) : setHighlight(true);
    // }

    const updateDescription = () => {
        console.log('in updateText');
        setTextOpen(false);


        props.dispatch({
            type: 'PUT_UPDATE',
            payload: update
        })
    }

    console.log('update:', update);

    const deleteEvent = (id) => {
        console.log('in deleteItem with item id:', id);
        setDescription(props.item.description);

        props.dispatch({
            type: 'DELETE_EVENT',
            payload: id
        })
        setModalOpen(false);
    }


    return (
        <div className="event">

            <div
                onClick={() => setModalOpen(true)}

            >
                <img
                    className="event__imgClick"
                    src={`${props.item.file_url}`}
                    alt=""
                />
            </div>


            <Modal

                open={modalOpen}
                onClose={() => setModalOpen(false)}
            >
                <div style={modalStyle} className={classes.paper}>
                    <div className="event__modalContainer">
                        <div>
                            <img
                                className="event__modalImage"
                                src={`${props.item.file_url}`}
                                alt=""
                            />
                        </div>


                        <div className="event__modalDate">{date}</div>

                        <div className="event__modalCaption">

                            {
                                textOpen ? (

                                    <TextField
                                        type="text"
                                        placeholder={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />

                                ) : (
                                        <div>
                                            {props.item.description}
                                        </div>
                                    )
                            }
                        </div>


                        <div className="event__modalBtns">
                            <label htmlFor="deleteBtn">
                                <BiTrash size="23px" />
                            </label>
                            <Button
                                id="deleteBtn"
                                className="btn-hide"
                                onClick={() => deleteEvent(props.item.id)}
                            />

                            <div>
                                {textOpen ? (<div >
                                    <label htmlFor="updateBtn">
                                        <BiCheck className="event__modalCheckBtn" size="25px" />
                                    </label>
                                    <Button
                                        id="updateBtn"
                                        onClick={() => updateDescription()}

                                    />
                                </div>) : (
                                        <div>
                                            <Button
                                                onClick={() => setTextOpen(true)}
                                            >Edit</Button>
                                        </div>
                                    )}
                            </div>
                        </div>
                    </div>
                </div >

            </Modal >
        </div >
    )
}

export default connect()(Event);
