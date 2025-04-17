import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { WireFiToFiInfoSingleSelectableFields } from "./wireFiToFiInfoSingleSelectableFields";
import { VersionType } from "./versionType";

export interface WireFiToFiInfoSelectFieldsRequest {
    wireSequenceNumber: number | null;
    wireFiToFiInfoLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: WireFiToFiInfoSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}