import React, { useState } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Link } from 'react-router-dom';
import ItemTable from '../ItemTable/ItemTable';
import Header from '../Header/Header';
import FooterNav from '../FooterNav/FooterNav';
import Event from '../Event/Event';
import moment from 'moment';


function UserPage(props) {
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
      <h2>Today is Tuesday October 19th, 2020</h2>


      <div>
        {props.store.items.map((item, i) => {

          if (props.store.user.id === item.user_id) {
            console.log('item.date is:', item.date);
            let dateString =
              moment(item.date).format('ll');
            console.log('dateString is:', dateString);
            let todayDate = moment(new Date()).format('ll');
            console.log('todayDate is:', todayDate);



            if (todayDate === dateString) {
              return (
                <div>
                  <Event item={item} />
                </div>

              )
            }





          }
        })}

        {/* <ItemTable /> */}

      </div>





    </div>
  )
}

export default connect(mapStoreToProps)(UserPage);
