import { ShareTrackingFields } from "./shareTrackingFields";
import { VersionType } from "./versionType";

export interface ShareTrackingSelectableFields {
    includeAllShareTrackingFields: boolean | null;
    shareTrackingFields: ShareTrackingFields;
    version1: VersionType;
}