import { DealerTrackingFields } from "./dealerTrackingFields";
import { VersionType } from "./versionType";

export interface DealerTrackingSingleSelectableFields {
    includeAllDealerTrackingFields: boolean | null;
    dealerTrackingFields: DealerTrackingFields;
    version1: VersionType;
}