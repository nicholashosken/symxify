import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { WireBeneficiaryFiAdvFields_2 } from "./wireBeneficiaryFiAdvFields_2";
import { VersionType } from "./versionType";

export interface UpdateWireBeneficiaryFiAdvByIdRequest {
    wireSequenceNumber: number | null;
    wireBeneficiaryFiAdvLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    wireBeneficiaryFiAdvFields: WireBeneficiaryFiAdvFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}