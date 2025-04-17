import { WireFmHistoryFields } from "./wireFmHistoryFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface WireFmHistorySingleSelectableFields {
    includeAllWireFmHistoryFieldsValue: boolean;
    includeAllWireFmHistoryFieldsValueSpecified: boolean;
    includeAllWireFmHistoryFields: boolean | null;
    wireFmHistoryFields: WireFmHistoryFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}