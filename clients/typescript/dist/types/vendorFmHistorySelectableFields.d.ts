import { VendorFmHistoryFields } from "./vendorFmHistoryFields";
import { VersionType } from "./versionType";
export interface VendorFmHistorySelectableFields {
    includeAllVendorFmHistoryFields: boolean | null;
    vendorFmHistoryFields: VendorFmHistoryFields;
    version1: VersionType;
}
