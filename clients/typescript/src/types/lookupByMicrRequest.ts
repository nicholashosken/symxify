import { DeviceInformation } from "./deviceInformation";
import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { VersionType } from "./versionType";

export interface LookupByMicrRequest {
    micr: string;
    draft: string;
    deviceInformation: DeviceInformation;
    credentials: AdminCredentialsChoice;
    version1: VersionType;
    messageId: string;
}