import { UserTrackingFields } from "./userTrackingFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UserTrackingSingleSelectableFields {
    includeAllUserTrackingFieldsValue: boolean;
    includeAllUserTrackingFieldsValueSpecified: boolean;
    includeAllUserTrackingFields: boolean | null;
    userTrackingFields: UserTrackingFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}