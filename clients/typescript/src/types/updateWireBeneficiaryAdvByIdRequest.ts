import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { WireBeneficiaryAdvFields_2 } from "./wireBeneficiaryAdvFields_2";
import { VersionType } from "./versionType";

export interface UpdateWireBeneficiaryAdvByIdRequest {
    wireSequenceNumber: number | null;
    wireBeneficiaryAdvLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    wireBeneficiaryAdvFields: WireBeneficiaryAdvFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}