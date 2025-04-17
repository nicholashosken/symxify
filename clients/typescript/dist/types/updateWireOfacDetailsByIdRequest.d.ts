import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { WireOfacDetailsFields_2 } from "./wireOfacDetailsFields_2";
import { VersionType } from "./versionType";
export interface UpdateWireOfacDetailsByIdRequest {
    wireSequenceNumber: number | null;
    wireOfacDetailsLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    wireOfacDetailsFields: WireOfacDetailsFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
