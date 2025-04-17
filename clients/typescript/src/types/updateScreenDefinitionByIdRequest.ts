import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ScreenDefinitionFields_2 } from "./screenDefinitionFields_2";
import { VersionType } from "./versionType";

export interface UpdateScreenDefinitionByIdRequest {
    screenDefinitionScreenSelection: number | null;
    screenDefinitionType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    screenDefinitionFields: ScreenDefinitionFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}