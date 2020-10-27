import React from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Event from '../Event/Event';
import moment from 'moment';



//Styling Imports
import './UserPage.scss';
import { useSpring, animated } from 'react-spring';

function UserPage(props) {
  const todayDate = moment(new Date()).format('ll');
  const trans = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (


    <div>
      <div className="center__header">
        <h4>Today's Events</h4>
        <p>{todayDate}</p>
      </div>



      <div className="userpage__eventList">
        {props.store.items.map((item, i) => {

          if (props.store.user.id === item.user_id) {
            console.log('item.date is:', item.date);
            let dateString =
              moment(item.date).format('ll');
            console.log('dateString is:', dateString);

            console.log('todayDate is:', todayDate);

            if (todayDate === dateString) {
              return (


                <animated.div
                  key={i}
                  style={trans}
                  className="userpage__eventContainer"
                >
                  <div className="eventContainer__event">
                    <Event item={item} />
                  </div>


                  <div className="eventContainer__dateDescription">
                    <div
                      className="dateDescription__date"

                    >{moment(item.date).format('h:mm a')}</div>

                    <div
                      className="dateDescription__description"

                    >{item.description}</div>

                  </div>


                </animated.div>

              )
            }
          }
          return null;
        })};
      </div>
    </div>
  )
}

export default connect(mapStoreToProps)(UserPage);
