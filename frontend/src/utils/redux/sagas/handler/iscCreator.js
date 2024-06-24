import { requestSaveISCIndicator } from "../request/iscCreator";
import {call, put} from 'redux-saga/effects';

export function* handleSaveISCIndicator(action) {
  let iscData = action.iscData;
  try {
    console.log('iscData',iscData);
    const response = yield call(requestSaveISCIndicator, JSON.stringify(iscData));
    yield put(editISC(response.data));
  } catch (error) {
    console.log(error);
  }
}