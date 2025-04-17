import { BitMap } from "./bitMap";
import { CollateralTypeUserChar_2 } from "./collateralTypeUserChar_2";
import { VersionType } from "./versionType";
export interface CollateralType_2 {
    collateralStatus: number | null;
    collateralTypeProperty: number | null;
    description: string;
    requiredDocTypes: BitMap;
    userChar: CollateralTypeUserChar_2[];
    version1: VersionType;
}
