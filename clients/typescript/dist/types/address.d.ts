import { VersionType } from "./versionType";
export interface Address {
    houseNumber: string;
    directional: string;
    streetName: string;
    streetType: string;
    city: string;
    state: string;
    zipCode: string;
    version1: VersionType;
}
