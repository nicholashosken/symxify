import { TrackingFields } from "./trackingFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface TrackingSelectableFields {
    includeAllTrackingFieldsValue: boolean;
    includeAllTrackingFieldsValueSpecified: boolean;
    includeAllTrackingFields: boolean | null;
    trackingFields: TrackingFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}