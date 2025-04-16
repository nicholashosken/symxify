import { BitMap } from "./bitMap";
import { CollateralTypeUserChar_2 } from "./collateralTypeUserChar_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CollateralType_2 {
    collateralStatusValue: number;
    collateralStatusValueSpecified: boolean;
    collateralStatus: number | null;
    collateralTypePropertyValue: number;
    collateralTypePropertyValueSpecified: boolean;
    collateralTypeProperty: number | null;
    description: string;
    requiredDocTypes: BitMap;
    userChar: CollateralTypeUserChar_2[];
    userCharSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}