import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchItems(action) {
    console.log('in fetchItems saga with', action);

    let response = yield axios({
        method: 'GET',
        url: '/api/events'
    });

    console.log('back from GET with:', response.data);

    yield put({
        type: 'SET_ITEMS',
        payload: response.data
    })
}

function* deleteEvent(action) {
    console.log('in fetchItems saga with', action);

    let response = yield axios({
        method: 'DELETE',
        url: `/api/events/${action.payload}`,
        data: {
            id: action.payload
        }
    });

    console.log('back from DELETE with:', response.data);

    yield put({
        type: 'FETCH_ITEMS',

    })
}

function* putUpdate(action) {
    console.log('in putUpdate saga with', action);

    let response = yield axios({
        method: 'PUT',
        url: `/api/events/${action.payload}`,
        data: action.payload
    });

    console.log('back from PUT with:', response.data);

    yield put({
        type: 'FETCH_ITEMS',

    })
}

function* addEvent(action) {
    console.log('in addEvent saga with file', action);

    let formData = new FormData();
    formData.append('date', action.payload.date);
    formData.append('user_id', action.payload.user_id);
    formData.append('title', action.payload.title);
    formData.append('description', action.payload.description);
    formData.append('file', action.payload.file);
    formData.append('highlight', action.payload.highlight);
    console.log('formData is:', formData);

    let response = yield axios({
        method: 'POST',
        url: `/api/events`,
        data: formData,
        headers: {
            'Content-Type': 'multipart/form-data'
        }

    });

    console.log('back from ADD ITEM with:', response.data);

    yield put({
        type: 'FETCH_ITEMS'

    })
}

function* itemsSaga() {
    yield takeLatest('FETCH_ITEMS', fetchItems);
    yield takeLatest('DELETE_EVENT', deleteEvent);
    yield takeLatest('ADD_EVENT', addEvent);
    yield takeLatest('PUT_UPDATE', putUpdate);
}

export default itemsSaga;