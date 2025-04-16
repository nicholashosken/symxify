import { PartStatementInstitutionAddressLine_2 } from "./partStatementInstitutionAddressLine_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface PartStatement_2 {
    formatValue: number;
    formatValueSpecified: boolean;
    format: number | null;
    inquiryLine: string;
    institutionAddressLine: PartStatementInstitutionAddressLine_2[];
    institutionAddressLineSpecified: boolean;
    numberoftimesGeneratedValue: number;
    numberoftimesGeneratedValueSpecified: boolean;
    numberoftimesGenerated: number | null;
    statementCutoffDateValue: string | null;
    statementCutoffDateValueSpecified: boolean;
    statementCutoffDate: string | null;
    statementGroupList: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}