import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CollateralTypeFields {
    collateralStatusValue: boolean;
    collateralStatusValueSpecified: boolean;
    collateralStatus: boolean | null;
    collateralTypeValue: boolean;
    collateralTypeValueSpecified: boolean;
    collateralType: boolean | null;
    descriptionValue: boolean;
    descriptionValueSpecified: boolean;
    description: boolean | null;
    requiredDocTypesValue: boolean;
    requiredDocTypesValueSpecified: boolean;
    requiredDocTypes: boolean | null;
    userChar: number[];
    userCharSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}