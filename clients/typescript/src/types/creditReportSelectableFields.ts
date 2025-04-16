import { CreditReportFields } from "./creditReportFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CreditReportSelectableFields {
    includeAllCreditReportFieldsValue: boolean;
    includeAllCreditReportFieldsValueSpecified: boolean;
    includeAllCreditReportFields: boolean | null;
    creditReportFields: CreditReportFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}