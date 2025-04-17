import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { WireIntermedFiInfoSingleSelectableFields } from "./wireIntermedFiInfoSingleSelectableFields";
import { VersionType } from "./versionType";

export interface WireIntermedFiInfoSelectFieldsRequest {
    wireSequenceNumber: number | null;
    wireIntermedFiInfoLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: WireIntermedFiInfoSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}