import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { NameFieldNameFields_2 } from "./nameFieldNameFields_2";
import { VersionType } from "./versionType";
export interface UpdateNameFieldNameByIdRequest {
    nameFieldNameField: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    nameFieldNameFields: NameFieldNameFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
