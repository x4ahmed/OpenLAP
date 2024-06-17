
import {Backend, org_id, lrs_id} from "../../../../utils/backend";
console.log('org_id',org_id)

export function requestSaveISCIndicator(iscData) {
  console.log('requestSaveISCIndicator'); 
  return Backend.post("/isc-indicator/SaveISCIndicator", iscData);
}