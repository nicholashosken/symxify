import { UserFields } from "./userFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UserSingleSelectableFields {
    includeAllUserFieldsValue: boolean;
    includeAllUserFieldsValueSpecified: boolean;
    includeAllUserFields: boolean | null;
    userFields: UserFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}