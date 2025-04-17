import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CdmCommonFields_2 } from "./cdmCommonFields_2";
import { VersionType } from "./versionType";
export interface UpdateCdmCommonByIdRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    cdmCommonFields: CdmCommonFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
