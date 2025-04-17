import { VersionType } from "./versionType";
export interface CtrForeign {
    cashin: number | null;
    cashout: number | null;
    countryCode: string;
    lastFmDate: string | null;
    locator: number | null;
    recordChangeDate: string | null;
    version1: VersionType;
}
