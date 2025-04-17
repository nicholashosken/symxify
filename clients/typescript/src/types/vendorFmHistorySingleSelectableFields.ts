import { VendorFmHistoryFields } from "./vendorFmHistoryFields";
import { VersionType } from "./versionType";

export interface VendorFmHistorySingleSelectableFields {
    includeAllVendorFmHistoryFields: boolean | null;
    vendorFmHistoryFields: VendorFmHistoryFields;
    version1: VersionType;
}