import { Vendor } from "./vendor";
import { VersionType } from "./versionType";
export interface VendorSelectFieldsResponse {
    vendor: Vendor;
    version1: VersionType;
    messageId: string;
}
