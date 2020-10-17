import React from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Event from '../Event/Event';

class ItemTable extends React.Component {


    componentDidMount = () => {
        this.props.dispatch({
            type: 'FETCH_ITEMS'

        })
    }

    deleteItem = (id) => {
        console.log('in deleteItem with item id:', id);

        this.props.dispatch({
            type: 'DELETE_ITEM',
            payload: id
        })
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            {/* <th>Description</th>
                            <th>Image</th>
                            <th>Delete</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.store.items.map((item, i) => {

                            if (this.props.store.user.id === item.user_id) {
                                return (
                                    <Event item={item} />

                                )
                            }


                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}


export default connect(mapStoreToProps)(ItemTable);
