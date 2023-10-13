import axios from "axios";
import { takeEvery, put } from "redux-saga/effects";

// function to get all items from database
function* fetchItemsSaga() {
  try {
    const items = yield axios.get("/api/shelf");
    console.log("FETCH request from items.saga");
    yield put({ type: "SET_ITEMS", payload: items.data });
  } catch {
    console.log("error in fetchItemsSaga");
  }
}

function* addItemSaga(action) {
  try {
    console.log(action.payload);
    yield axios.post("/api/shelf", action.payload);
    yield put({ type: "FETCH_ITEMS" });
  } catch (error) {
    console.log("error in addItemSaga", error);
  }
}

function* deleteItemSaga(action) {
  try {
    yield axios.delete(`/api/shelf/${action.payload}`);
    yield put({ type: "FETCH_ITEMS" });
  } catch (error) {
    console.log("error with DELETE saga request", error);
  }
}
function* fetchMyShelf() {
  try {
    const items = yield axios.get("/api/myShelf");
    console.log("FETCH request from items.saga");
    yield put({ type: "SET_MY_ITEMS", payload: items.data });
  } catch {
    console.log("error in fetchItemsSaga");
  }
}

function* editItemSaga(action) {
  try {
    // not sure what the action.payload is in this, just used it because that was
    // what was in the notes from the movie edit thing from monday
    // should be an object
    console.log(action.payload);
    yield axios.put(`/api/shelf/${action.payload.id}`, action.payload);
    yield put({ type: "FETCH_ITEMS" });
  } catch (err) {
    console.log("Error in editing movie", err);
  }
}

export default function* itemsSaga() {
  yield takeEvery("FETCH_ITEMS", fetchItemsSaga);
  yield takeEvery("FETCH_MY_SHELF", fetchMyShelf);
  yield takeEvery("ADD_ITEM", addItemSaga);
  yield takeEvery("DELETE_ITEM", deleteItemSaga);
  yield takeEvery("EDIT_ITEM", editItemSaga);
}
