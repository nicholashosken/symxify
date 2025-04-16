import { UserFields } from "./userFields";
import { ActivitySelectableFields } from "./activitySelectableFields";
import { UserTrackingSelectableFields } from "./userTrackingSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UserSelectableFields {
    includeAllUserFieldsValue: boolean;
    includeAllUserFieldsValueSpecified: boolean;
    includeAllUserFields: boolean | null;
    userFields: UserFields;
    activitySelectableFields: ActivitySelectableFields;
    userTrackingSelectableFields: UserTrackingSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}