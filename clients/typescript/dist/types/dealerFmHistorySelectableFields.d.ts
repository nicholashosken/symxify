import { DealerFmHistoryFields } from "./dealerFmHistoryFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface DealerFmHistorySelectableFields {
    includeAllDealerFmHistoryFieldsValue: boolean;
    includeAllDealerFmHistoryFieldsValueSpecified: boolean;
    includeAllDealerFmHistoryFields: boolean | null;
    dealerFmHistoryFields: DealerFmHistoryFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
