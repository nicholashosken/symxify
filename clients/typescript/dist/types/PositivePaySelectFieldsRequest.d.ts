import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PositivePaySingleSelectableFields } from "./positivePaySingleSelectableFields";
import { VersionType } from "./versionType";
export interface PositivePaySelectFieldsRequest {
    positivePayVendorIndex: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: PositivePaySingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
