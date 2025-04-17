import { VersionType } from "./versionType";
export interface Household {
    accountNumber: string;
    locator: number | null;
    recordChangeDate: string | null;
    type: number | null;
    version1: VersionType;
}
