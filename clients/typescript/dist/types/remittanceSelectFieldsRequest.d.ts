import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { RemittanceSingleSelectableFields } from "./remittanceSingleSelectableFields";
import { VersionType } from "./versionType";
export interface RemittanceSelectFieldsRequest {
    remittanceGlobalSequenceDate: string | null;
    remittanceGlobalSequence: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: RemittanceSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
