import { UserTrackingFmFields } from "./userTrackingFmFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UserTrackingFmSingleSelectableFields {
    includeAllUserTrackingFmFieldsValue: boolean;
    includeAllUserTrackingFmFieldsValueSpecified: boolean;
    includeAllUserTrackingFmFields: boolean | null;
    userTrackingFmFields: UserTrackingFmFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
