import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { RemittanceFields_2 } from "./remittanceFields_2";
import { VersionType } from "./versionType";

export interface CreateRemittanceRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    remittanceFields: RemittanceFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}