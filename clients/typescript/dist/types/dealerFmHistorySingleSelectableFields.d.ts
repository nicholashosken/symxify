import { DealerFmHistoryFields } from "./dealerFmHistoryFields";
import { VersionType } from "./versionType";
export interface DealerFmHistorySingleSelectableFields {
    includeAllDealerFmHistoryFields: boolean | null;
    dealerFmHistoryFields: DealerFmHistoryFields;
    version1: VersionType;
}
