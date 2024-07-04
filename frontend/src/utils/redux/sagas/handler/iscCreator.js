import {
  requestSaveISCIndicator,
  requestGetAllSavedISCIndicators,
} from "../request/iscCreator";
import { call, put } from "redux-saga/effects";
import { getAllSavedISCIndicatorsResponse } from "../../reducers/iscReducer";

export function* handleSaveISCIndicator(action) {
  let iscData = action.iscData;
  try {
    console.log("iscData", iscData);
    const response = yield call(
      requestSaveISCIndicator,
      JSON.stringify(iscData)
    );
  } catch (error) {
    console.log(error);
  }
}

export function* handleGetAllSavedISCIndicators(action) {
  let userId = action.userId;
  try {
    const response = yield call(requestGetAllSavedISCIndicators);
    let listofIscIndicators = response.data.map(item => ({
      ...item,
      parsedJson: JSON.parse(item.iscJsonString)
    }));
    listofIscIndicators.map((item) => {
      item.parsedJson.Id = item.id;});

    let ISCDashboard = [];
    ISCDashboard = listofIscIndicators.map((item) => { return item.parsedJson; });
    console.log("Handler", ISCDashboard);
    yield put(getAllSavedISCIndicatorsResponse(ISCDashboard));
  } catch (error) {
    console.log(error);
  }
}
