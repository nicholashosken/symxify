import { CollateralFields } from "./collateralFields";
import { CollateralCollHoldSelectableFields } from "./collateralCollHoldSelectableFields";
import { CollateralDocumentSelectableFields } from "./collateralDocumentSelectableFields";
import { CollateralFmHistorySelectableFields } from "./collateralFmHistorySelectableFields";
import { CollateralTrackingSelectableFields } from "./collateralTrackingSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CollateralSelectableFields {
    includeAllCollateralFieldsValue: boolean;
    includeAllCollateralFieldsValueSpecified: boolean;
    includeAllCollateralFields: boolean | null;
    collateralFields: CollateralFields;
    collateralCollHoldSelectableFields: CollateralCollHoldSelectableFields;
    collateralDocumentSelectableFields: CollateralDocumentSelectableFields;
    collateralFmHistorySelectableFields: CollateralFmHistorySelectableFields;
    collateralTrackingSelectableFields: CollateralTrackingSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}