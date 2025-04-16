import { PartStatementInstitutionAddressLine } from "./partStatementInstitutionAddressLine";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface PartStatement {
    formatValue: number;
    formatValueSpecified: boolean;
    format: number | null;
    inquiryLine: string;
    institutionAddressLine: PartStatementInstitutionAddressLine[];
    institutionAddressLineSpecified: boolean;
    numberoftimesGeneratedValue: number;
    numberoftimesGeneratedValueSpecified: boolean;
    numberoftimesGenerated: number | null;
    statementCutoffDateValue: string;
    statementCutoffDateValueSpecified: boolean;
    statementCutoffDate: string | null;
    statementGroupList: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}