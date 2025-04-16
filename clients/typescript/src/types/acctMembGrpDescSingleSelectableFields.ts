import { AcctMembGrpDescFields } from "./acctMembGrpDescFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface AcctMembGrpDescSingleSelectableFields {
    includeAllAcctMembGrpDescFieldsValue: boolean;
    includeAllAcctMembGrpDescFieldsValueSpecified: boolean;
    includeAllAcctMembGrpDescFields: boolean | null;
    acctMembGrpDescFields: AcctMembGrpDescFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}