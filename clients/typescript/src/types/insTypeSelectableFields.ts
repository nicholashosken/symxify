import { InsTypeFields } from "./insTypeFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface InsTypeSelectableFields {
    includeAllInsTypeFieldsValue: boolean;
    includeAllInsTypeFieldsValueSpecified: boolean;
    includeAllInsTypeFields: boolean | null;
    insTypeFields: InsTypeFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}