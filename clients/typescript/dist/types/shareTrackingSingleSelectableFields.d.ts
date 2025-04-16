import { ShareTrackingFields } from "./shareTrackingFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ShareTrackingSingleSelectableFields {
    includeAllShareTrackingFieldsValue: boolean;
    includeAllShareTrackingFieldsValueSpecified: boolean;
    includeAllShareTrackingFields: boolean | null;
    shareTrackingFields: ShareTrackingFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
