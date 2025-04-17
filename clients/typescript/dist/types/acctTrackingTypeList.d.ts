import { AcctTrackingType } from "./acctTrackingType";
export interface AcctTrackingTypeList {
    hasReachedMaximumListSize: boolean | null;
    acctTrackingType: AcctTrackingType[];
}
