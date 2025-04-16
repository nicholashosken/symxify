import { AcctTrackingTypeFields } from "./acctTrackingTypeFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface AcctTrackingTypeSelectableFields {
    includeAllAcctTrackingTypeFieldsValue: boolean;
    includeAllAcctTrackingTypeFieldsValueSpecified: boolean;
    includeAllAcctTrackingTypeFields: boolean | null;
    acctTrackingTypeFields: AcctTrackingTypeFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}