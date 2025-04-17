import { VersionType } from "./versionType";
export interface PositivePayFields {
    description: boolean | null;
    type: boolean | null;
    vendorId: boolean | null;
    vendorIndex: boolean | null;
    vendorToken: boolean | null;
    vendorUrl: boolean | null;
    version1: VersionType;
}
