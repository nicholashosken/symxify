import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { MbrAddressSingleSelectableFields } from "./mbrAddressSingleSelectableFields";
import { VersionType } from "./versionType";
export interface MbrAddressSelectFieldsRequest {
    mbrAddressMbrAddrNumber: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: MbrAddressSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
