import { CollateralDocumentFields } from "./collateralDocumentFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CollateralDocumentSingleSelectableFields {
    includeAllCollateralDocumentFieldsValue: boolean;
    includeAllCollateralDocumentFieldsValueSpecified: boolean;
    includeAllCollateralDocumentFields: boolean | null;
    collateralDocumentFields: CollateralDocumentFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}