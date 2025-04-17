import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { WireBeneficiaryFiInfoSingleSelectableFields } from "./wireBeneficiaryFiInfoSingleSelectableFields";
import { VersionType } from "./versionType";
export interface WireBeneficiaryFiInfoSelectFieldsRequest {
    wireSequenceNumber: number | null;
    wireBeneficiaryFiInfoLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: WireBeneficiaryFiInfoSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
