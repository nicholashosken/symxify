import { TrackingFields } from "./trackingFields";
import { VersionType } from "./versionType";
export interface TrackingSingleSelectableFields {
    includeAllTrackingFields: boolean | null;
    trackingFields: TrackingFields;
    version1: VersionType;
}
