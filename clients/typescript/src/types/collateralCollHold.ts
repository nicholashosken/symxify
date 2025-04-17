import { VersionType } from "./versionType";

export interface CollateralCollHold {
    accountNumber: string;
    amount: number | null;
    effectiveDate: string | null;
    expirationDate: string | null;
    id: string;
    idType: number | null;
    locator: number | null;
    recordChangeDate: string | null;
    version1: VersionType;
}