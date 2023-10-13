import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

function * fetchTableItemDescr(action) {
    try {
        const response = yield axios.get(`/api/table/item/${action.payload}`);
        yield put({
            type: "FETCH_TABLE_ITEM_DESCR_SUCCESS",
            payload: response.data
        });
    } catch (error) {
        yield put({
            type: "FETCH_TABLE_ITEM_DESCR_FAILURE",
            payload: error
        });
    }
}

function * tableItemDescrSaga() {
    yield takeEvery("FETCH_TABLE_ITEM_DESCR", fetchTableItemDescr);
}

export default tableItemDescrSaga;