import { DealerTrackingFields } from "./dealerTrackingFields";
import { VersionType } from "./versionType";
export interface DealerTrackingSelectableFields {
    includeAllDealerTrackingFields: boolean | null;
    dealerTrackingFields: DealerTrackingFields;
    version1: VersionType;
}
