import { VersionType } from "./versionType";

export interface PreferenceAccess_2 {
    accessType: number | null;
    accountNumber: string;
    enableDeposit: number | null;
    enableFm: number | null;
    enableInquiry: number | null;
    enableWithdrawal: number | null;
    extLoanAccount: string;
    id: string;
    idType: number | null;
    locator: number | null;
    qualifier: string;
    recordChangeDate: string | null;
    version1: VersionType;
}