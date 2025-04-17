import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PreferenceDefaultFields_2 } from "./preferenceDefaultFields_2";
import { VersionType } from "./versionType";
export interface UpdatePreferenceDefaultByIdRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    preferenceDefaultFields: PreferenceDefaultFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
