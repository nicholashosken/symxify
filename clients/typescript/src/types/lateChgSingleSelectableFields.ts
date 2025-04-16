import { LateChgFields } from "./lateChgFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LateChgSingleSelectableFields {
    includeAllLateChgFieldsValue: boolean;
    includeAllLateChgFieldsValueSpecified: boolean;
    includeAllLateChgFields: boolean | null;
    lateChgFields: LateChgFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}