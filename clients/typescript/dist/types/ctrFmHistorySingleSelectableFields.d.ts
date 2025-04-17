import { CtrFmHistoryFields } from "./ctrFmHistoryFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CtrFmHistorySingleSelectableFields {
    includeAllCtrFmHistoryFieldsValue: boolean;
    includeAllCtrFmHistoryFieldsValueSpecified: boolean;
    includeAllCtrFmHistoryFields: boolean | null;
    ctrFmHistoryFields: CtrFmHistoryFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
