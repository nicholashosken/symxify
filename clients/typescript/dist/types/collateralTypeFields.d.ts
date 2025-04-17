import { VersionType } from "./versionType";
export interface CollateralTypeFields {
    collateralStatus: boolean | null;
    collateralType: boolean | null;
    description: boolean | null;
    requiredDocTypes: boolean | null;
    userChar: number[];
    version1: VersionType;
}
