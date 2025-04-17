import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { EscrowTypeFields_2 } from "./escrowTypeFields_2";
import { VersionType } from "./versionType";

export interface UpdateEscrowTypeByIdRequest {
    escrowTypeEscrowType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    escrowTypeFields: EscrowTypeFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}