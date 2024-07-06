
import {Backend, org_id, lrs_id} from "../../../../utils/backend";


export function requestSaveISCIndicator(iscData) {
  var postObject = {
    iscJsonString: JSON.stringify(iscData)
  }
  return Backend.post("/isc-indicator/SaveISCIndicator", postObject);
}

export function requestGetAllSavedISCIndicators() {
  return Backend.get("/isc-indicator/GetISCIndicatorsForUser");
}

export function requestEditISCIndicator(iscIndicator) {
  console.log("requestEditISCIndicator", iscIndicator);
  var postObject = {
    id: iscIndicator.id,
    iscJsonString: JSON.stringify(iscIndicator)
  }

  return Backend.put("/isc-indicator/UpdateISCIndicator", postObject);
}

export function requestDeleteISCIndicator(iscIndicatorIds) {
  let iscDTOList = iscIndicatorIds.map((id) => {
    return { id: id}
  });
  return Backend.post("/isc-indicator/DeleteISCIndicator", iscDTOList);
}

export function requestUploadBulkISCIndicators(iscIndicators) {
  iscIndicators.map((item) => {item.id = null;});
  iscIndicators = iscIndicators.map((item) => {
    return JSON.stringify(item);
  });
  iscIndicators = iscIndicators.map((item) => {
    return {iscJsonString: item};
  });
  return Backend.post("/isc-indicator/ImportBulkISCIndicators", iscIndicators);
}