import { PartTrackingTypeFields_2 } from "./partTrackingTypeFields_2";
export interface PartTrackingTypeUpdateRequest {
    partTrackingTypeRecordSelectionValue: number;
    partTrackingTypeRecordSelectionValueSpecified: boolean;
    partTrackingTypeRecordSelection: number | null;
    partTrackingTypeTrackingTypeValue: number;
    partTrackingTypeTrackingTypeValueSpecified: boolean;
    partTrackingTypeTrackingType: number | null;
    partTrackingTypeFields: PartTrackingTypeFields_2;
}
