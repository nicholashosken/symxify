import { VersionType } from "./versionType";
export interface AcsGlobalFields {
    acsAccountManagerEnable: boolean | null;
    acsTellerTranEnable: boolean | null;
    creditReportExpireDays: boolean | null;
    securedLoanTypeList: boolean | null;
    unsecuredLoanTypeList: boolean | null;
    version1: VersionType;
}
