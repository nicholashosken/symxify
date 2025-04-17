import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LookupTypeNameFields_2 } from "./lookupTypeNameFields_2";
import { VersionType } from "./versionType";
export interface UpdateLookupTypeNameByIdRequest {
    lookupTypeNameLookupType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    lookupTypeNameFields: LookupTypeNameFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
