import { DealerFields } from "./dealerFields";
import { VersionType } from "./versionType";
export interface DealerSingleSelectableFields {
    includeAllDealerFields: boolean | null;
    dealerFields: DealerFields;
    version1: VersionType;
}
