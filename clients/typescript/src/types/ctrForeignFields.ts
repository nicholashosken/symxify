import { VersionType } from "./versionType";

export interface CtrForeignFields {
    cashin: boolean | null;
    cashout: boolean | null;
    countryCode: boolean | null;
    lastFmDate: boolean | null;
    locator: boolean | null;
    recordChangeDate: boolean | null;
    version1: VersionType;
}