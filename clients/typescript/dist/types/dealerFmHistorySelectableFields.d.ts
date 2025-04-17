import { DealerFmHistoryFields } from "./dealerFmHistoryFields";
import { VersionType } from "./versionType";
export interface DealerFmHistorySelectableFields {
    includeAllDealerFmHistoryFields: boolean | null;
    dealerFmHistoryFields: DealerFmHistoryFields;
    version1: VersionType;
}
