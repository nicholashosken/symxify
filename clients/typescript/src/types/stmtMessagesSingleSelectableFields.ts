import { StmtMessagesFields } from "./stmtMessagesFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface StmtMessagesSingleSelectableFields {
    includeAllStmtMessagesFieldsValue: boolean;
    includeAllStmtMessagesFieldsValueSpecified: boolean;
    includeAllStmtMessagesFields: boolean | null;
    stmtMessagesFields: StmtMessagesFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}