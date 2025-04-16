import { InsTableFields } from "./insTableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface InsTableSingleSelectableFields {
    includeAllInsTableFieldsValue: boolean;
    includeAllInsTableFieldsValueSpecified: boolean;
    includeAllInsTableFields: boolean | null;
    insTableFields: InsTableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}