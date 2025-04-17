import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ExtLoanFields_2 } from "./extLoanFields_2";
import { VersionType } from "./versionType";

export interface UpdateExtLoanByIdRequest {
    extLoanProcessor: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    extLoanFields: ExtLoanFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}