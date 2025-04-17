import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { WireBeneficiaryInfoFields_2 } from "./wireBeneficiaryInfoFields_2";
import { VersionType } from "./versionType";

export interface UpdateWireBeneficiaryInfoByIdRequest {
    wireSequenceNumber: number | null;
    wireBeneficiaryInfoLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    wireBeneficiaryInfoFields: WireBeneficiaryInfoFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}