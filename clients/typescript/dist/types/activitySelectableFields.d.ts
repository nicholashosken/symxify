import { ActivityFields } from "./activityFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ActivitySelectableFields {
    includeAllActivityFieldsValue: boolean;
    includeAllActivityFieldsValueSpecified: boolean;
    includeAllActivityFields: boolean | null;
    activityFields: ActivityFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
