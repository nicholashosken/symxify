import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CtrBranchFields_2 } from "./ctrBranchFields_2";
import { VersionType } from "./versionType";
export interface UpdateCtrBranchByIdRequest {
    ctrNumber: string;
    ctrBranchLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    ctrBranchFields: CtrBranchFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
