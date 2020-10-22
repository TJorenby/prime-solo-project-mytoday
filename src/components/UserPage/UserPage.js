import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Link } from 'react-router-dom';
import Event from '../Event/Event';
import moment from 'moment';

//Styling Imports
import './UserPage.scss';

function UserPage(props) {
  const [month, setMonth] = useState('');
  const test = [props.store.items];
  console.log('month is:', month);
  console.log('props items:', test);


  return (
    <div>
      <h4>{`It's ${moment().format('LT')} on ${moment().format('MMMM Do YYYY')} `}</h4>
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
                <div
                  key={i}
                  className="userpage__eventContainer"
                >
                  <Event item={item} />
                  <div className="eventContainer__date">
                    {moment(item.date).format('h:mm a')}
                  </div>
                </div>

              )
            }
          }
        })}
      </div>
    </div>
  )
}

export default connect(mapStoreToProps)(UserPage);
