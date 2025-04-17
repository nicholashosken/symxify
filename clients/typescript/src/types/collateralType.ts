import { BitMap } from "./bitMap";
import { CollateralTypeUserChar } from "./collateralTypeUserChar";
import { VersionType } from "./versionType";

export interface CollateralType {
    collateralStatus: number | null;
    collateralTypeProperty: number | null;
    description: string;
    requiredDocTypes: BitMap;
    userChar: CollateralTypeUserChar[];
    version1: VersionType;
}