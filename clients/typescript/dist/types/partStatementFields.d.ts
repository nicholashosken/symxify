import { VersionType } from "./versionType";
export interface PartStatementFields {
    format: boolean | null;
    inquiryLine: boolean | null;
    institutionAddressLine: number[];
    numberoftimesGenerated: boolean | null;
    statementCutoffDate: boolean | null;
    statementGroupList: boolean | null;
    version1: VersionType;
}
