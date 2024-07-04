
import {Backend, org_id, lrs_id} from "../../../../utils/backend";
console.log('org_id',org_id)

export function requestSaveISCIndicator(iscData) {
  var postObject = {
    iscJsonString: iscData
  }
  return Backend.post("/isc-indicator/SaveISCIndicator", postObject);
}

export function requestGetAllSavedISCIndicators() {
  return Backend.get("/isc-indicator/GetISCIndicatorsForUser");
}