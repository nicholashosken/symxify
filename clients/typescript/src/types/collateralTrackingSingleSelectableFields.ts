import { CollateralTrackingFields } from "./collateralTrackingFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CollateralTrackingSingleSelectableFields {
    includeAllCollateralTrackingFieldsValue: boolean;
    includeAllCollateralTrackingFieldsValueSpecified: boolean;
    includeAllCollateralTrackingFields: boolean | null;
    collateralTrackingFields: CollateralTrackingFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}