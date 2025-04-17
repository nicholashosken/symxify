import { TrackingCodeFields } from "./trackingCodeFields";
import { VersionType } from "./versionType";

export interface TrackingCodeSingleSelectableFields {
    includeAllTrackingCodeFields: boolean | null;
    trackingCodeFields: TrackingCodeFields;
    version1: VersionType;
}