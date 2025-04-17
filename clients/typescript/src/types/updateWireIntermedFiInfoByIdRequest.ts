import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { WireIntermedFiInfoFields_2 } from "./wireIntermedFiInfoFields_2";
import { VersionType } from "./versionType";

export interface UpdateWireIntermedFiInfoByIdRequest {
    wireSequenceNumber: number | null;
    wireIntermedFiInfoLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    wireIntermedFiInfoFields: WireIntermedFiInfoFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}