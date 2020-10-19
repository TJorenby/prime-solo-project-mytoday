import React, { useState } from 'react';

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

function Event(props) {

    const [highlight, setHighlight] = useState(false);
    const [textOpen, setTextOpen] = useState(false);
    const [text, setText] = useState(props.item.description);

    // Modal stuff
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = useState(false);




    const toggleHighlight = () => {
        highlight ? setHighlight(false) : setHighlight(true);
    }

    const updateText = () => {
        console.log('in updateText');
        setTextOpen(false);
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
                                    placeholder={text}
                                    onChange={(e) => setText(e.target.value)}
                                />
                            ) : (
                                    <p>{text}</p>
                                )
                        }
                    </div>
                    <div>
                        <button
                            onClick={() => updateText()}

                        >Update Text</button>
                    </div>


                </div >
            </Modal >





        </div >
    )
}

export default Event;
