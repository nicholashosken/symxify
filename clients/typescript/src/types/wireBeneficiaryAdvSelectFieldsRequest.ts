import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { WireBeneficiaryAdvSingleSelectableFields } from "./wireBeneficiaryAdvSingleSelectableFields";
import { VersionType } from "./versionType";

export interface WireBeneficiaryAdvSelectFieldsRequest {
    wireSequenceNumber: number | null;
    wireBeneficiaryAdvLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: WireBeneficiaryAdvSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}