import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { MbrAddressSelectableFields } from "./mbrAddressSelectableFields";
import { MbrAddressChildrenFilter } from "./mbrAddressChildrenFilter";
import { VersionType } from "./versionType";
export interface MbrAddressSelectFieldsFilterChildrenRequest {
    mbrAddressMbrAddrNumber: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: MbrAddressSelectableFields;
    childrenSearchFilter: MbrAddressChildrenFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
