import { VersionType } from "./versionType";

export interface HouseholdFields {
    accountNumber: boolean | null;
    locator: boolean | null;
    recordChangeDate: boolean | null;
    type: boolean | null;
    version1: VersionType;
}