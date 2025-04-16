import { ShareTrackingFields } from "./shareTrackingFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ShareTrackingSelectableFields {
    includeAllShareTrackingFieldsValue: boolean;
    includeAllShareTrackingFieldsValueSpecified: boolean;
    includeAllShareTrackingFields: boolean | null;
    shareTrackingFields: ShareTrackingFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
