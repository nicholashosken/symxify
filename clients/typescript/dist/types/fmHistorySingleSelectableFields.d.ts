import { FmHistoryFields } from "./fmHistoryFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface FmHistorySingleSelectableFields {
    includeAllFmHistoryFieldsValue: boolean;
    includeAllFmHistoryFieldsValueSpecified: boolean;
    includeAllFmHistoryFields: boolean | null;
    fmHistoryFields: FmHistoryFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
