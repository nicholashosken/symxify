import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { EscrowTypeSingleSelectableFields } from "./escrowTypeSingleSelectableFields";
import { VersionType } from "./versionType";
export interface EscrowTypeSelectFieldsRequest {
    escrowTypeEscrowType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: EscrowTypeSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
