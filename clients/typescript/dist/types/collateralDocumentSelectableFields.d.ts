import { CollateralDocumentFields } from "./collateralDocumentFields";
import { CollateralDocumentTrackingSelectableFields } from "./collateralDocumentTrackingSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CollateralDocumentSelectableFields {
    includeAllCollateralDocumentFieldsValue: boolean;
    includeAllCollateralDocumentFieldsValueSpecified: boolean;
    includeAllCollateralDocumentFields: boolean | null;
    collateralDocumentFields: CollateralDocumentFields;
    collateralDocumentTrackingSelectableFields: CollateralDocumentTrackingSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
