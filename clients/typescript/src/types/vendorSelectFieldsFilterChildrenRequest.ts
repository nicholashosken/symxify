import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { VendorSelectableFields } from "./vendorSelectableFields";
import { VendorChildrenFilter } from "./vendorChildrenFilter";
import { VersionType } from "./versionType";

export interface VendorSelectFieldsFilterChildrenRequest {
    vendorNumber: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: VendorSelectableFields;
    childrenSearchFilter: VendorChildrenFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}