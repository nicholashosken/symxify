import { VersionType } from "./versionType";

export interface PreferenceAccessFields {
    accessType: boolean | null;
    accountNumber: boolean | null;
    enableDeposit: boolean | null;
    enableFm: boolean | null;
    enableInquiry: boolean | null;
    enableWithdrawal: boolean | null;
    extLoanAccount: boolean | null;
    id: boolean | null;
    idType: boolean | null;
    locator: boolean | null;
    qualifier: boolean | null;
    recordChangeDate: boolean | null;
    version1: VersionType;
}