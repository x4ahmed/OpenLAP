import {
  requestSaveISCIndicator,
  requestGetAllSavedISCIndicators,
  requestEditISCIndicator,
  requestDeleteISCIndicator
} from "../request/iscCreator";
import { call, put } from "redux-saga/effects";
import { getAllSavedISCIndicatorsRequest, getAllSavedISCIndicatorsResponse } from "../../reducers/iscReducer";

export function* handleSaveISCIndicator(action) {
  let iscData = action.iscData;
  try {
    console.log("iscData", iscData);
    const response = yield call(
      requestSaveISCIndicator,
      iscData
    );
    if (response.status === 200) {
      console.log("ISC Indicator Saved Successfully");
      yield put(getAllSavedISCIndicatorsRequest());
    }
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
      item.parsedJson.id = item.id;});

    let ISCDashboard = [];
    ISCDashboard = listofIscIndicators.map((item) => { return item.parsedJson; });
    console.log("Get All Indicators Response", ISCDashboard);
    yield put(getAllSavedISCIndicatorsResponse(ISCDashboard));
  } catch (error) {
    console.log(error);
  }
}

export function* handleEditISCIndicator(action) {
  let iscIndicator = action.iscIndicator;
  try {
    const response = yield call(requestEditISCIndicator, iscIndicator);
    if (response.status === 200) {
      console.log("ISC Indicator Updated Successfully");
      yield put(getAllSavedISCIndicatorsRequest());
    }
  } catch (error) {
    console.log(error);
  }
}

export function* handleDeleteISCIndicator(action) {
  let iscIndicatorIds = action.listOfIscIndicators;
  try {
    const response = yield call(requestDeleteISCIndicator, iscIndicatorIds);
    if (response.status === 200) {
      console.log("ISC Indicator Deleted Successfully");
      yield put(getAllSavedISCIndicatorsRequest());
    }
  } catch (error) {
    console.log(error);
  }
}
