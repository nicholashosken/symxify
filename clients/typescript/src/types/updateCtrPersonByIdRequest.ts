import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CtrPersonFields_2 } from "./ctrPersonFields_2";
import { VersionType } from "./versionType";

export interface UpdateCtrPersonByIdRequest {
    ctrNumber: string;
    ctrPersonLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    ctrPersonFields: CtrPersonFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}