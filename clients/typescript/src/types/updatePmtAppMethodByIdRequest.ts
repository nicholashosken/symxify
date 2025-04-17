import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PmtAppMethodFields_2 } from "./pmtAppMethodFields_2";
import { VersionType } from "./versionType";

export interface UpdatePmtAppMethodByIdRequest {
    pmtAppMethodType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pmtAppMethodFields: PmtAppMethodFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}