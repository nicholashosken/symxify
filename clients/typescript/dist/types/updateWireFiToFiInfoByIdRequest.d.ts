import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { WireFiToFiInfoFields_2 } from "./wireFiToFiInfoFields_2";
import { VersionType } from "./versionType";
export interface UpdateWireFiToFiInfoByIdRequest {
    wireSequenceNumber: number | null;
    wireFiToFiInfoLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    wireFiToFiInfoFields: WireFiToFiInfoFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
