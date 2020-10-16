import React from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import ItemTable from '../ItemTable/ItemTable';
import NewEventForm from '../NewEventForm/NewEventForm';

//Styling Imports
import Moment from 'react-moment';
import moment from 'moment';
import Camera from '../Camera/Camera';



class InfoPage extends React.Component {

  componentDidMount = () => {
    this.props.dispatch({
      type: 'FETCH_ITEMS'

    })
  }

  render() {
    console.log('Props is:', this.props);
    return (
      <div>
        <p>New Event</p>
        <p>{moment().format('LT')}</p>
        <NewEventForm />


      </div>
    )
  }
}

{/* {this.props.store.items.map((item, i) =>

          <img key={i} src={item.image_url} />
        )} */}

export default connect(mapStoreToProps)(InfoPage);
