import { PartStatementInstitutionAddressLine_2 } from "./partStatementInstitutionAddressLine_2";
import { VersionType } from "./versionType";

export interface PartStatement_2 {
    format: number | null;
    inquiryLine: string;
    institutionAddressLine: PartStatementInstitutionAddressLine_2[];
    numberoftimesGenerated: number | null;
    statementCutoffDate: string | null;
    statementGroupList: string;
    version1: VersionType;
}