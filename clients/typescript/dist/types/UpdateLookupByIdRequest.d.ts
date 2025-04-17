import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LookupFields_2 } from "./lookupFields_2";
import { VersionType } from "./versionType";
export interface UpdateLookupByIdRequest {
    accountNumber: string;
    lookupLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    lookupFields: LookupFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
