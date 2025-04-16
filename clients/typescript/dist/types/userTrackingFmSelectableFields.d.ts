import { UserTrackingFmFields } from "./userTrackingFmFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UserTrackingFmSelectableFields {
    includeAllUserTrackingFmFieldsValue: boolean;
    includeAllUserTrackingFmFieldsValueSpecified: boolean;
    includeAllUserTrackingFmFields: boolean | null;
    userTrackingFmFields: UserTrackingFmFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
