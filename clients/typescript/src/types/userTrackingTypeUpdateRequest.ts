import { UserTrackingTypeFields_2 } from "./userTrackingTypeFields_2";

export interface UserTrackingTypeUpdateRequest {
    userTrackingTypeRecordSelection: number | null;
    userTrackingTypeTrackingType: number | null;
    userTrackingTypeFields: UserTrackingTypeFields_2;
}