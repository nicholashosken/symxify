import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PreferenceFields_2 } from "./preferenceFields_2";
import { VersionType } from "./versionType";
export interface CreatePreferenceRequest {
    accountNumber: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    preferenceFields: PreferenceFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
