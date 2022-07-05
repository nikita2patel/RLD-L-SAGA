
import { takeEvery ,put} from "redux-saga/effects";
import { DELETE_USER, DELETE_USER_UP ,EDIT_USER_UP,EDIT_USER, UPDATE_USER_UP,UPDATE_USER} from "../Type";

function* UserDelete(action) {
	
  yield put({
    type: DELETE_USER_UP,
    payload: action.payload,
  });
}
function* UserEdit(action){
  yield put ({
  type: EDIT_USER_UP,
  payload: action.payload
  });
}
function* Useruser(action){
  yield put ({
  type:UPDATE_USER_UP ,
  payload: action.payload
  });
}
export function* selectall() {
  yield takeEvery(DELETE_USER, UserDelete);
  yield takeEvery(EDIT_USER, UserEdit);
  yield takeEvery(UPDATE_USER,Useruser)
}
