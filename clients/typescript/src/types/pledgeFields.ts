import { VersionType } from "./versionType";

export interface PledgeFields {
    accountNumber: boolean | null;
    amount: boolean | null;
    collateralCode: boolean | null;
    collateralDescription: boolean | null;
    collateralNumber: boolean | null;
    effectiveDate: boolean | null;
    expirationDate: boolean | null;
    id: boolean | null;
    locator: boolean | null;
    percent: boolean | null;
    priority: boolean | null;
    recordChangeDate: boolean | null;
    type: boolean | null;
    version1: VersionType;
}