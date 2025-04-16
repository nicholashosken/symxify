import { GlTrackingTypeFields_2 } from "./glTrackingTypeFields_2";

export interface GlTrackingTypeUpdateRequest {
    glTrackingTypeRecordSelectionValue: number;
    glTrackingTypeRecordSelectionValueSpecified: boolean;
    glTrackingTypeRecordSelection: number | null;
    glTrackingTypeTrackingTypeValue: number;
    glTrackingTypeTrackingTypeValueSpecified: boolean;
    glTrackingTypeTrackingType: number | null;
    glTrackingTypeFields: GlTrackingTypeFields_2;
}