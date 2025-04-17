import { PartTrackingTypeFields_2 } from "./partTrackingTypeFields_2";

export interface PartTrackingTypeUpdateRequest {
    partTrackingTypeRecordSelection: number | null;
    partTrackingTypeTrackingType: number | null;
    partTrackingTypeFields: PartTrackingTypeFields_2;
}