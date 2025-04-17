import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { DivIndexLocalFields_2 } from "./divIndexLocalFields_2";
import { VersionType } from "./versionType";
export interface UpdateDivIndexLocalByIdRequest {
    divIndexLocalDividendIndexTable: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    divIndexLocalFields: DivIndexLocalFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
