import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { WireBeneficiaryFiInfoFields_2 } from "./wireBeneficiaryFiInfoFields_2";
import { VersionType } from "./versionType";
export interface UpdateWireBeneficiaryFiInfoByIdRequest {
    wireSequenceNumber: number | null;
    wireBeneficiaryFiInfoLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    wireBeneficiaryFiInfoFields: WireBeneficiaryFiInfoFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
