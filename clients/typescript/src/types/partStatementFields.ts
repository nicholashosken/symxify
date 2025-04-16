import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface PartStatementFields {
    formatValue: boolean;
    formatValueSpecified: boolean;
    format: boolean | null;
    inquiryLineValue: boolean;
    inquiryLineValueSpecified: boolean;
    inquiryLine: boolean | null;
    institutionAddressLine: number[];
    institutionAddressLineSpecified: boolean;
    numberoftimesGeneratedValue: boolean;
    numberoftimesGeneratedValueSpecified: boolean;
    numberoftimesGenerated: boolean | null;
    statementCutoffDateValue: boolean;
    statementCutoffDateValueSpecified: boolean;
    statementCutoffDate: boolean | null;
    statementGroupListValue: boolean;
    statementGroupListValueSpecified: boolean;
    statementGroupList: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}