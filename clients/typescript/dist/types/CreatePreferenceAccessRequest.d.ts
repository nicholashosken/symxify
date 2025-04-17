import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PreferenceAccessFields_2 } from "./preferenceAccessFields_2";
import { VersionType } from "./versionType";
export interface CreatePreferenceAccessRequest {
    accountNumber: string;
    preferenceLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    preferenceAccessFields: PreferenceAccessFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
