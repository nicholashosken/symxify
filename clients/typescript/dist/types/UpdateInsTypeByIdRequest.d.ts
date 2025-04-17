import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { InsTypeFields_2 } from "./insTypeFields_2";
import { VersionType } from "./versionType";
export interface UpdateInsTypeByIdRequest {
    insTypeInsuranceType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    insTypeFields: InsTypeFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
