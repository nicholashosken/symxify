import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { VendorSingleSelectableFields } from "./vendorSingleSelectableFields";
import { VersionType } from "./versionType";

export interface VendorSelectFieldsRequest {
    vendorNumber: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: VendorSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}