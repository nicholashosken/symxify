import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { WireBeneficiaryInfoSingleSelectableFields } from "./wireBeneficiaryInfoSingleSelectableFields";
import { VersionType } from "./versionType";

export interface WireBeneficiaryInfoSelectFieldsRequest {
    wireSequenceNumber: number | null;
    wireBeneficiaryInfoLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: WireBeneficiaryInfoSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}