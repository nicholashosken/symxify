import { UserTrackingTypeFields } from "./userTrackingTypeFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UserTrackingTypeSelectableFields {
    includeAllUserTrackingTypeFieldsValue: boolean;
    includeAllUserTrackingTypeFieldsValueSpecified: boolean;
    includeAllUserTrackingTypeFields: boolean | null;
    userTrackingTypeFields: UserTrackingTypeFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}