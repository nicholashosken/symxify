import { CollateralTypeFields } from "./collateralTypeFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CollateralTypeSingleSelectableFields {
    includeAllCollateralTypeFieldsValue: boolean;
    includeAllCollateralTypeFieldsValueSpecified: boolean;
    includeAllCollateralTypeFields: boolean | null;
    collateralTypeFields: CollateralTypeFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
