import { VersionType } from "./versionType";
export interface AcsGlobal {
    acsAccountManagerEnable: boolean | null;
    acsTellerTranEnable: boolean | null;
    creditReportExpireDays: number | null;
    securedLoanTypeList: string;
    unsecuredLoanTypeList: string;
    version1: VersionType;
}
