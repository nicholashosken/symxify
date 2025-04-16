import { AcctTrackingTypeFields_2 } from "./acctTrackingTypeFields_2";

export interface AcctTrackingTypeUpdateRequest {
    acctTrackingTypeRecordSelectionValue: number;
    acctTrackingTypeRecordSelectionValueSpecified: boolean;
    acctTrackingTypeRecordSelection: number | null;
    acctTrackingTypeTrackingTypeValue: number;
    acctTrackingTypeTrackingTypeValueSpecified: boolean;
    acctTrackingTypeTrackingType: number | null;
    acctTrackingTypeFields: AcctTrackingTypeFields_2;
}