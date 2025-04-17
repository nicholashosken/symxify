import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { WireBeneficiaryFiAdvSingleSelectableFields } from "./wireBeneficiaryFiAdvSingleSelectableFields";
import { VersionType } from "./versionType";
export interface WireBeneficiaryFiAdvSelectFieldsRequest {
    wireSequenceNumber: number | null;
    wireBeneficiaryFiAdvLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: WireBeneficiaryFiAdvSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
