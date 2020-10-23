import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

//Style Imports



const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        color: "whitesmoke"
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
        color: "whitesmoke"
    },
}));



function MonthPicker(props) {

    const classes = useStyles();
    const [month, setMonth] = React.useState('');
    const [year, setYear] = React.useState('');

    const handleChangeMonth = (event) => {
        setMonth(event.target.value);
        props.setMonth(event.target.value);
    };

    const handleChangeYear = (event) => {
        setYear(event.target.value);
        props.setYear(event.target.value);

    };

    return (
        <div>
            <FormControl className={classes.formControl}>
                <Select
                    value={month}
                    onChange={handleChangeMonth}
                    displayEmpty
                    className={classes.selectEmpty}
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value="" disabled>
                        Month
          </MenuItem>
                    <MenuItem value={'January'}>Jan</MenuItem>
                    <MenuItem value={'February'}>Feb</MenuItem>
                    <MenuItem value={'March'}>Mar</MenuItem>
                    <MenuItem value={'April'}>Apr</MenuItem>
                    <MenuItem value={'May'}>May</MenuItem>
                    <MenuItem value={'June'}>Jun</MenuItem>
                    <MenuItem value={'July'}>Jul</MenuItem>
                    <MenuItem value={'August'}>Aug</MenuItem>
                    <MenuItem value={'September'}>Sep</MenuItem>
                    <MenuItem value={'October'}>Oct</MenuItem>
                    <MenuItem value={'November'}>Nov</MenuItem>
                    <MenuItem value={'December'}>Dec</MenuItem>
                </Select>
                <FormHelperText>Month</FormHelperText>
            </FormControl>


            <FormControl className={classes.formControl}>
                <Select
                    value={year}
                    onChange={handleChangeYear}
                    displayEmpty
                    className={classes.selectEmpty}
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value="" disabled>
                        Year
          </MenuItem>
                    <MenuItem value={'2019'}>2019</MenuItem>
                    <MenuItem value={'2020'}>2020</MenuItem>
                    <MenuItem value={'2021'}>2021</MenuItem>
                </Select>
                <FormHelperText>Year</FormHelperText>
            </FormControl>



        </div >
    )
}

export default MonthPicker;


