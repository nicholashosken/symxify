import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { InstitutionFields_2 } from "./institutionFields_2";
import { VersionType } from "./versionType";
export interface UpdateInstitutionByIdRequest {
    institutionBranch: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    institutionFields: InstitutionFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
