import { PartStatementInstitutionAddressLine } from "./partStatementInstitutionAddressLine";
import { VersionType } from "./versionType";
export interface PartStatement {
    format: number | null;
    inquiryLine: string;
    institutionAddressLine: PartStatementInstitutionAddressLine[];
    numberoftimesGenerated: number | null;
    statementCutoffDate: string | null;
    statementGroupList: string;
    version1: VersionType;
}
