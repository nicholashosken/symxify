import { PartStatementFields } from "./partStatementFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface PartStatementSingleSelectableFields {
    includeAllPartStatementFieldsValue: boolean;
    includeAllPartStatementFieldsValueSpecified: boolean;
    includeAllPartStatementFields: boolean | null;
    partStatementFields: PartStatementFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}