import { VendorFields } from "./vendorFields";
import { VersionType } from "./versionType";
export interface VendorSingleSelectableFields {
    includeAllVendorFields: boolean | null;
    vendorFields: VendorFields;
    version1: VersionType;
}
