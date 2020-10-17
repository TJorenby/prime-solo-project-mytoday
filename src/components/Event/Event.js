import React from 'react'

function Event(props) {
    return (
        <div>
            <tr key={props.i}>
                <td>{props.item.description}</td>
                <td>
                    <img src={`${props.item.file_url}`} />
                </td>
                <td><button onClick={() => this.deleteItem(props.item.id)}>Delete</button></td>
            </tr>

        </div>
    )
}

export default Event;
