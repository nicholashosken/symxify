import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { VendorFields_2 } from "./vendorFields_2";
import { VersionType } from "./versionType";
export interface UpdateVendorByIdRequest {
    vendorNumber: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    vendorFields: VendorFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
