import { CollateralDocumentTrackingFields } from "./collateralDocumentTrackingFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CollateralDocumentTrackingSelectableFields {
    includeAllCollateralDocumentTrackingFieldsValue: boolean;
    includeAllCollateralDocumentTrackingFieldsValueSpecified: boolean;
    includeAllCollateralDocumentTrackingFields: boolean | null;
    collateralDocumentTrackingFields: CollateralDocumentTrackingFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
