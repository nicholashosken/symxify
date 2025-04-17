import { CollateralFields } from "./collateralFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CollateralSingleSelectableFields {
    includeAllCollateralFieldsValue: boolean;
    includeAllCollateralFieldsValueSpecified: boolean;
    includeAllCollateralFields: boolean | null;
    collateralFields: CollateralFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
