import { StatementFields } from "./statementFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface StatementSelectableFields {
    includeAllStatementFieldsValue: boolean;
    includeAllStatementFieldsValueSpecified: boolean;
    includeAllStatementFields: boolean | null;
    statementFields: StatementFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}