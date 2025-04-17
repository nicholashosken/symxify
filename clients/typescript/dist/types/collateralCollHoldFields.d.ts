import { VersionType } from "./versionType";
export interface CollateralCollHoldFields {
    accountNumber: boolean | null;
    amount: boolean | null;
    effectiveDate: boolean | null;
    expirationDate: boolean | null;
    id: boolean | null;
    idType: boolean | null;
    locator: boolean | null;
    recordChangeDate: boolean | null;
    version1: VersionType;
}
