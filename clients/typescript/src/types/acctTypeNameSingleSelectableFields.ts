import { AcctTypeNameFields } from "./acctTypeNameFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface AcctTypeNameSingleSelectableFields {
    includeAllAcctTypeNameFieldsValue: boolean;
    includeAllAcctTypeNameFieldsValueSpecified: boolean;
    includeAllAcctTypeNameFields: boolean | null;
    acctTypeNameFields: AcctTypeNameFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}