import { AcctLimitFields } from "./acctLimitFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface AcctLimitSelectableFields {
    includeAllAcctLimitFieldsValue: boolean;
    includeAllAcctLimitFieldsValueSpecified: boolean;
    includeAllAcctLimitFields: boolean | null;
    acctLimitFields: AcctLimitFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}