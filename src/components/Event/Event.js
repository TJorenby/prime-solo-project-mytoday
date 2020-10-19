import React, { useState } from 'react';
import { connect } from 'react-redux';

//Styling Imports
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Input } from '@material-ui/core';



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
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

//________

function Event(props) {

    const [textOpen, setTextOpen] = useState(false);
    const [highlight, setHighlight] = useState(props.item.highlight);
    const [description, setDescription] = useState(props.item.description);


    // Modal stuff
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const update = {
        description: description,
        highlight: highlight

    }


    const toggleHighlight = () => {
        highlight ? setHighlight(false) : setHighlight(true);
    }

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

        this.props.dispatch({
            type: 'DELETE_EVENT',
            payload: id
        })
    }




    return (
        <div>

            <div
                onClick={() => setOpen(true)}
            >
                <img src={`${props.item.file_url}`} />
            </div>

            <Modal

                open={open}
                onClose={() => setOpen(false)}
            >
                <div style={modalStyle} className={classes.paper}>
                    <h2>MODAL IS OPEN</h2>
                    <div className="event__modalImage">
                        <img src={`${props.item.file_url}`} />
                    </div>
                    <div className="event__modalText">

                    </div>
                    <div className="modal__deleteBtn">
                        <button>Delete</button>
                        <button
                            onClick={() => setTextOpen(true)}
                        >Edit Text</button>
                        <input
                            type='checkbox'
                            className='custom-checkbox-input'
                            id='highlighCheckbox'
                            value={highlight}
                            onClick={toggleHighlight}
                        />
                    </div>
                    <div>
                        {
                            textOpen === true ? (
                                <input
                                    type="text"
                                    placeholder={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            ) : (
                                    <p>{description}</p>
                                )
                        }
                    </div>
                    <div>
                        <button
                            onClick={() => updateDescription()}

                        >Update Text</button>
                    </div>


                </div >
            </Modal >





        </div >
    )
}

export default connect()(Event);
