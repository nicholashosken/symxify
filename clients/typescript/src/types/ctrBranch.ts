import { VersionType } from "./versionType";

export interface CtrBranch {
    address: string;
    cashinLocation: number | null;
    cashoutLocation: number | null;
    city: string;
    countryCode: string;
    ein: string;
    id: number | null;
    lastFmDate: string | null;
    locator: number | null;
    name: string;
    recordChangeDate: string | null;
    state: string;
    type: number | null;
    zipCode: string;
    version1: VersionType;
}