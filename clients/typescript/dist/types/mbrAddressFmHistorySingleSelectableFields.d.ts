import { MbrAddressFmHistoryFields } from "./mbrAddressFmHistoryFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface MbrAddressFmHistorySingleSelectableFields {
    includeAllMbrAddressFmHistoryFieldsValue: boolean;
    includeAllMbrAddressFmHistoryFieldsValueSpecified: boolean;
    includeAllMbrAddressFmHistoryFields: boolean | null;
    mbrAddressFmHistoryFields: MbrAddressFmHistoryFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
