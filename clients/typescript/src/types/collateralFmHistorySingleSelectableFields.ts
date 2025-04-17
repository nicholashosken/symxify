import { CollateralFmHistoryFields } from "./collateralFmHistoryFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CollateralFmHistorySingleSelectableFields {
    includeAllCollateralFmHistoryFieldsValue: boolean;
    includeAllCollateralFmHistoryFieldsValueSpecified: boolean;
    includeAllCollateralFmHistoryFields: boolean | null;
    collateralFmHistoryFields: CollateralFmHistoryFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}