import { VersionType } from "./versionType";

export interface CtrBranchFields {
    address: boolean | null;
    cashinLocation: boolean | null;
    cashoutLocation: boolean | null;
    city: boolean | null;
    countryCode: boolean | null;
    ein: boolean | null;
    id: boolean | null;
    lastFmDate: boolean | null;
    locator: boolean | null;
    name: boolean | null;
    recordChangeDate: boolean | null;
    state: boolean | null;
    type: boolean | null;
    zipCode: boolean | null;
    version1: VersionType;
}