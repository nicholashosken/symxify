import { AcctTrackingType } from "./acctTrackingType";

export interface AcctTrackingTypeList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    acctTrackingType: AcctTrackingType[];
    acctTrackingTypeSpecified: boolean;
}