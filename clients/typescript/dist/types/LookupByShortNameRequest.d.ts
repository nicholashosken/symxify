import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { VersionType } from "./versionType";
export interface LookupByShortNameRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    shortName: string;
    version1: VersionType;
    messageId: string;
}
