import { VersionType } from "./versionType";

export interface AcsGlobal_2 {
    acsAccountManagerEnable: boolean | null;
    acsTellerTranEnable: boolean | null;
    creditReportExpireDays: number | null;
    securedLoanTypeList: string;
    unsecuredLoanTypeList: string;
    version1: VersionType;
}