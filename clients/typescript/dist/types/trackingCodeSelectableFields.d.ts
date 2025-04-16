import { TrackingCodeFields } from "./trackingCodeFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface TrackingCodeSelectableFields {
    includeAllTrackingCodeFieldsValue: boolean;
    includeAllTrackingCodeFieldsValueSpecified: boolean;
    includeAllTrackingCodeFields: boolean | null;
    trackingCodeFields: TrackingCodeFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
