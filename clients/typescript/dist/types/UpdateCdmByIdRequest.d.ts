import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CdmFields_2 } from "./cdmFields_2";
import { VersionType } from "./versionType";
export interface UpdateCdmByIdRequest {
    cdmCdm: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    cdmFields: CdmFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
