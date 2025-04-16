import { UserTrackingTypeFields_2 } from "./userTrackingTypeFields_2";

export interface UserTrackingTypeUpdateRequest {
    userTrackingTypeRecordSelectionValue: number;
    userTrackingTypeRecordSelectionValueSpecified: boolean;
    userTrackingTypeRecordSelection: number | null;
    userTrackingTypeTrackingTypeValue: number;
    userTrackingTypeTrackingTypeValueSpecified: boolean;
    userTrackingTypeTrackingType: number | null;
    userTrackingTypeFields: UserTrackingTypeFields_2;
}