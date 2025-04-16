import { BitMap } from "./bitMap";
import { CollateralTypeUserChar } from "./collateralTypeUserChar";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CollateralType {
    collateralStatusValue: number;
    collateralStatusValueSpecified: boolean;
    collateralStatus: number | null;
    collateralTypePropertyValue: number;
    collateralTypePropertyValueSpecified: boolean;
    collateralTypeProperty: number | null;
    description: string;
    requiredDocTypes: BitMap;
    userChar: CollateralTypeUserChar[];
    userCharSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}