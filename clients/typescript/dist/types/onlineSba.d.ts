import { VersionType } from "./versionType";
export interface OnlineSba {
    acctToAcctTransferGlCode: number | null;
    branchAddressFormat: number | null;
    itcHoldTypeDefault: number | null;
    transactionLimit: number | null;
    trnsonOwnInstitution: number | null;
    version1: VersionType;
}
