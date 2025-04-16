import { PartTrackingTypeFields } from "./partTrackingTypeFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface PartTrackingTypeSelectableFields {
    includeAllPartTrackingTypeFieldsValue: boolean;
    includeAllPartTrackingTypeFieldsValueSpecified: boolean;
    includeAllPartTrackingTypeFields: boolean | null;
    partTrackingTypeFields: PartTrackingTypeFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
