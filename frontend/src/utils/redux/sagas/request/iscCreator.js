
import {Backend, org_id, lrs_id} from "../../../../utils/backend";
console.log('org_id',org_id)

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
  console.log("requestDeleteISCIndicator", iscDTOList);
  return Backend.post("/isc-indicator/DeleteISCIndicator", iscDTOList);
}