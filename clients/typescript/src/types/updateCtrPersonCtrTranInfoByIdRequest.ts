import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CtrPersonCtrTranInfoFields_2 } from "./ctrPersonCtrTranInfoFields_2";
import { VersionType } from "./versionType";

export interface UpdateCtrPersonCtrTranInfoByIdRequest {
    ctrNumber: string;
    ctrPersonLocator: number | null;
    ctrPersonCtrTranInfoLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    ctrPersonCtrTranInfoFields: CtrPersonCtrTranInfoFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}